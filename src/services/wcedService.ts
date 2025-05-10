import axios from 'axios';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { WCEDPaper, WCEDPaperContent, SyncStatus } from '@/types/wced';
import { wcedParser } from '@/lib/wcedParser';
import * as pdfjs from 'pdfjs-dist';
import localforage from 'localforage';

const BASE_URL = 'https://wcedeportal.co.za';
const CACHE_PREFIX = 'wced_cache_';
const CACHE_EXPIRY = 24 * 60 * 60 * 1000; // 24 hours

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Rate limiter: max 30 requests per minute
const rateLimiter = new RateLimiterMemory({
  points: 30,
  duration: 60,
});

// Initialize cache
const cache = localforage.createInstance({
  name: 'wced_cache'
});

export class WCEDService {
  private syncStatus: SyncStatus = {
    lastSync: new Date(0),
    papersProcessed: 0,
    errors: [],
    inProgress: false
  };

  private async getFromCache<T>(key: string): Promise<T | null> {
    try {
      const cached = await cache.getItem<{ data: T; timestamp: number }>(CACHE_PREFIX + key);
      if (cached && Date.now() - cached.timestamp < CACHE_EXPIRY) {
        return cached.data;
      }
      return null;
    } catch (error) {
      console.warn('Cache read failed:', error);
      return null;
    }
  }

  private async setCache<T>(key: string, data: T): Promise<void> {
    try {
      await cache.setItem(CACHE_PREFIX + key, {
        data,
        timestamp: Date.now()
      });
    } catch (error) {
      console.warn('Cache write failed:', error);
    }
  }

  private async fetchWithRateLimit(url: string, retries = 3): Promise<string | ArrayBuffer> {
    for (let i = 0; i < retries; i++) {
      try {
        // Wait for rate limiter
        await rateLimiter.consume('wced-fetch', 1);

        const response = await axios.get(url, {
          headers: {
            'User-Agent': 'Test-Prep-App/1.0 (Educational Purpose)',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,application/pdf,*/*;q=0.8',
          },
          timeout: 10000, // 10 second timeout
          ...(url.endsWith('.pdf') ? { responseType: 'arraybuffer' } : {})
        });

        if (response.status === 200) {
          return response.data;
        }
        throw new Error(`HTTP ${response.status}`);
      } catch (error: any) {
        console.error(`Attempt ${i + 1}/${retries} failed for ${url}:`, error.message);
        
        if (error.response?.status === 429) { // Too Many Requests
          const waitTime = parseInt(error.response.headers['retry-after'] || '60', 10);
          await new Promise(resolve => setTimeout(resolve, waitTime * 1000));
          continue;
        }
        
        if (i === retries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, i))); // Exponential backoff
      }
    }
    throw new Error('Max retries exceeded');
  }

  private async extractPDFContent(pdfData: ArrayBuffer): Promise<string> {
    try {
      const pdf = await pdfjs.getDocument({ data: pdfData }).promise;
      let content = '';
      
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        content += textContent.items.map(item => 'str' in item ? item.str : '').join(' ') + '\n';
      }

      return content;
    } catch (error) {
      console.error('PDF extraction failed:', error);
      throw new Error('Failed to extract PDF content');
    }
  }

  async getPastPapers(subject: string): Promise<WCEDPaper[]> {
    const cacheKey = `papers_${subject}`;
    const cached = await this.getFromCache<WCEDPaper[]>(cacheKey);
    if (cached) return cached;

    try {
      const html = await this.fetchWithRateLimit(`${BASE_URL}/past-papers/${subject.toLowerCase()}`);
      const papers = wcedParser.parseSubjectPage(html as string);
      await this.setCache(cacheKey, papers);
      return papers;
    } catch (error) {
      console.error('Error fetching past papers:', error);
      throw new Error('Failed to fetch past papers');
    }
  }

  async getPaperContent(paper: WCEDPaper): Promise<WCEDPaperContent> {
    const cacheKey = `content_${paper.id}`;
    const cached = await this.getFromCache<WCEDPaperContent>(cacheKey);
    if (cached) return cached;

    try {
      const data = await this.fetchWithRateLimit(paper.url);
      let content: string;

      if (paper.url.endsWith('.pdf')) {
        content = await this.extractPDFContent(data as ArrayBuffer);
      } else {
        content = data as string;
      }

      const parsed = wcedParser.parsePaperContent(content);
      const paperContent: WCEDPaperContent = {
        paper,
        ...parsed
      };

      await this.setCache(cacheKey, paperContent);
      return paperContent;
    } catch (error) {
      console.error('Error fetching paper content:', error);
      throw new Error('Failed to fetch paper content');
    }
  }

  async searchPapers(query: string): Promise<WCEDPaper[]> {
    try {
      const html = await this.fetchWithRateLimit(
        `${BASE_URL}/search?q=${encodeURIComponent(query)}`
      );
      return wcedParser.parseSearchResults(html as string);
    } catch (error) {
      console.error('Error searching papers:', error);
      throw new Error('Failed to search papers');
    }
  }

  async startSync(subjects: string[]): Promise<void> {
    if (this.syncStatus.inProgress) {
      throw new Error('Sync already in progress');
    }

    this.syncStatus = {
      lastSync: new Date(),
      papersProcessed: 0,
      errors: [],
      inProgress: true
    };

    try {
      for (const subject of subjects) {
        const papers = await this.getPastPapers(subject);
        
        for (const paper of papers) {
          try {
            await this.getPaperContent(paper);
            this.syncStatus.papersProcessed++;
          } catch (error: any) {
            this.syncStatus.errors.push(
              `Failed to process ${subject} paper ${paper.paper} (${paper.year}): ${error.message}`
            );
          }

          // Small delay between papers to be extra courteous
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    } finally {
      this.syncStatus.inProgress = false;
    }
  }

  getSyncStatus(): SyncStatus {
    return { ...this.syncStatus };
  }

  async clearCache(): Promise<void> {
    try {
      await cache.clear();
    } catch (error) {
      console.error('Failed to clear cache:', error);
      throw new Error('Cache clear failed');
    }
  }
}

export const wcedService = new WCEDService();