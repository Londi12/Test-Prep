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
  title: "Mathematics Paper 2 - Quiz 3: Statistics & Probability",
  description: "Test your knowledge of data analysis and probability concepts",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      type: 'math',
      context: `Height Data Analysis (in cm):
165, 168, 170, 170, 172, 175, 175, 176, 178, 180

Statistical Thinking Process:
1. Order data first
   Already ordered: 165,168,170,170,172,175,175,176,178,180

2. Find median
   • n = 10 (even)
   • Need average of 5th and 6th values
   • (172 + 175)/2 = 173.5

3. Find quartiles
   • Lower half: 165,168,170,170,172
   Q1 = 170
   • Upper half: 175,175,176,178,180
   Q3 = 176

4. Calculate IQR
   • IQR = Q3 - Q1 = 176 - 170 = 6

5. Check for outliers
   • Lower fence: Q1 - 1.5×IQR = 161
   • Upper fence: Q3 + 1.5×IQR = 185
   • No outliers present`,
      question: "Find the five-number summary and identify any outliers.",
      correctAnswer: "Min = 165, Q1 = 170, Median = 173.5, Q3 = 176, Max = 180\\text{, No outliers}",
      markingCriteria: [
        "Five-number summary",
        "IQR calculation",
        "Outlier analysis"
      ],
      marks: 8,
      explanation: "Systematic approach to statistical analysis using quartiles and IQR method"
    },
    {
      id: 2,
      type: 'math',
      context: `Probability Problem:
A bag contains:
• 3 red marbles
• 4 blue marbles
• 5 green marbles

Calculate probability of:
1. Drawing red first:
   P(R) = 3/12 = 1/4

2. Drawing blue second without replacement:
   • If first was red:
     P(B|R) = 4/11
   • Total probability = P(R) × P(B|R)
   = 1/4 × 4/11 = 4/44 = 1/11`,
      question: "Find P(red then blue without replacement)",
      correctAnswer: "1/11",
      markingCriteria: [
        "Initial probability",
        "Conditional probability",
        "Multiplication principle"
      ],
      marks: 6,
      explanation: "Demonstrates use of probability rules and conditional probability"
    }
  ]
};

export const mathsPaper2Quiz4: Quiz = {
  id: "maths-paper2-quiz4",
  title: "Mathematics Paper 2 - Quiz 4: Probability & Combinatorics",
  description: "Test your understanding of probability theory and counting principles",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      type: 'math',
      context: `Combinatorics Problem:
Seven students must line up for a photo.
• 3 must be in the front row
• 4 must be in the back row

Solution Method:
1. Total arrangements = (ways to choose front row) × (ways to arrange front row) × (ways to arrange back row)
2. Choose 3 from 7 for front: ⁷C₃
3. Arrange 3 chosen students: 3!
4. Arrange remaining 4: 4!

Final calculation:
= ⁷C₃ × 3! × 4!
= 35 × 6 × 24
= 5,040 arrangements`,
      question: "How many different ways can the students be arranged?",
      correctAnswer: "5040",
      markingCriteria: [
        "Combination calculation",
        "Permutation application",
        "Multiplication principle"
      ],
      marks: 6,
      explanation: "Solution demonstrates use of combinations and permutations"
    },
    {
      id: 2,
      type: 'math',
      context: `Tree Diagram Problem:
A box has:
• 2 red balls
• 3 blue balls
• 4 white balls

Draw two balls without replacement.
Calculate P(same color):

1. P(both red) = 2/9 × 1/8
2. P(both blue) = 3/9 × 2/8
3. P(both white) = 4/9 × 3/8

Total = (2×1)/(9×8) + (3×2)/(9×8) + (4×3)/(9×8)
= 2/72 + 6/72 + 12/72
= 20/72
= 5/18`,
      question: "Find the probability of drawing two balls of the same color",
      correctAnswer: "5/18",
      markingCriteria: [
        "Tree diagram construction",
        "Individual probabilities",
        "Addition of probabilities"
      ],
      marks: 8,
      explanation: "Demonstrates probability tree diagrams and counting techniques"
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