import { Quiz } from "@/types/quiz";

export const mathsPaper1Quiz1: Quiz = {
  id: "maths-paper1-quiz1",
  title: "Mathematics Paper 1 - Quiz 1: Basic Algebra",
  description: "Practice basic algebraic manipulation and equations",
  timeLimit: 300,
  questions: [
    // First few questions from mathsPaper1
    {
      id: 1,
      context: `Solve for x:
2x + 3 = 11

Solution:
2x + 3 = 11
2x = 8
x = 4`,
      question: "What is the value of x?",
      options: ["2", "4", "6", "8"],
      correctAnswer: 1,
      explanation: "Subtract 3 from both sides, then divide by 2 to isolate x"
    }
  ]
};

export const mathsPaper1Quiz2: Quiz = {
  id: "maths-paper1-quiz2",
  title: "Mathematics Paper 1 - Quiz 2: Advanced Algebra",
  description: "Practice advanced algebraic concepts",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Factorize completely:
x² - 5x + 6`,
      question: "What is the factored form?",
      options: [
        "(x + 2)(x + 3)",
        "(x - 2)(x - 3)",
        "(x + 2)(x - 3)",
        "(x - 2)(x + 3)"
      ],
      correctAnswer: 1,
      explanation: "The expression factorizes to (x - 2)(x - 3)"
    }
  ]
};

export const mathsPaper1Quiz3: Quiz = {
  id: "maths-paper1-quiz3",
  title: "Mathematics Paper 1 - Quiz 3: Calculus",
  description: "Practice calculus applications",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `A particle moves along a straight line with velocity v(t) = 3t² - 12t + 9 meters per second`,
      question: "Find the acceleration at t = 2 seconds",
      options: ["0 m/s²", "2 m/s²", "4 m/s²", "6 m/s²"],
      correctAnswer: 0,
      explanation: "a(t) = 6t - 12, at t = 2: a(2) = 0 m/s²"
    }
  ]
};

export const mathsPaper1: Quiz = {
  id: "maths-paper1",
  title: "Mathematics - Paper 1: Algebra, Functions & Calculus",
  description: "Tests knowledge of algebra, functions, calculus and sequences. The paper consists of two sections. Total marks: 150",
  timeLimit: 10800,
  questions: [
    ...mathsPaper1Quiz1.questions,
    ...mathsPaper1Quiz2.questions,
    ...mathsPaper1Quiz3.questions
  ]
};