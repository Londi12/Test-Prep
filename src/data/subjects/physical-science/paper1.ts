import { Quiz } from "@/types/quiz";

export const physicalSciencePaper1Quiz1: Quiz = {
  id: "physical-science-paper1-quiz1",
  title: "Physical Science Paper 1 - Quiz 1: Mechanics",
  description: "Test your knowledge on Newton's Laws, forces, and motion",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `A 2kg object is pushed across a rough surface with a constant force of 10N at an angle of 30° to the horizontal.

Problem Solving Steps:
1. Draw a Force Diagram
   • Weight (mg) downward
   • Normal force (N) upward
   • Applied force (F) at 30°
   • Friction (f) opposing motion

2. Break down applied force:
   • Horizontal: F cos θ = 10 × cos 30°
   • Vertical: F sin θ = 10 × sin 30°

3. Consider:
   • How does vertical component affect normal force?
   • How does this affect friction?
   • What's the net horizontal force?

Key Concepts:
• F = ma
• μ = f/N
• Normal force = weight - F sin θ
• Friction = μN`,
      question: "Calculate the horizontal component of the 10N force.",
      options: ["5N", "8.66N", "10N", "15N"],
      correctAnswer: 1,
      explanation: "F_x = F cos θ = 10N × cos 30° = 10 × 0.866 = 8.66N\nThe horizontal component is found using the cosine of the angle."
    }
  ]
};

export const physicalSciencePaper1Quiz2: Quiz = {
  id: "physical-science-paper1-quiz2",
  title: "Physical Science Paper 1 - Quiz 2: Waves and Optics",
  description: "Test your understanding of waves, light, and related phenomena",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Electric Circuit Problem:
      
[Circuit Diagram shows:
- 12V battery
- Three resistors in series: R₁=2Ω, R₂=4Ω, R₃=6Ω]

Analysis Strategy:
1. Identify Circuit Type
   • Series or Parallel?
   • What's shared in series circuits?
   • What's shared in parallel circuits?

2. Apply Circuit Rules
   Series Circuits:
   • V_total = V₁ + V₂ + V₃
   • I_total = I₁ = I₂ = I₃
   • R_total = R₁ + R₂ + R₃

3. Calculate Step by Step:
   a) Find total resistance
   b) Calculate current using V=IR
   c) Find voltage across each resistor

4. Check Your Answer:
   • Does current match in all parts?
   • Do voltages sum to battery voltage?
   • Are units consistent?`,
      question: "What is the total resistance in this circuit?",
      options: ["2Ω", "12Ω", "0.5Ω", "4Ω"],
      correctAnswer: 1,
      explanation: "In a series circuit, total resistance is the sum of individual resistances:\nR_total = 2Ω + 4Ω + 6Ω = 12Ω"
    },
    {
      id: 2,
      question: "Which phenomenon explains the bending of light when it passes from air into water?",
      options: ["Reflection", "Refraction", "Diffraction", "Interference"],
      correctAnswer: 1,
      explanation: "Refraction is the bending of a wave when it passes from one medium to another due to a change in speed"
    },
    {
      id: 3,
      question: "What determines the color of visible light?",
      options: [
        "Amplitude",
        "Wavelength",
        "Speed",
        "Direction"
      ],
      correctAnswer: 1,
      explanation: "The wavelength of visible light determines its color"
    },
    {
      id: 4,
      question: "What type of wave is sound?",
      options: [
        "Transverse wave",
        "Longitudinal wave",
        "Electromagnetic wave",
        "Surface wave"
      ],
      correctAnswer: 1,
      explanation: "Sound is a longitudinal wave, where particles vibrate parallel to the direction of wave propagation"
    },
    {
      id: 5,
      question: "What happens to the wavelength of light when it enters a denser medium?",
      options: [
        "Increases",
        "Decreases",
        "Stays the same",
        "Becomes zero"
      ],
      correctAnswer: 1,
      explanation: "When light enters a denser medium, its wavelength decreases while its frequency remains constant"
    }
  ]
};

export const physicalSciencePaper1Quiz3: Quiz = {
  id: "physical-science-paper1-quiz3",
  title: "Physical Science Paper 1 - Quiz 3: Electricity and Magnetism",
  description: "Test your knowledge of electrical circuits, magnetism, and electromagnetic phenomena",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "Which of these is a unit of electric potential difference?",
      options: ["Ampere", "Ohm", "Volt", "Watt"],
      correctAnswer: 2,
      explanation: "Volt (V) is the SI unit for electric potential difference or voltage"
    },
    {
      id: 2,
      question: "According to Ohm's Law, what happens to the current if the voltage is doubled while the resistance remains constant?",
      options: ["It remains the same", "It doubles", "It halves", "It quadruples"],
      correctAnswer: 1,
      explanation: "According to Ohm's Law (V = IR), if voltage (V) doubles and resistance (R) is constant, then current (I) must also double"
    },
    {
      id: 3,
      question: "What is the relationship between electricity and magnetism?",
      options: [
        "They are completely unrelated",
        "A changing magnetic field creates an electric field, and a changing electric field creates a magnetic field",
        "They only interact in special materials",
        "They cancel each other out"
      ],
      correctAnswer: 1,
      explanation: "This is the principle of electromagnetic induction, discovered by Faraday"
    },
    {
      id: 4,
      question: "What is the unit of electrical resistance?",
      options: [
        "Volt",
        "Ampere",
        "Ohm",
        "Watt"
      ],
      correctAnswer: 2,
      explanation: "The ohm (Ω) is the SI unit of electrical resistance"
    },
    {
      id: 5,
      question: "What happens to the resistance of a conductor as its temperature increases?",
      options: [
        "Decreases",
        "Increases",
        "Stays the same",
        "Becomes zero"
      ],
      correctAnswer: 1,
      explanation: "In most conductors, resistance increases with temperature due to increased atomic vibrations"
    }
  ]
};

export const physicalSciencePaper1: Quiz = {
  id: "physical-science-paper1",
  title: "Physical Science - Paper 1: Physics",
  description: "Test your knowledge on mechanics, waves, electricity and magnetism. This paper includes both multiple choice and structured questions to match the exam format.",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Mechanics (50 marks)
    {
      id: 1,
      context: `Free-fall Motion Investigation

Apparatus:
• Metal ball
• Electronic timer
• Meter stick
• Motion sensor

Method:
1. Release ball from different heights
2. Measure time to reach ground
3. Calculate acceleration

Problem Analysis:
1. What affects the motion?
   • Gravity (constant 9.8 m/s²)
   • Air resistance (negligible for short drops)
   • Initial velocity (zero)

2. Relevant Equations:
   • s = ut + ½at²
   • v = u + at
   • v² = u² + 2as
   Where:
   s = displacement
   u = initial velocity
   v = final velocity
   a = acceleration
   t = time

3. Data Analysis:
Height (m) | Time (s)
1.0        | 0.45
2.0        | 0.64
3.0        | 0.78
4.0        | 0.90

4. Expected Pattern:
   • Time not directly proportional to height
   • s ∝ t²
   • Plot should be parabolic`,
      question: "Using s = ½gt², calculate the theoretical time for a 2.0m drop.",
      type: 'math',
      correctAnswer: "0.639 \\text{ s}",
      acceptableAnswers: ["0.64 \\text{ s}", "0.64"],
      solutionSteps: [
        {
          explanation: "Rearrange s = ½gt² to solve for t",
          math: "t = \\sqrt{\\frac{2s}{g}}"
        },
        {
          explanation: "Substitute s = 2.0m and g = 9.8m/s²",
          math: "t = \\sqrt{\\frac{2(2.0)}{9.8}}"
        },
        {
          explanation: "Calculate final answer",
          math: "t = 0.639 \\text{ s}"
        }
      ],
      marks: 4
    },
    // Section A: Multiple Choice
    ...physicalSciencePaper1Quiz1.questions,
    // Section B: Mechanics and Waves
    ...physicalSciencePaper1Quiz2.questions,
    // Section C: Electricity and Magnetism
    ...physicalSciencePaper1Quiz3.questions,
  ]
};