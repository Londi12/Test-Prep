import { wcedService } from './wcedService';
import { wcedParser } from '@/lib/wcedParser';
import { WCEDPaper } from '@/types/wced';

// Mock sample HTML responses
const mockSubjectPageHtml = `
  <table>
    <tr>
      <th>Year</th>
      <th>Paper</th>
      <th>Term</th>
      <th>Download</th>
    </tr>
    <tr>
      <td>2024</td>
      <td>1</td>
      <td>1</td>
      <td><a href="/downloads/math-2024-p1.pdf">Download</a></td>
    </tr>
    <tr>
      <td>2024</td>
      <td>2</td>
      <td>1</td>
      <td><a href="/downloads/math-2024-p2.pdf">Download</a></td>
    </tr>
  </table>
`;

const mockPaperContentHtml = `
  <div class="paper-instructions">
    <p>Time allowed: 120 minutes</p>
    <p>Total marks: 100</p>
    <ul>
      <li>Answer all questions</li>
      <li>Show all calculations clearly</li>
    </ul>
  </div>
  
  <div class="section">
    <h2>Section A - Algebra</h2>
    <div class="question">
      <p class="question-text">Solve for x: 2x + 5 = 15 (4 marks)</p>
    </div>
    <div class="question">
      <p class="question-text">Factorize completely: x² - 4 (3 marks)</p>
    </div>
  </div>
  
  <div class="section">
    <h2>Section B - Geometry</h2>
    <div class="question">
      <p class="question-text">Calculate the area of a circle with radius 7cm (5 marks)</p>
      <div class="sub-question">
        a) Show all your working (3 marks)
      </div>
      <div class="sub-question">
        b) Give your answer to 2 decimal places (2 marks)
      </div>
    </div>
  </div>
`;

const mockSearchResultsHtml = `
  <div class="search-results">
    <div class="search-result">
      <div class="subject">Mathematics</div>
      <div class="year">2024</div>
      <div class="paper-number">1</div>
      <div class="term">1</div>
      <a href="/downloads/math-2024-p1.pdf">Download Paper</a>
    </div>
  </div>
`;

describe('WCED Service Integration', () => {
  describe('Subject Page Parsing', () => {
    it('should parse papers from subject page', () => {
      const papers = wcedParser.parseSubjectPage(mockSubjectPageHtml);
      expect(papers).toHaveLength(2);
      expect(papers[0]).toMatchObject({
        year: 2024,
        paper: 1,
        term: 1,
      });
    });
  });

  describe('Paper Content Parsing', () => {
    it('should parse paper content with sections and questions', () => {
      const { questions, sections, metadata } = wcedParser.parsePaperContent(mockPaperContentHtml);
      
      expect(metadata.timeLimit).toBe(7200); // 120 minutes in seconds
      expect(metadata.instructions).toHaveLength(2);
      expect(sections).toHaveLength(2);
      expect(questions).toHaveLength(3);
      
      const geometrySection = sections.find(s => s.title.includes('Geometry'));
      expect(geometrySection?.questions[0].subQuestions).toHaveLength(2);
    });

    it('should correctly identify question types', () => {
      const { questions } = wcedParser.parsePaperContent(mockPaperContentHtml);
      const mathQuestion = questions.find(q => q.text.includes('Calculate'));
      expect(mathQuestion?.type).toBe('math');
    });
  });

  describe('Search Results Parsing', () => {
    it('should parse search results', () => {
      const papers = wcedParser.parseSearchResults(mockSearchResultsHtml);
      expect(papers).toHaveLength(1);
      expect(papers[0]).toMatchObject({
        subject: 'mathematics',
        year: 2024,
        paper: 1,
        term: 1,
      });
    });
  });
});

// Integration tests with actual WCED service
describe('WCED Service Live Tests', () => {
  jest.setTimeout(30000); // Allow 30s for external requests

  it('should fetch mathematics papers', async () => {
    try {
      const papers = await wcedService.getPastPapers('mathematics');