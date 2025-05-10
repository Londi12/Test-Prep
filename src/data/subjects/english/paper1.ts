import { Quiz } from "@/types/quiz";
import { QuizData } from '../../../types/quiz';

export const englishPaper1Quiz1: Quiz = {
  id: "english-paper1-quiz1",
  title: "English HL Paper 1 - Reading Comprehension",
  description: "Develop and demonstrate your comprehension skills by analyzing texts and answering questions about their content, purpose, and implications",
  timeLimit: 1800,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      context: `In an age of increasing environmental awareness, the concept of "greenwashing" has emerged as a concerning trend in corporate marketing. Companies often present themselves as environmentally responsible while their actual practices tell a different story. This disconnect between image and reality poses a significant challenge for consumers trying to make ethical purchasing decisions.`,
      question: "What is the main purpose of this text?",
      options: [
        "To entertain readers with corporate stories",
        "To expose the practice of greenwashing in corporate marketing",
        "To promote environmental products",
        "To celebrate corporate achievements"
      ],
      correctAnswer: 1,
      explanation: "The text aims to highlight the issue of greenwashing, where companies present an environmentally friendly image that differs from their actual practices."
    },
    {
      id: 2,
      type: "short-answer",
      context: `The writer states: "This disconnect between image and reality poses a significant challenge for consumers..."`,
      question: "Explain how this 'disconnect' affects consumers. Use your own words.",
      correctAnswer: "Consumers struggle to make truly ethical purchasing choices because companies' environmental claims may not reflect their actual practices",
      explanation: "The answer should identify the difficulty consumers face in making informed decisions due to misleading corporate environmental claims."
    },
    {
      id: 3,
      type: "multiple-choice",
      question: "The writer's tone in this passage can best be described as:",
      options: [
        "Humorous and light-hearted",
        "Critical and concerned",
        "Neutral and objective",
        "Enthusiastic and supportive"
      ],
      correctAnswer: 1,
      explanation: "The writer's tone shows criticism of greenwashing practices and concern about their impact on consumer decision-making."
    },
    {
      id: 4,
      type: "essay",
      context: `In recent years, many companies have embraced "green" marketing strategies. While some corporations genuinely commit to environmental sustainability, others engage in greenwashing - the practice of making misleading environmental claims. For instance, some companies advertise their products as "eco-friendly" based on a single minor feature while ignoring their overall environmental impact. Marketing materials often use vague terms like "natural" or "green" without substantiation, and packaging may feature nature-inspired imagery that implies environmental responsibility without actual sustainable practices.`,
      question: "Analyze how the writer uses language to convey their message about greenwashing. Refer to specific examples from the text.",
      markingCriteria: [
        "Identification of language devices",
        "Analysis of word choice",
        "Discussion of tone",
        "Use of specific examples",
        "Explanation of effect on reader"
      ],
      wordLimit: 300,
      explanation: "Look for use of quotation marks to indicate skepticism, specific examples of misleading terms, and the contrast between claims and reality."
    },
    {
      id: 5,
      type: "multiple-choice",
      question: "Which of these best summarizes the writer's main argument?",
      options: [
        "Companies are becoming more environmentally responsible",
        "Marketing is an essential business tool",
        "Corporate environmental claims often mislead consumers",
        "Consumers don't care about environmental issues"
      ],
      correctAnswer: 2,
      explanation: "The main argument focuses on how corporate environmental claims often don't match reality, misleading consumers."
    }
  ]
};

export const englishPaper1Quiz2: Quiz = {
  id: "english-paper1-quiz2",
  title: "English HL Paper 1 - Summary Writing",
  description: "Practice identifying key points and writing concise summaries",
  timeLimit: 600,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      context: `Digital literacy has become essential in modern education. Students need to develop skills in evaluating online sources, understanding digital media, and creating digital content. Additionally, they must learn to protect their privacy online and use technology responsibly. Schools are incorporating these skills into their curricula, recognizing that digital competence is as fundamental as traditional literacy and numeracy.`,
      question: "Which statement best captures the main idea of this text?",
      options: [
        "Schools are using more technology",
        "Digital literacy is now a core educational requirement",
        "Students spend too much time online",
        "Technology is changing rapidly"
      ],
      correctAnswer: 1,
      explanation: "The text primarily emphasizes how digital literacy has become a fundamental educational requirement, comparable to traditional skills."
    },
    {
      id: 2,
      type: "short-answer",
      context: "Summarize the text in 30-40 words.",
      correctAnswer: "Digital literacy, including skills in evaluating online sources, understanding digital media, and using technology responsibly, has become essential in modern education and is being integrated into school curricula.",
      explanation: "This summary captures the key points while eliminating unnecessary details and examples."
    },
    {
      id: 3,
      type: "multiple-select",
      question: "Which elements should be included in your summary? Select all that apply.",
      options: [
        "The main concept of digital literacy's importance",
        "The specific examples of digital skills",
        "The comparison to traditional literacy",
        "Detailed explanations of online privacy",
        "The schools' response to this need"
      ],
      correctAnswers: [0, 2, 4],
      explanation: "A good summary should include the main concept, significant comparisons, and broader implications while excluding specific examples and detailed explanations."
    },
    {
      id: 4,
      type: "matching",
      question: "Match each element with whether it should be included or excluded in a summary:",
      pairs: [
        { left: "Main arguments", right: "Include" },
        { left: "Supporting examples", right: "Exclude" },
        { left: "Key conclusions", right: "Include" },
        { left: "Detailed explanations", right: "Exclude" }
      ],
      explanation: "Summaries should focus on main points and conclusions while excluding supporting details and examples."
    },
    {
      id: 5,
      type: "short-answer",
      context: `Read and summarize in 20-25 words:
      
      The impact of social media on political discourse has been profound. Platforms like Twitter and Facebook have transformed how political messages are delivered and consumed. These platforms enable instant communication but can also spread misinformation rapidly. The shortened format of social media posts often leads to oversimplification of complex issues.`,
      correctAnswer: "Social media has revolutionized political communication, enabling instant messaging but risking oversimplification and misinformation spread.",
      explanation: "This summary captures the key points about social media's impact on political communication while omitting specific platform names and detailed explanations."
    }
  ]
};

export const englishPaper1Quiz3: Quiz = {
  id: "english-paper1-quiz3",
  title: "English HL Paper 1 - Comprehension & Analysis",
  description: "Practice analyzing text passages and answering comprehension questions",
  timeLimit: 900,
  questions: [
    {
      id: 1,
      type: "multiple-choice",
      context: `The old house stood silently at the end of the street, its weathered walls holding secrets of generations past. Through broken windows, lace curtains danced in the evening breeze, whispering tales of former glory. The once-manicured garden had surrendered to wilderness, with roses and weeds battling for supremacy.`,
      question: "What is the dominant mood created by this description?",
      options: [
        "Joy and celebration",
        "Melancholy and decay",
        "Fear and suspense",
        "Hope and renewal"
      ],
      correctAnswer: 1,
      explanation: "The description emphasizes decay ('weathered walls', 'broken windows') and past glory, creating a melancholic mood."
    },
    {
      id: 2,
      type: "short-answer",
      question: "Identify and explain TWO literary devices used in the passage above.",
      correctAnswer: "1. Personification: curtains 'dancing' and 'whispering'\n2. Metaphor: garden's 'battle' between roses and weeds",
      explanation: "The passage uses personification to give human qualities to inanimate objects and metaphor to compare the garden's state to a battle."
    },
    {
      id: 3,
      type: "multiple-select",
      question: "Which themes are explored in this passage? Select all that apply.",
      options: [
        "The passage of time",
        "The contrast between past and present",
        "The conflict between nature and civilization",
        "The fear of the unknown",
        "The joy of renovation"
      ],
      correctAnswers: [0, 1, 2],
      explanation: "The passage explores time's passage, contrasts past glory with present decay, and shows nature reclaiming civilized spaces."
    },
    {
      id: 4,
      type: "essay",
      question: "Analyze how the writer uses descriptive language to create a sense of nostalgia and decay. Support your answer with specific references to the text.",
      sampleAnswer: "The writer effectively creates a sense of nostalgia and decay through carefully chosen descriptive language. The house is personified as standing 'silently,' suggesting abandonment and loneliness. The 'weathered walls' and 'broken windows' directly convey physical decay, while simultaneously implying the passage of time. The phrase 'former glory' explicitly references the past, creating nostalgia by suggesting a contrast with the present state. The description of the garden, where 'roses and weeds' battle, symbolically represents the struggle between cultivation and decay, further reinforcing the theme of decline from a more prosperous past.",
      explanation: "A strong response analyzes specific language choices, explains their effects, and links them to the overall themes."
    },
    {
      id: 5,
      type: "multiple-choice",
      context: "The once-manicured garden had surrendered to wilderness",
      question: "What does this line suggest about the relationship between human control and nature?",
      options: [
        "Nature is always destructive",
        "Human control is permanent",
        "Nature ultimately reclaims what humans abandon",
        "Gardening is difficult work"
      ],
      correctAnswer: 2,
      explanation: "The line suggests that without continued human maintenance, nature will reclaim cultivated spaces, using 'surrendered' to imply the inevitable victory of natural forces."
    }
  ]
};

export const englishPaper1Quiz4: Quiz = {
  id: "english-paper1-quiz4",
  title: "English Paper 1 - Quiz 4: Common Misconceptions",
  description: "Review and correct common misconceptions in English language usage and analysis",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Common Misconception:
"A thesis statement should be the first sentence
of your essay introduction."

Correct Understanding:
1. Introduction should:
   • Start with context/hook
   • Build background
   • Present thesis near end
2. Thesis placement:
   • Usually last sentence of intro
   • Acts as bridge to body
   • Sets up essay structure
3. Purpose:
   • Guide reader expectations
   • Preview main arguments
   • Show essay direction`,
      question: "Where should a thesis statement appear in an introduction?",
      options: [
        "As the very first sentence",
        "Near or at the end of introduction",
        "In the middle paragraph",
        "In the conclusion"
      ],
      correctAnswer: 1,
      explanation: "The thesis should come after context and background, usually at the end of the introduction where it can naturally lead into the body paragraphs."
    },
    {
      id: 2,
      context: `Common Misconception:
"Literary devices are just fancy decorations
that authors use to make their writing pretty."

Correct Understanding:
1. Literary devices:
   • Serve specific purposes
   • Enhance meaning
   • Support themes
   • Create effects
2. Examples:
   • Metaphors reveal connections
   • Imagery creates atmosphere
   • Symbolism deepens meaning
   • Structure reflects content`,
      question: "What is the primary purpose of literary devices?",
      options: [
        "To make writing sound sophisticated",
        "To convey meaning and enhance themes",
        "To decorate the text",
        "To confuse readers"
      ],
      correctAnswer: 1,
      explanation: "Literary devices are tools that help writers convey deeper meanings, support themes, and create specific effects, not just decorative elements."
    }
  ]
};

export const englishPaper1Quiz5: Quiz = {
  id: "english-paper1-quiz5",
  title: "English Paper 1 - Quiz 5: Exam Technique",
  description: "Learn effective strategies for English Language examinations",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Approaching Comprehension Questions:

Given: A complex literary passage with
multiple layers of meaning.

Effective Strategy:
1. First reading (3 min):
   • Get overall meaning
   • Note main ideas
   • Mark key words
   • Identify tone/mood

2. Second reading (5 min):
   • Analyze details
   • Note literary devices
   • Find evidence
   • Consider implications

3. Answering (12 min):
   • Quote relevant parts
   • Explain significance
   • Link to question
   • Check marking allocation`,
      question: "Why is a two-reading approach recommended for comprehension?",
      options: [
        "To use more time",
        "First for overview, second for detail",
        "To memorize the text",
        "To practice reading"
      ],
      correctAnswer: 1,
      explanation: "The first reading provides overall understanding, while the second allows for detailed analysis and evidence gathering."
    },
    {
      id: 2,
      context: `Essay Writing Strategy:

Poor conclusion example:
"In conclusion, I have written about social media."

Better conclusion:
"While social media has revolutionized communication,
its impact on personal relationships remains complex.
As shown through the examples discussed, careful
management of digital interactions is crucial for
maintaining meaningful connections in the modern age."

Key differences:
1. Summarizes main arguments
2. Links to essay question
3. Shows thoughtful reflection
4. Provides closure`,
      question: "What makes an effective essay conclusion?",
      options: [
        "Simply stating 'in conclusion'",
        "Summarizing and reflecting on main arguments",
        "Adding new points",
        "Repeating the introduction"
      ],
      correctAnswer: 1,
      explanation: "An effective conclusion synthesizes the main arguments, reflects on their significance, and provides thoughtful closure without introducing new points."
    }
  ]
};

export const englishPaper1: Quiz = {
  id: "english-paper1",
  title: "English HL Paper 1 - Language in Context",
  description: "Test your comprehension, summary skills, and language understanding. This paper consists of 3 sections: A (Comprehension), B (Summary) and C (Language Structures)",
  timeLimit: 7200, // 2 hours
  questions: [
    // Section A: Comprehension (30 marks)
    {
      id: 1,
      type: "multiple-choice",
      context: `Read the following passage carefully and answer the questions that follow:

[Text A - Magazine article on environmental issues]
In an age of increasing environmental awareness, the concept of "greenwashing" has emerged as a concerning trend in corporate marketing. Companies often present themselves as environmentally responsible while their actual practices tell a different story. This disconnect between image and reality poses a significant challenge for consumers trying to make ethical purchasing decisions.

Recent studies indicate that up to 40% of environmental claims made by major corporations contain misleading information. These range from vague statements about "eco-friendly" products to more specific but unsubstantiated claims about recycling and carbon neutrality. The impact of such deception extends beyond consumer trust - it potentially undermines genuine environmental initiatives and slows progress toward sustainable practices.`,
      question: "What is the main purpose of this text?",
      options: [
        "To entertain readers with corporate stories",
        "To expose the practice of greenwashing in corporate marketing",
        "To promote environmental products",
        "To celebrate corporate achievements"
      ],
      correctAnswer: 1,
      marks: 2,
      explanation: "The text primarily aims to expose and explain the practice of greenwashing in corporate marketing, highlighting its negative impacts."
    },
    // Add more comprehension questions...

    // Section B: Summary (10 marks)
    {
      id: 10,
      type: "short-answer",
      context: `Read Text B and summarize the key points about digital literacy in modern education.
      
Digital literacy has become essential in modern education. Students need to develop skills in evaluating online sources, understanding digital media, and creating digital content. Additionally, they must learn to protect their privacy online and use technology responsibly. Schools are incorporating these skills into their curricula, recognizing that digital competence is as fundamental as traditional literacy and numeracy.`,
      question: "Summarize the main points about digital literacy in education in 50-60 words.",
      correctAnswer: "Digital literacy, including skills in evaluating online sources, understanding digital media, and using technology responsibly, has become essential in modern education and is being integrated into school curricula. Digital competence is now considered as fundamental as traditional literacy and numeracy.",
      marks: 10,
      explanation: "A good summary captures the key points while maintaining coherence and staying within the word limit."
    },

    // Section C: Language Structures (30 marks)
    {
      id: 11,
      type: "multiple-choice",
      context: "Identify the correct form of the verb in the following sentence:",
      question: "If we ___ (value) humility more, we ___ (choose) better leaders.",
      options: [
        "value, would choose",
        "valued, would have chosen",
        "had valued, would have chosen",
        "were valuing, would choose"
      ],
      correctAnswer: 1,
      marks: 2,
      explanation: "The second conditional requires the past tense in the if-clause and would + infinitive in the main clause."
    }
    // Continue with more language questions...
  ]
};

export const paper1Quizzes: QuizData[] = [
  {
    id: 'eng-hl-p1-comprehension',
    title: 'Comprehension and Language',
    description: 'Practice questions focused on reading comprehension and language use',
    timeLimit: 120,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Which statement best captures the main idea of paragraphs 1-3?',
        options: [
          'A detailed analysis of modern communication methods',
          'The evolution of social interaction patterns',
          'A comparison of traditional and modern values',
          'The impact of technological advancement on society'
        ],
        correctAnswer: 3,
        points: 2
      },
      {
        id: 'q2',
        type: 'short-answer',
        question: 'Explain how the writer uses language devices to convey their message in paragraph 4.',
        correctAnswer: 'The writer uses metaphors and imagery to illustrate the concept, along with carefully chosen emotive language to engage the reader.',
        points: 4
      },
      {
        id: 'q3',
        type: 'essay',
        question: 'Analyze how the author builds their argument throughout the passage. In your response, consider structure, language choices, and rhetorical devices.',
        maxWords: 300,
        points: 10
      },
      {
        id: 'q4',
        type: 'fill-blanks',
        question: 'Complete the following sentence from the passage: "The integration of _____ has fundamentally altered how we _____ with information."',
        answers: ['technology', 'interact'],
        points: 2
      }
    ]
  },
  {
    id: 'eng-hl-p1-language',
    title: 'Language Structures and Conventions',
    description: 'Test your understanding of language usage and conventions',
    timeLimit: 60,
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'Identify the figure of speech in the phrase "The economy is a delicate ecosystem"',
        options: [
          'Personification',
          'Metaphor',
          'Simile',
          'Hyperbole'
        ],
        correctAnswer: 1,
        points: 2
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'The author primarily uses a formal register throughout the passage.',
        correctAnswer: true,
        points: 1
      }
    ]
  }
];

export default paper1Quizzes;