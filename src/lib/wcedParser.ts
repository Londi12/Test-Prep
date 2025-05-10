import * as cheerio from 'cheerio';
import type { CheerioAPI, Cheerio, AnyNode } from 'cheerio';
import { WCEDPaper, WCEDQuestion, WCEDSection } from '@/types/wced';

const BASE_URL = 'https://wcedeportal.co.za';

export class WCEDParser {
  parseSubjectPage(html: string): WCEDPaper[] {
    const $ = cheerio.load(html);
    const papers: WCEDPaper[] = [];

    // Try different possible paper list structures
    $('.paper-list tr, .paper-item, .resource-item').each((_, element) => {
      const $el = $(element);
      
      // Skip header rows
      if ($el.find('th').length > 0) return;
      
      // Try multiple selector patterns to find paper information
      const yearText = $el.find('[data-year], .year, td:nth-child(1)').first().text().trim();
      const year = parseInt(yearText.match(/\d{4}/)?.[0] || '', 10);
      
      const paperText = $el.find('[data-paper], .paper-number, td:nth-child(2)').first().text().trim();
      const paper = parseInt(paperText.match(/\d+/)?.[0] || '', 10);
      
      const termText = $el.find('[data-term], .term, td:nth-child(3)').first().text().trim();
      const term = termText ? parseInt(termText.match(/\d+/)?.[0] || '', 10) : undefined;
      
      // Extract subject from breadcrumb, page title, or metadata
      const subject = $('.breadcrumb .current, h1, [data-subject]')
        .first()
        .text()
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-');
      
      // Look for download link with multiple possible patterns
      const $link = $el.find('a[href*=".pdf"], a[href*="download"], a[href*="papers"]').first();
      const url = $link.attr('href');
      
      if (year && paper && url && subject) {
        papers.push({
          id: `${subject}-${year}-p${paper}${term ? `-t${term}` : ''}`,
          subject,
          year,
          paper,
          term,
          url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
        });
      }
    });

    return papers;
  }

  parsePaperContent(content: string): {
    questions: WCEDQuestion[];
    sections: WCEDSection[];
    metadata: { totalMarks: number; timeLimit: number; instructions?: string[] };
  } {
    // Try to determine if content is from PDF or HTML
    const isPDF = !content.includes('<!DOCTYPE') && !content.includes('<html');
    
    if (isPDF) {
      return this.parsePDFContent(content);
    }
    
    const $ = cheerio.load(content);
    const questions: WCEDQuestion[] = [];
    const sections: WCEDSection[] = [];
    const metadata = {
      totalMarks: 0,
      timeLimit: 0,
      instructions: [] as string[],
    };

    // Extract metadata
    this.extractMetadata($, metadata);

    // Parse sections and questions
    $('.section, .question-section, div[id*="section"]').each((sectionIndex, sectionEl) => {
      const $section = $(sectionEl);
      const title = $section.find('h2, h3, .section-title').first().text().trim();
      const sectionQuestions: WCEDQuestion[] = [];

      this.parseQuestionsInSection($section, sectionQuestions, title);

      if (title && sectionQuestions.length > 0) {
        sections.push({ title, questions: sectionQuestions });
        questions.push(...sectionQuestions);
        metadata.totalMarks += sectionQuestions.reduce((sum, q) => sum + (q.marks || 0), 0);
      }
    });

    // If no sections found, try parsing questions directly
    if (sections.length === 0) {
      this.parseStandaloneQuestions($, questions, metadata);
    }

    return { questions, sections, metadata };
  }

  private parsePDFContent(content: string): {
    questions: WCEDQuestion[];
    sections: WCEDSection[];
    metadata: { totalMarks: number; timeLimit: number; instructions?: string[] };
  } {
    const lines = content.split('\n').map(line => line.trim()).filter(line => line);
    const questions: WCEDQuestion[] = [];
    const sections: WCEDSection[] = [];
    const metadata = {
      totalMarks: 0,
      timeLimit: 0,
      instructions: [] as string[],
    };

    let currentSection: { title: string; questions: WCEDQuestion[] } | null = null;
    let currentQuestion: Partial<WCEDQuestion> | null = null;

    // Extract metadata from first few lines
    for (let i = 0; i < Math.min(20, lines.length); i++) {
      const line = lines[i].toLowerCase();
      
      // Look for time limit
      const timeMatch = line.match(/(?:time|duration|allowed).*?(\d+)\s*(?:minutes|mins)/i);
      if (timeMatch) {
        metadata.timeLimit = parseInt(timeMatch[1], 10) * 60;
      }

      // Look for instructions
      if (line.includes('instruction') || line.includes('note to candidates')) {
        while (i < lines.length && lines[i + 1]?.startsWith('-')) {
          metadata.instructions.push(lines[++i].substring(1).trim());
        }
      }
    }

    // Process remaining lines
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Check for section headers
      if (line.match(/^SECTION [A-Z]|^PART \d/i)) {
        if (currentSection) {
          sections.push(currentSection);
        }
        currentSection = {
          title: line,
          questions: [],
        };
        continue;
      }

      // Check for question markers
      const questionMatch = line.match(/^(?:QUESTION|Q)\s*(\d+)/i);
      if (questionMatch) {
        if (currentQuestion) {
          const question = this.finalizeQuestion(currentQuestion);
          questions.push(question);
          if (currentSection) {
            currentSection.questions.push(question);
          }
        }

        currentQuestion = {
          id: `q${questionMatch[1]}`,
          text: line,
          type: this.inferQuestionTypeFromText(line),
        };

        // Look ahead for marks
        const nextLine = lines[i + 1];
        if (nextLine) {
          const marksMatch = nextLine.match(/\((\d+)\s*marks?\)/i);
          if (marksMatch) {
            currentQuestion.marks = parseInt(marksMatch[1], 10);
            metadata.totalMarks += currentQuestion.marks;
            i++; // Skip the marks line
          }
        }
        continue;
      }

      // Append text to current question
      if (currentQuestion) {
        currentQuestion.text += '\n' + line;
      }
    }

    // Add final question and section
    if (currentQuestion) {
      const question = this.finalizeQuestion(currentQuestion);
      questions.push(question);
      if (currentSection) {
        currentSection.questions.push(question);
      }
    }
    if (currentSection) {
      sections.push(currentSection);
    }

    return { questions, sections, metadata };
  }

  private extractMetadata($: CheerioAPI, metadata: { totalMarks: number; timeLimit: number; instructions: string[] }): void {
    // Extract instructions
    $('.instructions, .paper-instructions, .notes')
      .find('li, p')
      .each((_, el) => {
        const text = $(el).text().trim();
        if (text) metadata.instructions.push(text);
      });

    // Look for time limit
    const timeText = $('body').text();
    const timeMatch = timeText.match(/(?:time allowed|duration|time limit):\s*(\d+)\s*(?:minutes|mins)/i);
    if (timeMatch) {
      metadata.timeLimit = parseInt(timeMatch[1], 10) * 60;
    }

    // Look for total marks
    const marksMatch = timeText.match(/total(?:\s+marks)?:\s*(\d+)/i);
    if (marksMatch) {
      metadata.totalMarks = parseInt(marksMatch[1], 10);
    }
  }

  private parseQuestionsInSection($section: Cheerio<Element>, questions: WCEDQuestion[], sectionTitle: string): void {
    const $ = cheerio.load($section.html() || '');
    $section.find('.question, .question-item, [id*="question"]').each((questionIndex, questionEl) => {
      const $question = $(questionEl);
      const text = $question.find('.question-text, p').first().text().trim();
      
      // Extract marks
      const marksText = $question.text().match(/\((\d+)\s*marks?\)/i);
      const marks = marksText ? parseInt(marksText[1], 10) : undefined;
      
      // Detect question type
      const type = this.inferQuestionTypeFromContent($question);
      
      // Parse sub-questions
      const subQuestions = this.parseSubQuestions($question);
      
      if (text) {
        const question: WCEDQuestion = {
          id: `${sectionTitle}-q${questionIndex + 1}`,
          text,
          marks,
          type,
          section: sectionTitle,
          subQuestions: subQuestions.length > 0 ? subQuestions : undefined,
        };
        questions.push(question);
      }
    });
  }

  private parseStandaloneQuestions($: CheerioAPI, questions: WCEDQuestion[], metadata: { totalMarks: number }): void {
    $('.question, .question-item, [id*="question"]').each((index, element) => {
      const $question = $(element);
      const text = $question.find('.question-text, p').first().text().trim();
      const marksMatch = text.match(/\((\d+)\s*marks?\)/i);
      const marks = marksMatch ? parseInt(marksMatch[1], 10) : undefined;
      
      if (text) {
        const question: WCEDQuestion = {
          id: `q${index + 1}`,
          text,
          marks,
          type: this.inferQuestionTypeFromContent($question),
          subQuestions: this.parseSubQuestions($question),
        };
        questions.push(question);
        metadata.totalMarks += marks || 0;
      }
    });
  }

  private parseSubQuestions($question: Cheerio<CheerioNode>): WCEDQuestion[] {
    const subQuestions: WCEDQuestion[] = [];
    const $subs = $question.find('.sub-question, [id*="subquestion"]');
    
    $subs.each((index, element) => {
      const $sub = cheerio.load(element);
      const text = $sub.text().trim();
      const marksMatch = text.match(/\((\d+)\s*marks?\)/i);
      
      if (text) {
        subQuestions.push({
          id: `sub${index + 1}`,
          text,
          marks: marksMatch ? parseInt(marksMatch[1], 10) : undefined,
          type: this.inferQuestionTypeFromText(text),
        });
      }
    });

    return subQuestions;
  }

  private inferQuestionTypeFromContent($question: Cheerio<CheerioNode>): string {
    const text = $question.text().toLowerCase();
    return this.inferQuestionTypeFromText(text);
  }

  private inferQuestionTypeFromText(text: string): string {
    text = text.toLowerCase();
    
    // Check for multiple choice indicators
    if (text.includes('choose the correct') || /\([a-d]\)/.test(text)) {
      return 'multiple-choice';
    }
    
    // Check for true/false
    if (text.includes('true or false') || text.includes('true/false')) {
      return 'true-false';
    }
    
    // Check for matching
    if (text.includes('match') || text.includes('column a') || text.includes('column b')) {
      return 'matching';
    }
    
    // Check for fill in blanks
    if (text.includes('fill in') || text.includes('complete the')) {
      return 'fill-blanks';
    }
    
    // Check for mathematical content
    if (text.includes('calculate') || text.includes('solve') || /\d+\s*[+\-×÷=]/.test(text)) {
      return 'math';
    }
    
    // Check for essay indicators
    if (text.includes('essay') || text.includes('discuss') || text.includes('explain in detail')) {
      return 'essay';
    }
    
    // Default to short answer
    return 'short-answer';
  }

  private finalizeQuestion(question: Partial<WCEDQuestion>): WCEDQuestion {
    return {
      id: question.id || 'unknown',
      text: question.text || '',
      marks: question.marks,
      type: question.type || this.inferQuestionTypeFromText(question.text || ''),
      section: question.section,
      subQuestions: question.subQuestions,
    };
  }

  parseSearchResults(html: string): WCEDPaper[] {
    const $ = cheerio.load(html);
    const papers: WCEDPaper[] = [];

    // Search results might be in a table, list, or card format
    $('.search-result, .result-item, tbody tr').each((_, element) => {
      const $el = $(element);
      
      // Skip headers
      if ($el.find('th').length > 0) return;

      // Extract information using multiple possible selectors
      const subject = $el.find('[data-subject], .subject, td:nth-child(1)').first().text().trim().toLowerCase();
      const yearText = $el.find('[data-year], .year, td:nth-child(2)').first().text().trim();
      const year = parseInt(yearText.match(/\d{4}/)?.[0] || '', 10);
      
      const paperText = $el.find('[data-paper], .paper-number, td:nth-child(3)').first().text().trim();
      const paper = parseInt(paperText.match(/\d+/)?.[0] || '', 10);
      
      const termText = $el.find('[data-term], .term, td:nth-child(4)').first().text().trim();
      const term = termText ? parseInt(termText.match(/\d+/)?.[0] || '', 10) : undefined;
      
      const url = $el.find('a[href*=".pdf"], a[href*="download"]').first().attr('href');

      if (subject && year && paper && url) {
        papers.push({
          id: `${subject}-${year}-p${paper}${term ? `-t${term}` : ''}`,
          subject,
          year,
          paper,
          term,
          url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
        });
      }
    });

    return papers;
  }
}

export const wcedParser = new WCEDParser();