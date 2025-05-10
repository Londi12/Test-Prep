import { Quiz } from "@/types/quiz";

export const englishPaper3Quiz1: Quiz = {
  id: "english-paper3-quiz1",
  title: "English HL Paper 3 - Quiz 1: Essay Writing",
  description: "Test your knowledge of essay writing techniques and structures",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      question: "Which element is most essential in argumentative essay writing?",
      options: [
        "Descriptive language",
        "Clear thesis and supporting evidence",
        "Creative metaphors",
        "Complex vocabulary"
      ],
      correctAnswer: 1,
      explanation: "A clear thesis statement supported by relevant evidence is fundamental to argumentative writing."
    },
    {
      id: 2,
      question: "What is the purpose of a topic sentence?",
      options: [
        "To conclude a paragraph",
        "To introduce the main idea of a paragraph",
        "To provide evidence",
        "To create a transition"
      ],
      correctAnswer: 1,
      explanation: "A topic sentence introduces the main idea or focus of a paragraph, helping readers understand what the paragraph will discuss."
    },
    {
      id: 3,
      question: "What is the best way to support an argument in an essay?",
      options: [
        "Using emotional language",
        "Providing specific evidence and examples",
        "Adding more adjectives",
        "Making general statements"
      ],
      correctAnswer: 1,
      explanation: "Specific evidence and examples provide concrete support for arguments and make them more convincing."
    },
    {
      id: 4,
      question: "How should counterarguments be handled in an essay?",
      options: [
        "Ignored completely",
        "Acknowledged and refuted",
        "Stated without response",
        "Mentioned in conclusion"
      ],
      correctAnswer: 1,
      explanation: "Strong essays acknowledge opposing viewpoints and then refute them with evidence and reasoning."
    },
    {
      id: 5,
      question: "What is the purpose of a conclusion paragraph?",
      options: [
        "To introduce new arguments",
        "To summarize and reinforce main points",
        "To ask questions",
        "To provide evidence"
      ],
      correctAnswer: 1,
      explanation: "A conclusion should summarize the main points and reinforce the essay's overall argument or message."
    }
  ]
};

export const englishPaper3Quiz2: Quiz = {
  id: "english-paper3-quiz2",
  title: "English HL Paper 3 - Quiz 2: Creative Writing",
  description: "Test your understanding of creative writing techniques",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      question: "Which tense is most commonly used in narrative writing?",
      options: [
        "Present tense only",
        "Past tense only",
        "Future tense only",
        "Past tense primarily, with other tenses as needed"
      ],
      correctAnswer: 3,
      explanation: "While past tense is the traditional choice for narrative writing, other tenses can be used for specific effects or dialogue."
    },
    {
      id: 2,
      question: "What is the purpose of descriptive language in creative writing?",
      options: [
        "To make the text longer",
        "To help readers visualize and engage with the story",
        "To show off vocabulary",
        "To confuse the reader"
      ],
      correctAnswer: 1,
      explanation: "Descriptive language helps readers create mental images and become more engaged with the story."
    },
    {
      id: 3,
      question: "What is character development?",
      options: [
        "Physical description only",
        "How characters change throughout the story",
        "Listing character names",
        "Creating dialogue"
      ],
      correctAnswer: 1,
      explanation: "Character development shows how characters grow, change, or learn throughout the narrative."
    },
    {
      id: 4,
      question: "What makes effective dialogue in creative writing?",
      options: [
        "Using only formal language",
        "Making it sound natural and reveal character",
        "Using many dialogue tags",
        "Making it very long"
      ],
      correctAnswer: 1,
      explanation: "Effective dialogue sounds natural, reveals character traits, and advances the story."
    },
    {
      id: 5,
      question: "What is the importance of 'show, don't tell' in creative writing?",
      options: [
        "It makes writing longer",
        "It engages readers through sensory details",
        "It uses more adjectives",
        "It makes writing easier"
      ],
      correctAnswer: 1,
      explanation: "'Show, don't tell' uses sensory details and specific actions to help readers experience the story rather than just being told about it."
    }
  ]
};

export const englishPaper3Quiz3: Quiz = {
  id: "english-paper3-quiz3",
  title: "English HL Paper 3 - Quiz 3: Transactional Writing",
  description: "Test your knowledge of formal and informal writing formats",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      question: "What is the correct structure for a formal letter?",
      options: [
        "Greeting, body, signature",
        "Addresses, date, salutation, body, closing, signature",
        "Introduction, body, conclusion",
        "Date, message, signature"
      ],
      correctAnswer: 1,
      explanation: "A formal letter must include sender's address, recipient's address, date, salutation, body paragraphs, closing, and signature."
    },
    {
      id: 2,
      question: "Which type of writing requires an objective tone?",
      options: [
        "Personal narrative",
        "Poetry",
        "Formal report",
        "Descriptive essay"
      ],
      correctAnswer: 2,
      explanation: "Formal reports require an objective tone to present information without personal bias or emotional language."
    },
    {
      id: 3,
      question: "What is the purpose of a business proposal?",
      options: [
        "To tell a story",
        "To convince someone to take action",
        "To describe a place",
        "To express feelings"
      ],
      correctAnswer: 1,
      explanation: "A business proposal aims to persuade the reader to take a specific action or accept a proposed solution."
    },
    {
      id: 4,
      question: "What should be included in minutes of a meeting?",
      options: [
        "Personal opinions",
        "Key points, decisions, and action items",
        "Creative descriptions",
        "Emotional responses"
      ],
      correctAnswer: 1,
      explanation: "Minutes should record key discussion points, decisions made, and actions to be taken, without personal commentary."
    },
    {
      id: 5,
      question: "What is the main difference between formal and informal writing?",
      options: [
        "Length",
        "Tone and language choice",
        "Topic",
        "Format"
      ],
      correctAnswer: 1,
      explanation: "Formal writing uses professional tone and precise language, while informal writing is more casual and personal."
    }
  ]
};

export const englishPaper3: Quiz = {
  id: "english-paper3",
  title: "English HL Paper 3 - Writing",
  description: "Tests ability in different types of writing. Choose ONE question from each section. Total marks: 100",
  timeLimit: 9000, // 2.5 hours
  questions: [
    // Section A: Essay Writing (50 marks)
    {
      id: 1,
      type: "essay",
      context: `Essay Writing Framework:

Topic: "Social media: connecting or disconnecting us?"

Planning Stage (10 min):
1. Brainstorm (3 min)
   Pros:
   • Global connectivity
   • Information sharing
   • Support networks
   • Business opportunities
   
   Cons:
   • Surface relationships
   • Reduced face-to-face
   • Mental health issues
   • Privacy concerns

2. Structure (2 min):
   Intro:
   • Hook: Striking statistic
   • Context: Digital age
   • Thesis: Double-edged sword
   
   Body:
   • Para 1: Connectivity benefits
   • Para 2: Hidden costs
   • Para 3: Finding balance
   
   Conclusion:
   • Restate main points
   • Future outlook
   • Call to action

3. Evidence Types (2 min):
   • Statistics
   • Examples
   • Expert opinions
   • Personal observations

4. Language Focus (3 min):
   • Academic vocabulary
   • Varied sentence structure
   • Appropriate transitions
   • Formal register

Writing Stage (30 min):
• Follow plan structure
• Support each point
• Link paragraphs
• Maintain focus

Checking Stage (5 min):
• Arguments logical
• Evidence supports
• Grammar/spelling
• Word count`,
      question: "Write your essay following these criteria:\n1. Clear structure (introduction, body, conclusion)\n2. Appropriate style and tone\n3. Language accuracy\n4. Development of ideas\n5. Original thought",
      markingCriteria: [
        "Content & planning (30)",
        "Language use & style (15)",
        "Structure (5)"
      ],
      marks: 50,
      explanation: "Response should demonstrate sophisticated writing skills appropriate for Home Language level."
    },

    // Section B: Creative Writing (30 marks)
    {
      id: 2,
      type: "essay",
      context: `Short Story Framework:

Story ending with: "...and that's when everything changed."

Planning (8 min):
1. Story Elements:
   • Character: Clear protagonist
   • Setting: Vivid details
   • Conflict: Internal/external
   • Plot: Build tension
   • Theme: Change/transformation

2. Structure:
   • Opening: Hook reader
   • Rising action: Build tension
   • Climax: Key moment
   • Resolution: Change revealed

3. Literary Devices:
   • Sensory details
   • Dialogue
   • Imagery
   • Symbolism

Writing Tips:
• Show, don't tell
• Use specific details
• Vary sentence length
• Create atmosphere
• Strong ending`,
      question: "Write your piece considering:\n1. Appropriate format and style\n2. Creative use of language\n3. Engaging content\n4. Clear structure",
      markingCriteria: [
        "Content & creativity (15)",
        "Style & language use (10)",
        "Format & structure (5)"
      ],
      marks: 30,
      explanation: "Creative writing should show originality and effective use of literary devices."
    },

    // Section C: Transactional Writing (20 marks)
    {
      id: 3,
      type: "essay",
      context: `Choose ONE of the following transactional writing tasks:

1. Write a formal letter to your local newspaper about the need for better recycling facilities in your area.

2. Write a review of a recently released movie for your school magazine.

3. Write a speech for a career day presentation about the importance of pursuing one's passion.`,
      question: "Write your piece following:\n1. Correct format for chosen text type\n2. Appropriate register and tone\n3. Clear purpose\n4. Relevant content",
      markingCriteria: [
        "Content & planning (12)",
        "Language use (5)",
        "Format (3)"
      ],
      marks: 20,
      explanation: "Response should demonstrate understanding of appropriate format and register for different text types."
    }
  ]
};