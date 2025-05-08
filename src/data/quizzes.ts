import { Quiz } from "@/types/quiz";
import { accountingQuizzes } from "./subjects/accounting/quizzes";
import { englishQuizzes } from "./subjects/english/quizzes";
import { mathsQuizzes } from "./subjects/mathematics/quizzes";
import { physicalScienceQuizzes } from "./subjects/physical-science/quizzes";
import { lifeScienceQuizzes } from "./subjects/life-science/quizzes";

export const quizzes: Record<string, Quiz> = {
  ...accountingQuizzes,
  ...englishQuizzes,
  ...mathsQuizzes,
  ...physicalScienceQuizzes,
  ...lifeScienceQuizzes
};

export const getQuizById = (quizId: string): Quiz | undefined => {
  return quizzes[quizId];
};

export const getAllQuizzes = (): Quiz[] => {
  return Object.values(quizzes);
};