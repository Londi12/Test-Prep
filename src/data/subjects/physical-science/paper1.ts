import { Quiz } from "@/types/quiz";

export const physicalSciencePaper1Quiz1: Quiz = {
  id: "physical-science-paper1-quiz1",
  title: "Physical Science Paper 1 - Quiz 1: Mechanics",
  description: "Test your knowledge on Newton's Laws, forces, and motion",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `A 2 kg object accelerates at 4 m/s² when a force is applied.

Solution steps:
1. Use Newton's Second Law: F = ma
2. Substitute known values:
   m = 2 kg
   a = 4 m/s²
3. Calculate:
   F = 2 kg × 4 m/s²
   F = 8 N`,
      question: "Calculate the net force acting on the object.",
      options: ["4 N", "6 N", "8 N", "10 N"],
      correctAnswer: 2,
      explanation: "Using Newton's Second Law (F = ma):\n1. Mass (m) = 2 kg\n2. Acceleration (a) = 4 m/s²\n3. Therefore, Force = 2 × 4 = 8 N\nThe force must be 8 N to produce this acceleration."
    },
    {
      id: 2,
      context: `A wave has the following properties:
• Wavelength (λ) = 2 meters
• Velocity (v) = 4 m/s

To find frequency:
1. Use wave equation: v = fλ
2. Rearrange to solve for f: f = v/λ
3. Substitute values:
   f = 4 m/s ÷ 2 m
   f = 2 Hz`,
      question: "Calculate the frequency of the wave.",
      options: ["0.5 Hz", "2 Hz", "4 Hz", "8 Hz"],
      correctAnswer: 1,
      explanation: "Using the wave equation (v = fλ):\n1. Rearrange to f = v/λ\n2. Substitute v = 4 m/s and λ = 2 m\n3. f = 4/2 = 2 Hz\nThe frequency must be 2 Hz to satisfy the wave equation."
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
      question: "What is the frequency of a wave with a wavelength of 2 meters traveling at 4 m/s?",
      context: "Wave with λ = 2m, v = 4 m/s",
      options: ["0.5 Hz", "2 Hz", "4 Hz", "8 Hz"],
      correctAnswer: 1,
      explanation: "Using the wave equation v = fλ, where v is velocity (4 m/s) and λ is wavelength (2 m): 4 = f × 2, so f = 2 Hz"
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
    // Section A: Multiple Choice
    ...physicalSciencePaper1Quiz1.questions,
    // Section B: Mechanics and Waves
    ...physicalSciencePaper1Quiz2.questions,
    // Section C: Electricity and Magnetism
    ...physicalSciencePaper1Quiz3.questions,
  ]
};