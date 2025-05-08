import { Quiz } from "@/types/quiz";

export const accountingPaper1Quiz1: Quiz = {
  id: "accounting-paper1-quiz1",
  title: "Accounting Paper 1 - Quiz 1: Financial Statements",
  description: "Test your knowledge of financial statements and their components",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "Which financial statement shows a company's revenues and expenses?",
      options: ["Balance Sheet", "Cash Flow Statement", "Income Statement", "Statement of Shareholders' Equity"],
      correctAnswer: 2,
      explanation: "The Income Statement shows revenues, expenses, and resulting profit or loss over a specific period"
    },
    {
      id: 2,
      question: "What is the accounting equation?",
      options: ["Assets = Liabilities + Owner's Equity", "Assets = Liabilities - Owner's Equity", "Assets + Liabilities = Owner's Equity", "Assets - Liabilities = Owner's Equity"],
      correctAnswer: 0,
      explanation: "The fundamental accounting equation is: Assets = Liabilities + Owner's Equity"
    },
    {
      id: 3,
      question: "Which of these is NOT a current asset?",
      options: ["Cash", "Accounts Receivable", "Equipment", "Inventory"],
      correctAnswer: 2,
      explanation: "Equipment is a long-term (non-current) asset"
    },
    {
      id: 4,
      question: "What is working capital?",
      options: ["Total assets", "Current assets - Current liabilities", "Fixed assets", "Long-term debt"],
      correctAnswer: 1,
      explanation: "Working capital is the difference between current assets and current liabilities"
    },
    {
      id: 5,
      question: "What does GAAP stand for?",
      options: [
        "Global Accounting and Principles",
        "Generally Accepted Accounting Principles",
        "General Accounting and Payroll Principles",
        "Global Accounting Practices and Procedures"
      ],
      correctAnswer: 1,
      explanation: "GAAP stands for Generally Accepted Accounting Principles"
    }
  ]
};

export const accountingPaper1Quiz2: Quiz = {
  id: "accounting-paper1-quiz2",
  title: "Accounting Paper 1 - Quiz 2: Accounting Principles",
  description: "Test your understanding of fundamental accounting principles",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "What is the matching principle?",
      options: [
        "Recording revenues when earned",
        "Matching debits with credits",
        "Matching expenses with related revenues",
        "Matching assets with liabilities"
      ],
      correctAnswer: 2,
      explanation: "The matching principle states that expenses should be recorded in the same period as related revenues"
    },
    {
      id: 2,
      question: "What is the going concern principle?",
      options: [
        "A business will continue indefinitely",
        "A business is about to close",
        "A business is making profit",
        "A business has current assets"
      ],
      correctAnswer: 0,
      explanation: "Going concern assumes a business will continue operating indefinitely"
    },
    {
      id: 3,
      question: "What is the conservatism principle?",
      options: [
        "Always report highest values",
        "Report lowest values for assets/revenues",
        "Ignore potential losses",
        "Record only realized gains"
      ],
      correctAnswer: 1,
      explanation: "Conservatism principle suggests recording lower values for assets/revenues when in doubt"
    },
    {
      id: 4,
      question: "What does the materiality principle state?",
      options: [
        "Record all transactions",
        "Only record significant items",
        "Ignore small transactions",
        "Round all numbers"
      ],
      correctAnswer: 1,
      explanation: "Materiality states that only items significant enough to influence decisions need to be recorded"
    },
    {
      id: 5,
      question: "What is the economic entity principle?",
      options: [
        "Business and personal transactions are same",
        "Keep business transactions separate from personal",
        "Only record cash transactions",
        "Only record credit transactions"
      ],
      correctAnswer: 1,
      explanation: "Economic entity principle requires separation of business and personal transactions"
    }
  ]
};

export const accountingPaper1Quiz3: Quiz = {
  id: "accounting-paper1-quiz3",
  title: "Accounting Paper 1 - Quiz 3: Ethics and Professional Standards",
  description: "Test your knowledge of accounting ethics and professional conduct",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "What is the primary ethical responsibility of an accountant?",
      options: [
        "Maximize profit",
        "Serve public interest",
        "Minimize taxes",
        "Increase revenue"
      ],
      correctAnswer: 1,
      explanation: "An accountant's primary ethical responsibility is to serve the public interest"
    },
    {
      id: 2,
      question: "Which principle requires avoiding conflicts of interest?",
      options: ["Confidentiality", "Integrity", "Objectivity", "Due Care"],
      correctAnswer: 2,
      explanation: "Objectivity requires avoiding conflicts of interest and maintaining impartiality"
    },
    {
      id: 3,
      question: "What information can accountants disclose to others?",
      options: [
        "Any information",
        "Only public information",
        "Information with client permission",
        "No information"
      ],
      correctAnswer: 2,
      explanation: "Accountants can only disclose information with client permission or when legally required"
    },
    {
      id: 4,
      question: "What is professional skepticism?",
      options: [
        "Distrust of all evidence",
        "Questioning mind and critical assessment",
        "Accepting all statements",
        "Ignoring evidence"
      ],
      correctAnswer: 1,
      explanation: "Professional skepticism involves maintaining a questioning mind and critically assessing evidence"
    },
    {
      id: 5,
      question: "What is independence in accounting?",
      options: [
        "Working alone",
        "Freedom from influences that compromise judgment",
        "Not working with others",
        "Making all decisions alone"
      ],
      correctAnswer: 1,
      explanation: "Independence means being free from influences that could compromise professional judgment"
    },
    {
      id: 6,
      type: "multiple-select",
      question: "Which of these are fundamental principles of accounting ethics? Select all that apply:",
      options: [
        "Integrity",
        "Professional competence",
        "Objectivity",
        "Maximum profit",
        "Confidentiality"
      ],
      correctAnswers: [0, 1, 2, 4],
      explanation: "The fundamental principles of accounting ethics include integrity, professional competence, objectivity, and confidentiality. Maximum profit is not an ethical principle."
    }
  ]
};

export const accountingPaper1: Quiz = {
  id: "accounting-paper1",
  title: "Accounting - Paper 1: Financial Reporting & Ethics",
  description: "Tests understanding of financial statements, accounting concepts, and professional ethics. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Conceptual Framework (30 marks)
    {
      id: 1,
      context: `Study the following financial statements extract:

Statement of Financial Position (Extract)
Assets
Non-current assets      R850,000
Current assets         R320,000
Total assets          R1,170,000

Liabilities
Non-current liabilities R420,000
Current liabilities    R280,000
Total liabilities      R700,000

Equity                 R470,000`,
      question: "Calculate the current ratio and explain what it indicates about the business's liquidity.",
      type: "short-answer",
      correctAnswer: "Current ratio = Current assets/Current liabilities = 320,000/280,000 = 1.14:1\nThis indicates that the business has enough current assets to cover its current liabilities, but the ratio is slightly low (ideal is 2:1).",
      marks: 6,
      explanation: "Answer should show calculation and interpretation of liquidity ratio."
    },

    // Section B: Financial Statements (60 marks)
    {
      id: 10,
      type: "essay",
      context: `Company XYZ Ltd
Trial Balance as at 28 February 2025

                                Dr          Cr
Share capital                             1,000,000
Retained earnings                           250,000
Land and buildings        800,000
Equipment                400,000
Inventory                180,000
Accounts receivable      210,000
Bank                      95,000
Accounts payable                           315,000
Sales revenue                            2,400,000
Cost of sales          1,800,000
Operating expenses       480,000

Additional information:
1. Depreciation on equipment at 10% p.a.
2. Provision for bad debts to be 5% of accounts receivable
3. Insurance prepaid R15,000`,
      question: "Prepare the following financial statements:\n1. Statement of Comprehensive Income\n2. Statement of Financial Position\nShow all workings clearly.",
      markingCriteria: [
        "Correct format and presentation",
        "Accurate calculations",
        "Proper adjustments",
        "Appropriate classifications",
        "Notes and explanations"
      ],
      marks: 30,
      explanation: "Answer should demonstrate understanding of financial statement preparation and year-end adjustments."
    },

    // Section C: Ethics & Governance (60 marks)
    {
      id: 20,
      type: "essay",
      context: `Case Study: Ethical Dilemma

You are the accountant for ABC Manufacturing. The CEO approaches you with a request to:
• Delay recording a major supplier payment until next quarter
• Recognize revenue from a contract not yet finalized
• Adjust inventory values upward without proper valuation

Reason given: "We need to meet quarterly targets for our bank loan requirements."

Required: Analyze this situation considering:
1. Professional ethics
2. GAAP principles
3. Potential consequences
4. Appropriate response`,
      question: "Discuss the ethical implications and appropriate professional response to this situation.",
      markingCriteria: [
        "Application of ethical principles",
        "Reference to accounting standards",
        "Analysis of consequences",
        "Professional response",
        "Recommendations"
      ],
      marks: 20,
      explanation: "Response should demonstrate understanding of professional ethics and accounting principles."
    }
  ]
};