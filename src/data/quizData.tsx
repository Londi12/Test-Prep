import { Quiz, Subject } from "../types/quiz";
import { BookOpen, Calculator, DollarSign, Laptop, Atom } from "lucide-react";

export const subjects: Subject[] = [
  {
    name: "English Home Language",
    icon: <BookOpen className="w-5 h-5" />,
    papers: [
      {
        id: "english-paper1",
        title: "Paper 1: Language in Context",
        path: "/quizzes/english/paper1",
      },
      {
        id: "english-paper2",
        title: "Paper 2: Literature",
        path: "/quizzes/english/paper2",
      },
      {
        id: "english-paper3",
        title: "Paper 3: Writing",
        path: "/quizzes/english/paper3",
      },
    ],
  },
  {
    name: "Mathematics",
    icon: <Calculator className="w-5 h-5" />,
    papers: [
      {
        id: "maths-paper1",
        title: "Paper 1: Algebra, Functions & Graphs",
        path: "/quizzes/maths/paper1",
      },
      {
        id: "maths-paper2",
        title: "Paper 2: Geometry, Trigonometry & Statistics",
        path: "/quizzes/maths/paper2",
      },
    ],
  },
  {
    name: "Accounting",
    icon: <DollarSign className="w-5 h-5" />,
    papers: [
      {
        id: "accounting-paper1",
        title: "Paper 1: Financial Reporting & Ethics",
        path: "/quizzes/accounting/paper1",
      },
      {
        id: "accounting-paper2",
        title: "Paper 2: Managerial Accounting & Analysis",
        path: "/quizzes/accounting/paper2",
      },
    ],
  },
  {
    name: "Physical Science",
    icon: <Atom className="w-5 h-5" />,
    papers: [
      {
        id: "physical-science-paper1",
        title: "Paper 1: Physics",
        path: "/quizzes/physical-science/paper1",
      },
      {
        id: "physical-science-paper2",
        title: "Paper 2: Chemistry",
        path: "/quizzes/physical-science/paper2",
      },
    ],
  },
  {
    name: "Life Science",
    icon: <Laptop className="w-5 h-5" />,
    papers: [
      {
        id: "life-science-paper1",
        title: "Paper 1: Biology & Human Systems",
        path: "/quizzes/life-science/paper1",
      },
      {
        id: "life-science-paper2",
        title: "Paper 2: Environmental Studies & Genetics",
        path: "/quizzes/life-science/paper2",
      },
    ],
  },
];

export const quizzes: Record<string, Quiz> = {
  "english-paper1": {
    id: "english-paper1",
    title: "English HL Paper 1 - Language in Context",
    description: "Test your comprehension, summary skills, and language understanding in this 30-minute assessment",
    timeLimit: 1800, // 30 minutes
    questions: [
      // Section A: Comprehension
      {
        id: 1,
        context: "In today's leadership landscape, we face an interesting paradox. While humility is widely recognized and praised as a desirable leadership quality, our society often gravitates towards and rewards leaders who exude arrogance and self-importance. Despite research showing the effectiveness of humble leadership, we consistently choose and elevate more boastful, overconfident individuals to positions of power.",
        question: "Explain the contradiction mentioned in the paragraph above.",
        options: [
          "There is no contradiction in leadership styles",
          "Humility is seen as good, but arrogant leaders are more commonly chosen",
          "Leaders are always humble",
          "Arrogance is the only leadership quality"
        ],
        correctAnswer: 1,
        explanation: "The contradiction lies in how humility is viewed positively, yet arrogant leaders are more commonly chosen in practice."
      },
      {
        id: 2,
        question: "What does the writer suggest about society's perception of humility and leadership?",
        options: [
          "Humility is the best leadership trait and always chosen",
          "Arrogant leaders are better decision-makers",
          "Society admires humility but rewards arrogance",
          "Humble leaders are not real leaders"
        ],
        correctAnswer: 2,
        explanation: "The writer suggests a disconnect between society's stated values (admiring humility) and actual choices (rewarding arrogance)."
      },
      {
        id: 3,
        question: "Why are arrogant leaders often chosen over humble ones?",
        options: [
          "Because they appear more confident, charismatic, or entertaining",
          "Because they make better decisions",
          "Because humble leaders are ineffective",
          "Because arrogance is a positive trait"
        ],
        correctAnswer: 0,
        explanation: "Arrogant leaders are often chosen because they appear more confident, charismatic, or entertaining to people."
      },
      {
        id: 4,
        question: "What tone is created by the phrase 'exude arrogance and self-importance'?",
        options: [
          "Admiring",
          "Critical",
          "Neutral",
          "Excited"
        ],
        correctAnswer: 1,
        explanation: "The phrase creates a critical tone, suggesting disapproval of such behavior."
      },
      {
        id: 5,
        question: "Which phrase shows humility is viewed positively?",
        options: [
          "humility is a desirable leadership quality",
          "leaders must be strong",
          "confidence is key",
          "arrogance wins elections"
        ],
        correctAnswer: 0,
        explanation: "The phrase 'humility is a desirable leadership quality' directly states that humility is viewed positively."
      },
      {
        id: 6,
        question: "What is a synonym for 'emblematic'?",
        options: [
          "Unknown",
          "Typical",
          "Unusual",
          "Dishonest"
        ],
        correctAnswer: 1,
        explanation: "'Emblematic' means representative or typical of something."
      },
      // Section B: Summary
      {
        id: 7,
        type: 'multiple-select',
        question: "Select reasons why arrogant leaders are often chosen over humble ones:",
        options: [
          "They appear more confident",
          "They are more charismatic",
          "They make bold decisions",
          "They have higher public visibility",
          "They are perceived as stronger",
          "They are actually better leaders",
          "They are more humble",
          "They work harder"
        ],
        correctAnswers: [0, 1, 2, 3, 4],
        explanation: "The correct reasons are: confidence, charisma, bold decision-making, public visibility, and perceived strength."
      },
      // Section C: Language and Grammar
      {
        id: 8,
        question: "Convert to passive voice: 'Humility enables leaders to understand their limitations.'",
        options: [
          "Leaders are enabled by humility to understand their limitations",
          "Understanding limitations enables humble leaders",
          "Leaders understand their limitations through humility",
          "Limitations are understood by humble leaders"
        ],
        correctAnswer: 0,
        explanation: "The correct passive voice construction puts the object ('leaders') as the subject and includes 'are enabled by'."
      },
      {
        id: 9,
        question: "Begin with 'Entertaining showmen...': 'We gravitate towards entertaining showmen.'",
        options: [
          "Entertaining showmen are gravitated towards by us",
          "Entertaining showmen gravitate towards us",
          "Entertaining showmen we gravitate towards",
          "Entertaining showmen and we gravitate"
        ],
        correctAnswer: 0,
        explanation: "The correct passive voice construction maintains the meaning while beginning with 'Entertaining showmen'."
      },
      {
        id: 10,
        question: "What is the correct past tense version of: 'If we valued humility, we would choose better leaders.'",
        options: [
          "If we have valued humility, we would choose better leaders",
          "If we had valued humility, we would have chosen better leaders",
          "If we valued humility, we had chosen better leaders",
          "If we were valuing humility, we would choose better leaders"
        ],
        correctAnswer: 1,
        explanation: "The past perfect tense is required in both clauses for this type of conditional statement."
      }
    ]
  },
  "maths-paper1": {
    id: "maths-paper1",
    title: "Mathematics - Paper 1: Algebra, Functions & Graphs",
    description: "Test your knowledge on algebraic expressions, equations, and graphs",
    timeLimit: 300, // 5 minutes
    questions: [
      {
        id: 1,
        question: "Solve for x: 2x + 3 = 7",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        correctAnswer: 1,
        explanation: "2x + 3 = 7\n2x = 7 - 3\n2x = 4\nx = 2",
      },
      {
        id: 2,
        question: "Factorize: x² - 9",
        options: ["(x + 3)(x - 3)", "(x + 9)(x - 1)", "(x + 3)²", "(x - 3)²"],
        correctAnswer: 0,
        explanation: "x² - 9 is a difference of squares, which can be factorized as (x + 3)(x - 3)",
      },
      {
        id: 3,
        question: "If f(x) = 2x² + 3x - 1, what is f(2)?",
        options: ["8", "9", "11", "13"],
        correctAnswer: 2,
        explanation: "f(2) = 2(2)² + 3(2) - 1 = 2(4) + 6 - 1 = 8 + 6 - 1 = 13",
      },
      {
        id: 4,
        question: "What is the gradient of the line passing through points (1, 3) and (4, 9)?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 1,
        explanation: "Gradient = (y₂ - y₁) / (x₂ - x₁) = (9 - 3) / (4 - 1) = 6 / 3 = 2",
      },
      {
        id: 5,
        question: "If a quadratic function has roots at x = -2 and x = 3, which of the following could be its equation?",
        options: ["y = x² - x - 6", "y = x² + x - 6", "y = x² - x + 6", "y = x² + 2x + 3"],
        correctAnswer: 0,
        explanation: "If the roots are x = -2 and x = 3, the equation is of the form y = a(x + 2)(x - 3). Expanding: y = a(x² - 3x + 2x - 6) = a(x² - x - 6). With a = 1, we get y = x² - x - 6",
      }
    ]
  },
  "accounting-paper1": {
    id: "accounting-paper1",
    title: "Accounting - Paper 1: Financial Reporting & Ethics",
    description: "Test your knowledge on financial statements and ethical considerations",
    timeLimit: 300, // 5 minutes
    questions: [
      {
        id: 1,
        question: "Which financial statement shows a company's revenues and expenses over a specific time period?",
        options: ["Balance Sheet", "Cash Flow Statement", "Income Statement", "Statement of Shareholders' Equity"],
        correctAnswer: 2,
        explanation: "The Income Statement (also called Profit & Loss Statement) shows revenues, expenses, and resulting profit or loss over a specific period.",
      },
      {
        id: 2,
        question: "What accounting principle establishes that businesses should record expenses in the same period as the revenues they help generate?",
        options: ["Going Concern", "Materiality", "Matching Principle", "Conservatism"],
        correctAnswer: 2,
        explanation: "The Matching Principle states that expenses should be recorded in the same accounting period as the revenues they helped generate.",
      },
      {
        id: 3,
        question: "Which of the following is NOT a current asset?",
        options: ["Cash", "Accounts Receivable", "Equipment", "Inventory"],
        correctAnswer: 2,
        explanation: "Equipment is a long-term (non-current) asset, while cash, accounts receivable, and inventory are all current assets.",
      },
      {
        id: 4,
        question: "What is the accounting equation?",
        options: ["Assets = Liabilities + Owner's Equity", "Assets = Liabilities - Owner's Equity", "Assets + Liabilities = Owner's Equity", "Assets - Liabilities = Owner's Equity"],
        correctAnswer: 0,
        explanation: "The fundamental accounting equation is: Assets = Liabilities + Owner's Equity",
      },
      {
        id: 5,
        question: "Which ethical principle requires accountants to avoid conflicts of interest and maintain objectivity?",
        options: ["Confidentiality", "Integrity", "Professional Behavior", "Objectivity"],
        correctAnswer: 3,
        explanation: "The principle of Objectivity requires accountants to avoid conflicts of interest and maintain an impartial approach to their work.",
      }
    ]
  },
  "physical-science-paper1": {
    id: "physical-science-paper1",
    title: "Physical Science - Paper 1: Physics",
    description: "Test your knowledge on mechanics, waves, electricity and magnetism",
    timeLimit: 300, // 5 minutes
    questions: [
      {
        id: 1,
        question: "What is Newton's Second Law of Motion?",
        options: [
          "For every action, there is an equal and opposite reaction",
          "Force equals mass times acceleration",
          "An object in motion stays in motion unless acted upon by an external force",
          "Energy cannot be created or destroyed, only transformed"
        ],
        correctAnswer: 1,
        explanation: "Newton's Second Law states that Force (F) = mass (m) × acceleration (a)",
      },
      {
        id: 2,
        question: "Which of these is a unit of electric potential difference?",
        options: ["Ampere", "Ohm", "Volt", "Watt"],
        correctAnswer: 2,
        explanation: "Volt (V) is the SI unit for electric potential difference or voltage.",
      },
      {
        id: 3,
        question: "What is the frequency of a wave with a wavelength of 2 meters traveling at 4 m/s?",
        options: ["0.5 Hz", "2 Hz", "4 Hz", "8 Hz"],
        correctAnswer: 1,
        explanation: "Using the wave equation v = fλ, where v is velocity (4 m/s) and λ is wavelength (2 m): 4 = f × 2, so f = 2 Hz",
      },
      {
        id: 4,
        question: "Which phenomenon explains the bending of light when it passes from air into water?",
        options: ["Reflection", "Refraction", "Diffraction", "Interference"],
        correctAnswer: 1,
        explanation: "Refraction is the bending of a wave when it passes from one medium to another due to a change in speed.",
      },
      {
        id: 5,
        question: "According to Ohm's Law, what happens to the current if the voltage is doubled while the resistance remains constant?",
        options: ["It remains the same", "It doubles", "It halves", "It quadruples"],
        correctAnswer: 1,
        explanation: "According to Ohm's Law (V = IR), if voltage (V) doubles and resistance (R) is constant, then current (I) must also double.",
      }
    ]
  },
  "life-science-paper1": {
    id: "life-science-paper1",
    title: "Life Science - Paper 1: Biology & Human Systems",
    description: "Test your knowledge on cells, human physiology and biological processes",
    timeLimit: 300, // 5 minutes
    questions: [
      {
        id: 1,
        question: "Which organelle is responsible for energy production in the cell?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
        correctAnswer: 2,
        explanation: "Mitochondria are known as the 'powerhouse of the cell' because they produce most of the cell's supply of ATP (energy).",
      },
      {
        id: 2,
        question: "Which of these is NOT a function of the skeletal system?",
        options: ["Support", "Protection", "Movement", "Digestion"],
        correctAnswer: 3,
        explanation: "Digestion is a function of the digestive system, not the skeletal system. The skeletal system provides support, protection, and enables movement.",
      },
      {
        id: 3,
        question: "What is the main function of red blood cells?",
        options: ["Fighting infection", "Blood clotting", "Transporting oxygen", "Producing antibodies"],
        correctAnswer: 2,
        explanation: "Red blood cells (erythrocytes) contain hemoglobin, which allows them to transport oxygen from the lungs to the body's tissues.",
      },
      {
        id: 4,
        question: "During which phase of photosynthesis is oxygen produced?",
        options: ["Calvin Cycle", "Glycolysis", "Light-dependent reactions", "Krebs Cycle"],
        correctAnswer: 2,
        explanation: "Oxygen is produced during the light-dependent reactions of photosynthesis when water molecules are split.",
      },
      {
        id: 5,
        question: "Which hormone is responsible for regulating blood glucose levels?",
        options: ["Estrogen", "Testosterone", "Insulin", "Thyroxine"],
        correctAnswer: 2,
        explanation: "Insulin, produced by the pancreas, regulates blood glucose levels by allowing cells to take up and use glucose from the bloodstream.",
      }
    ]
  }
};

// Add placeholder data for other subjects
export const getQuizById = (quizId: string): Quiz | undefined => {
  return quizzes[quizId];
};

export const getAllQuizzes = (): Quiz[] => {
  return Object.values(quizzes);
};
