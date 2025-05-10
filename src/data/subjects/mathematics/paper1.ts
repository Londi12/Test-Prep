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
      context: `Solve the quadratic equation: x² - 5x + 6 = 0

Problem-solving strategy:
1. Identify the type of equation
   - Standard form: ax² + bx + c
   - Here: a=1, b=-5, c=6

2. Choose your method:
   a) Factoring
      - Look for factors of c (6) that add to b (-5)
      - Try: 6=2×3 or 6=1×6 or 6=(-2)×(-3)
   
   b) Quadratic Formula
      - x = [-b ± √(b² - 4ac)] ÷ 2a
      - Substitute values

3. Work through solution:
   Method 1 - Factorization:
   • Factors of 6: (1,6), (2,3), (-1,-6), (-2,-3)
   • Need sum = -5
   • -2 and -3 work because: (-2)+(-3) = -5
   Therefore: x² - 5x + 6 = (x - 2)(x - 3) = 0
   So: x = 2 or x = 3

Method 2 - Quadratic Formula:
x = [5 ± √(25 - 24)] ÷ 2
x = [5 ± √1] ÷ 2
x = [5 ± 1] ÷ 2
x = 3 or 2`,
      question: "Solve: x² - 5x + 6 = 0",
      correctAnswer: "x = 2 \\text{ or } x = 3",
      acceptableAnswers: ["x = 3 \\text{ or } x = 2"],
      explanation: "This quadratic can be solved by:\n1. Factoring: (x - 2)(x - 3) = 0\n2. Using quadratic formula\nBoth methods yield x = 2 or x = 3",
      requiresMathInput: true,
      marks: 4
    },
    {
      id: 2,
      context: `Given function: f(x) = 2x² + 3x - 1

To find f(2):
1. Substitute x = 2 into f(x)
2. f(2) = 2(2)² + 3(2) - 1
3. = 2(4) + 6 - 1
4. = 8 + 6 - 1
5. = 13`,
      question: "Calculate f(2) where f(x) = 2x² + 3x - 1",
      options: ["8", "11", "13", "15"],
      correctAnswer: 2,
      explanation: "Step by step solution:\n1. f(2) = 2(2)² + 3(2) - 1\n2. = 2(4) + 6 - 1\n3. = 8 + 6 - 1\n4. = 13"
    }
  ]
};

export const mathsPaper1Quiz2: Quiz = {
  id: "maths-paper1-quiz2",
  title: "Mathematics Paper 1 - Quiz 2: Functions & Sequences",
  description: "Test your understanding of functions, sequences and series",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Problem: Find the derivative of f(x) = x³ - 4x² + 2x - 1

Approach this step-by-step:

1. Recall the power rule:
   • For x^n, derivative is nx^(n-1)
   • Each term is handled separately

2. Break down the function:
   • Term 1: x³
   • Term 2: -4x²
   • Term 3: 2x
   • Term 4: -1

3. Apply power rule to each term:
   • x³ → 3x²
   • -4x² → -8x
   • 2x → 2
   • -1 → 0

4. Combine like terms:
   f'(x) = 3x² - 8x + 2

Check your answer:
• Are all terms differentiated correctly?
• Did you apply the correct coefficients?
• Did you handle the constant term properly?`,
      question: "Find dy/dx for y = x³ - 4x² + 2x - 1",
      correctAnswer: "3x^2 - 8x + 2",
      markingCriteria: [
        "Power rule application",
        "Term differentiation",
        "Term combination"
      ],
      marks: 4,
      explanation: "Step by step differentiation using power rule"
    },
    {
      id: 2,
      type: 'math',
      context: `Find ∫(2x + 3)dx

Method:
1. Integrate term by term
2. Increase power by 1, divide by new power for x term:
   • ∫2x dx = x² + c
3. For constant term:
   • ∫3 dx = 3x
4. Combine terms: x² + 3x + c`,
      question: "Calculate ∫(2x + 3)dx",
      correctAnswer: "x^2 + 3x + c",
      markingCriteria: [
        "Integration rules",
        "Term integration",
        "Adding constant"
      ],
      marks: 3,
      explanation: "Basic integration with constant of integration"
    }
  ]
};

export const mathsPaper1Quiz3: Quiz = {
  id: "maths-paper1-quiz3",
  title: "Mathematics Paper 1 - Quiz 3: Calculus",
  description: "Test your understanding of differentiation and integration",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      type: 'math',
      context: `Differentiate y = x³ - 4x² + 2x - 1

Method:
1. Use power rule: d/dx(xⁿ) = nxⁿ⁻¹
2. Apply to each term:
   • d/dx(x³) = 3x²
   • d/dx(-4x²) = -8x
   • d/dx(2x) = 2
   • d/dx(-1) = 0
3. Combine terms: 3x² - 8x + 2`,
      question: "Find dy/dx for y = x³ - 4x² + 2x - 1",
      correctAnswer: "3x^2 - 8x + 2",
      markingCriteria: [
        "Power rule application",
        "Term differentiation",
        "Term combination"
      ],
      marks: 4,
      explanation: "Step by step differentiation using power rule"
    },
    {
      id: 2,
      type: 'math',
      context: `Find ∫(2x + 3)dx

Method:
1. Integrate term by term
2. Increase power by 1, divide by new power for x term:
   • ∫2x dx = x² + c
3. For constant term:
   • ∫3 dx = 3x
4. Combine terms: x² + 3x + c`,
      question: "Calculate ∫(2x + 3)dx",
      correctAnswer: "x^2 + 3x + c",
      markingCriteria: [
        "Integration rules",
        "Term integration",
        "Adding constant"
      ],
      marks: 3,
      explanation: "Basic integration with constant of integration"
    }
  ]
};

export const mathsPaper1Quiz4: Quiz = {
  id: "maths-paper1-quiz4",
  title: "Mathematics Paper 1 - Quiz 4: Common Misconceptions",
  description: "Review and correct common misconceptions in mathematics",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      type: 'math',
      context: `Common Misconception:
"When solving (x + 2)², you can just square each term:
x² + 4"

Correct Understanding:
1. (x + 2)² = (x + 2)(x + 2)
2. Use FOIL or distributive property:
   • First terms: x × x = x²
   • Outer terms: x × 2 = 2x
   • Inner terms: 2 × x = 2x
   • Last terms: 2 × 2 = 4
3. Combine like terms:
   (x + 2)² = x² + 2x + 2x + 4
   = x² + 4x + 4`,
      question: "Why is (x + 2)² not equal to x² + 4?",
      options: [
        "Because you need to add the terms",
        "Because you need to multiply the middle terms",
        "Because squaring is distributive",
        "Because variables can't be squared"
      ],
      correctAnswer: 1,
      explanation: "When squaring a binomial, you must account for the middle terms (2x + 2x = 4x) that come from multiplying outer and inner terms."
    },
    {
      id: 2,
      type: 'math',
      context: `Common Misconception:
"To divide fractions, you multiply both numerator
and denominator by the second fraction:
(a/b) ÷ (c/d) = (ac)/(bd)"

Correct Understanding:
1. Division by a fraction is the same as multiplication by its reciprocal
2. (a/b) ÷ (c/d) = (a/b) × (d/c)
3. = (ad)/(bc)

Example:
(2/3) ÷ (1/4) = (2/3) × (4/1)
                = 8/3`,
      question: "Why do we 'flip and multiply' when dividing fractions?",
      options: [
        "Because division is the opposite of multiplication",
        "Because multiplying by reciprocal is same as dividing",
        "Because it makes calculation easier",
        "Because fractions can't be divided"
      ],
      correctAnswer: 1,
      explanation: "Dividing by a fraction is equivalent to multiplying by its reciprocal because any number divided by (c/d) is the same as that number multiplied by (d/c)."
    }
  ]
};

export const mathsPaper1Quiz5: Quiz = {
  id: "maths-paper1-quiz5",
  title: "Mathematics Paper 1 - Quiz 5: Exam Technique",
  description: "Learn effective strategies for tackling mathematics exams",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Exam Time Management:
Total time: 3 hours (180 minutes)
Total marks: 150

Recommended allocation:
1. Reading time: 10 minutes
2. Section A (50 marks): 55 minutes
3. Section B (50 marks): 55 minutes
4. Section C (50 marks): 55 minutes
5. Checking time: 5 minutes

Strategy:
• 1.1 minutes per mark
• Start with confident topics
• Show all working
• Check units and rounding`,
      question: "Why should you allocate roughly 1.1 minutes per mark?",
      options: [
        "Because it's a rule",
        "To ensure balanced time for all sections",
        "To finish early",
        "To work faster"
      ],
      correctAnswer: 1,
      explanation: "The 1.1 minutes per mark guideline helps ensure you spend proportional time on each question based on its mark value, leaving time for checking."
    },
    {
      id: 2,
      context: `Common Exam Mistakes:
1. Not showing working
2. Missing units
3. Incorrect rounding
4. Not checking feasibility

Example Question (4 marks):
A rectangular pool is 25m long and 10m wide.
Calculate its area and perimeter.

Poor answer:
Area = 250
Perimeter = 70

Better answer:
Area = l × w
     = 25m × 10m
     = 250m²

Perimeter = 2(l + w)
          = 2(25m + 10m)
          = 2(35m)
          = 70m`,
      question: "Why is the second answer better?",
      options: [
        "It's longer",
        "Shows method, units, and clear steps",
        "Uses more paper",
        "Has more numbers"
      ],
      correctAnswer: 1,
      explanation: "The better answer shows clear working steps, includes units throughout, and demonstrates understanding of the method, maximizing potential marks."
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
    ...mathsPaper1Quiz3.questions,
    ...mathsPaper1Quiz4.questions,
    ...mathsPaper1Quiz5.questions
  ]
};