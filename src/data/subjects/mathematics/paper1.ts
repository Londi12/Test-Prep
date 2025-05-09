import { Quiz } from "@/types/quiz";

export const mathsPaper1Quiz1: Quiz = {
  id: "maths-paper1-quiz1",
  title: "Mathematics Paper 1 - Quiz 1: Basic Algebra",
  description: "Practice basic algebraic manipulation and equations",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      type: 'math',
      question: "Solve the quadratic equation: x² - 5x + 6 = 0",
      context: `This quadratic equation can be solved using factorization.
      
Remember:
• If ax² + bx + c = 0, look for factors p and q where:
  - p + q = -b
  - p × q = c
• The solutions are the values that make (x + p)(x + q) = 0`,
      marks: 4,
      correctAnswer: "x = 2 \\text{ or } x = 3",
      acceptableAnswers: ["x = 3 \\text{ or } x = 2"],
      steps: [
        {
          explanation: "First, identify that a = 1, b = -5, and c = 6",
          math: "x^2 - 5x + 6 = 0"
        },
        {
          explanation: "Look for two numbers that add to -5 and multiply to give 6",
          math: "-2 + (-3) = -5 \\text{ and } (-2)(-3) = 6"
        },
        {
          explanation: "Write the equation in factored form",
          math: "(x - 2)(x - 3) = 0"
        },
        {
          explanation: "Apply the zero product property: if ab = 0, then a = 0 or b = 0",
          math: "x - 2 = 0 \\text{ or } x - 3 = 0"
        },
        {
          explanation: "Solve each equation",
          math: "x = 2 \\text{ or } x = 3"
        }
      ],
      requiresMathInput: true
    },
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