import { Quiz } from "@/types/quiz";

export const mathsPaper2Quiz1: Quiz = {
  id: "maths-paper2-quiz1",
  title: "Mathematics Paper 2 - Quiz 1: Geometry",
  description: "Test your knowledge on geometric principles and proofs",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `In a right-angled triangle:
      • sin θ = 0.6
      • We know sin²θ + cos²θ = 1 (Pythagorean identity)
      
Solution:
1. Given sin θ = 0.6
2. Using sin²θ + cos²θ = 1
3. 0.6² + cos²θ = 1
4. 0.36 + cos²θ = 1
5. cos²θ = 0.64
6. cos θ = 0.8 (positive since θ is acute)`,
      question: "If sin θ = 0.6, what is cos θ?",
      options: ["0.6", "0.8", "0.64", "0.36"],
      correctAnswer: 1,
      explanation: "Using the Pythagorean identity sin²θ + cos²θ = 1: cos²θ = 1 - sin²θ = 1 - 0.6² = 1 - 0.36 = 0.64, therefore cosθ = 0.8"
    },
    {
      id: 2,
      context: `Consider a regular polygon where:
      • All sides are equal in length
      • All interior angles are equal
      • All vertices are equidistant from the center
      
Which properties must be true?`,
      question: "Which properties are always true for regular polygons? Select all that apply.",
      type: "multiple-select",
      options: [
        "Equal sides",
        "Right angles",
        "Equal angles",
        "Diagonals bisect each other",
        "All vertices are equidistant from the center"
      ],
      correctAnswers: [0, 2, 4],
      explanation: "Regular polygons have equal sides, equal angles, and all vertices are equidistant from the center. Not all regular polygons have right angles or diagonals that bisect each other."
    }
  ]
};

export const mathsPaper2Quiz2: Quiz = {
  id: "maths-paper2-quiz2",
  title: "Mathematics Paper 2 - Quiz 2: Trigonometry",
  description: "Test your understanding of trigonometric ratios and functions",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `For the function y = sin(2x):
      • Original sine function has period 2π
      • When frequency doubles (2x), period is halved
      • Period = 2π ÷ 2 = π`,
      question: "What is the period of the function y = sin(2x)?",
      options: ["π", "2π", "π/2", "4π"],
      correctAnswer: 0,
      explanation: "When the coefficient of x is 2, the period is halved from the original period of 2π to π"
    },
    {
      id: 2,
      context: `Triangle ABC:
      • Angle A = 30°
      • Adjacent side = 8 cm
      • Hypotenuse = 16 cm
      
To find cos 30°:
cos 30° = adjacent/hypotenuse = 8/16 = 0.866`,
      question: "What is cos 30°?",
      options: ["0.500", "0.707", "0.866", "1.000"],
      correctAnswer: 2,
      explanation: "cos 30° = adjacent/hypotenuse = 8/16 = 0.866"
    }
  ]
};

export const mathsPaper2Quiz3: Quiz = {
  id: "maths-paper2-quiz3",
  title: "Mathematics Paper 2 - Quiz 3: Statistics",
  description: "Test your knowledge of statistical concepts and analysis",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "What is the mean of the numbers: 2, 4, 8, 10, 16?",
      context: "Dataset: 2, 4, 8, 10, 16",
      options: ["6", "8", "10", "12"],
      correctAnswer: 1,
      explanation: "Mean = sum of values ÷ number of values = (2 + 4 + 8 + 10 + 16) ÷ 5 = 40 ÷ 5 = 8"
    },
    {
      id: 2,
      question: "What is the median of the dataset: 3, 7, 8, 9, 9, 10, 12?",
      context: "Dataset: 3, 7, 8, 9, 9, 10, 12",
      options: ["7", "8", "9", "10"],
      correctAnswer: 2,
      explanation: "With 7 numbers, the median is the 4th number (middle value). Arranged in order: 3,7,8,9,9,10,12. The 4th number is 9"
    },
    {
      id: 3,
      question: "What type of correlation shows a strong positive relationship?",
      options: ["Close to -1", "Close to 0", "Close to 1", "Equal to 0"],
      correctAnswer: 2,
      explanation: "Correlation coefficient near 1 indicates strong positive correlation"
    },
    {
      id: 4,
      question: "What measure of spread is least affected by outliers?",
      options: ["Range", "Variance", "Standard Deviation", "Interquartile Range"],
      correctAnswer: 3,
      explanation: "IQR is resistant to outliers as it only considers the middle 50% of data"
    },
    {
      id: 5,
      question: "In a normal distribution, what percentage of data falls within one standard deviation of the mean?",
      options: ["50%", "68%", "95%", "99.7%"],
      correctAnswer: 1,
      explanation: "Approximately 68% of data falls within one standard deviation of the mean in a normal distribution"
    }
  ]
};

export const mathsPaper2: Quiz = {
  id: "maths-paper2",
  title: "Mathematics - Paper 2: Geometry & Data Handling",
  description: "Tests understanding of geometry, trigonometry, and statistics. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Geometry (50 marks)
    {
      id: 1,
      context: `Consider triangle ABC:
• AB = 8 cm
• BC = 6 cm
• AC = 10 cm
• Height to base BC = h cm

[Diagram shows:
- Triangle ABC
- Height line from A to BC
- All given measurements labeled]`,
      question: "Prove that triangle ABC is right-angled. Show ALL working.",
      type: "essay",
      markingCriteria: [
        "Statement of Pythagorean theorem",
        "Substitution of values",
        "Correct calculations",
        "Valid conclusion"
      ],
      marks: 5,
      explanation: "Solution should use Pythagorean theorem: a² + b² = c²"
    },

    // Section B: Trigonometry (50 marks)
    {
      id: 10,
      context: `In triangle PQR:
• Angle P = 30°
• PQ = 12 units
• QR = 15 units

Required:
1. Length of PR
2. Area of triangle
3. Size of angle Q`,
      question: "Solve the triangle completely. Show ALL calculations.",
      type: "essay",
      markingCriteria: [
        "Use of sine rule",
        "Use of cosine rule",
        "Area calculation",
        "Proper rounding"
      ],
      marks: 12,
      explanation: "Answer should demonstrate understanding of trigonometric rules and area calculations"
    },

    // Section C: Data Handling & Probability (50 marks)
    {
      id: 20,
      context: `The following data shows the test scores (out of 100) for a class:
65, 72, 83, 65, 70, 88, 92, 76, 65, 81, 79, 85, 90, 67, 73

Required:
1. Five-number summary
2. Box-and-whisker plot
3. Standard deviation
4. Comment on skewness`,
      question: "Perform a complete statistical analysis of this data set.",
      type: "essay",
      markingCriteria: [
        "Correct calculation of quartiles",
        "Accurate box plot",
        "Standard deviation calculation",
        "Valid skewness analysis"
      ],
      marks: 15,
      explanation: "Solution should demonstrate understanding of statistical measures and their interpretation"
    },

    // Additional geometry problem
    {
      id: 30,
      context: `Given circle O with:
• Radius = 5 units
• Chord AB = 8 units
• Perpendicular distance from O to AB = d units

[Diagram shows:
- Circle with center O
- Chord AB
- Perpendicular line from O to AB]`,
      question: "Calculate:\n1. The distance d\n2. The angle AOB\n3. The area of segment ABO",
      type: "essay",
      markingCriteria: [
        "Use of Pythagorean theorem",
        "Correct angle calculation",
        "Area calculation",
        "Proper units"
      ],
      marks: 12,
      explanation: "Answer should show understanding of circle geometry and area calculations"
    }
  ]
};