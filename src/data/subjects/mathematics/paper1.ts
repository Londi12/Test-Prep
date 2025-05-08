import { Quiz } from "@/types/quiz";

export const mathsPaper1: Quiz = {
  id: "maths-paper1",
  title: "Mathematics - Paper 1: Algebra, Functions & Calculus",
  description: "Tests knowledge of algebra, functions, calculus and sequences. The paper consists of two sections. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Short Questions (50 marks)
    {
      id: 1,
      context: `Solve for x:
2x + 3 = 11

Solution:
2x + 3 = 11
2x = 8
x = 4

Check:
2(4) + 3 = 11 ✓`,
      question: "What is the value of x?",
      options: ["2", "4", "6", "8"],
      correctAnswer: 1,
      marks: 3,
      explanation: "Subtract 3 from both sides, then divide by 2 to isolate x"
    },

    // More complex algebraic manipulation
    {
      id: 2,
      context: `Factorize completely:
x² - 5x + 6

Method:
1. Find factors of 6 that add to -5
2. Factors are -2 and -3
3. Write as product of brackets`,
      question: "What is the factored form?",
      options: [
        "(x + 2)(x + 3)",
        "(x - 2)(x - 3)",
        "(x + 2)(x - 3)",
        "(x - 2)(x + 3)"
      ],
      correctAnswer: 1,
      marks: 4,
      explanation: "The expression factorizes to (x - 2)(x - 3) as -2 and -3 are the factors that add to -5 and multiply to 6"
    },

    // Section B: Longer Questions (100 marks)
    {
      id: 10,
      type: "essay",
      context: `Consider the quadratic function f(x) = -2x² + 8x - 6

Given information:
• a = -2 (opens downward)
• Axis of symmetry: x = 2
• y-intercept: -6

Complete graph analysis required.`,
      question: "Analyze the function f(x) = -2x² + 8x - 6 by:\n1. Finding the x-intercepts\n2. Determining the turning point\n3. Sketching the graph\n4. Finding the domain and range",
      markingCriteria: [
        "Correct calculation of x-intercepts using quadratic formula",
        "Accurate determination of turning point coordinates",
        "Complete, accurate graph with all key points labeled",
        "Correct domain and range in interval notation"
      ],
      marks: 12,
      explanation: "Answer should demonstrate understanding of quadratic functions and their graphical representations"
    },

    // Complex integration and applications
    {
      id: 20,
      context: `A particle moves along a straight line with velocity v(t) = 3t² - 12t + 9 meters per second, where t is measured in seconds.

Required:
1. Distance traveled from t = 0 to t = 4
2. Acceleration at t = 2
3. Times when particle is stationary`,
      question: "Solve this kinematics problem using calculus. Show all working clearly.",
      type: "short-answer",
      correctAnswer: `1. Distance = ∫(3t² - 12t + 9)dt from 0 to 4 = 16 meters
2. a(t) = 6t - 12, at t = 2: a(2) = 0 m/s²
3. v(t) = 0 when t = 1 or t = 3`,
      marks: 15,
      explanation: "Solution requires integration for distance, differentiation for acceleration, and solving quadratic equation for stationary points"
    }
    // Additional questions following similar pattern...
  ]
};