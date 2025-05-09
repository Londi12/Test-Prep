export type QuestionType = 'multiple-choice' | 'short-answer' | 'true-false' | 'multiple-select' | 'matching' | 'essay' | 'fill-blanks' | 'math';

export interface Step {
  explanation: string;
  math?: string;
}

export interface BaseQuestion {
  id: number;
  type: QuestionType;
  question: string;
  explanation?: string;
  marks?: number;
  context?: string;
  requiresMathInput?: boolean;
  solutionSteps?: Step[];
}

export interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: string[];
  correctAnswer: number;
}

export interface ShortAnswerQuestion extends BaseQuestion {
  type: 'short-answer';
  correctAnswer: string;
  acceptableAnswers?: string[]; // Alternative correct answers
  isLatex?: boolean; // For math equations
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true-false';
  correctAnswer: boolean;
}

export interface MultipleSelectQuestion extends BaseQuestion {
  type: 'multiple-select';
  options: string[];
  correctAnswers: number[];
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching';
  items: string[];
  matches: string[];
  correctPairs: Array<[number, number]>; // Pairs of indices that match
}

export interface EssayQuestion extends BaseQuestion {
  type: 'essay';
  wordLimit?: number;
  markingCriteria?: string[];
  sampleAnswer?: string;
}

export interface FillBlanksQuestion extends BaseQuestion {
  type: 'fill-blanks';
  text: string; // Text with ___ for blanks
  correctAnswers: string[]; // Answers in order of blanks
}

export interface MathQuestion extends BaseQuestion {
  type: 'math';
  correctAnswer: string; // LaTeX format
  acceptableAnswers?: string[]; // Alternative correct answers in LaTeX
  steps?: Step[];
}

export type Question = 
  | MultipleChoiceQuestion 
  | ShortAnswerQuestion 
  | TrueFalseQuestion 
  | MultipleSelectQuestion 
  | MatchingQuestion 
  | EssayQuestion 
  | FillBlanksQuestion
  | MathQuestion;

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number; // Time limit in seconds
}

export interface Subject {
  name: string;
  icon: React.ReactNode;
  papers: {
    id: string;
    title: string;
    path: string;
  }[];
}

export interface QuizResult {
  correctAnswers: number;
  totalQuestions: number;
  percentage: number;
  answers: Array<{
    questionId: number;
    answer: any; // Type varies based on question type
    isCorrect: boolean;
  }>;
}
