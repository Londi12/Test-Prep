import { Quiz } from "@/types/quiz";

export const physicalSciencePaper1Quiz1: Quiz = {
  id: "physical-science-paper1-quiz1",
  title: "Physical Science Paper 1 - Quiz 1: Mechanics",
  description: "Test your knowledge on Newton's Laws, forces, and motion",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Newton's Laws of Motion describe the relationship between forces and motion:
      1. First Law: An object remains at rest or in uniform motion unless acted upon by a net force
      2. Second Law: Force equals mass times acceleration (F = ma)
      3. Third Law: For every action, there is an equal and opposite reaction

Consider a situation where a 2 kg object is accelerating at 4 m/s².`,
      question: "What is Newton's Second Law of Motion, and what force is acting on the 2 kg object?",
      options: [
        "For every action, there is an equal and opposite reaction (F = 8N)",
        "Force equals mass times acceleration (F = 8N)",
        "An object in motion stays in motion unless acted upon by an external force (F = 8N)",
        "Energy cannot be created or destroyed, only transformed (F = 6N)"
      ],
      correctAnswer: 1,
      explanation: "Newton's Second Law states that F = ma. For the 2 kg object: F = 2 kg × 4 m/s² = 8N"
    },
    {
      id: 2,
      context: `A ball is thrown horizontally off a cliff with:
      • Initial velocity = 5 m/s
      • Mass = 0.5 kg
      
To find momentum:
p = mv = 0.5 kg × 5 m/s = 2.5 kg·m/s`,
      question: "What is the unit of momentum?",
      options: ["kg·m/s²", "kg·m/s", "kg/m·s", "kg·m²/s"],
      correctAnswer: 1,
      explanation: "Momentum (p) = mass × velocity, so units are kg·m/s"
    },
    {
      id: 3,
      context: `In a laboratory experiment:
      • A spring is stretched by different forces
      • The extension is measured each time
      • Graph shows a straight line through origin
      • For every 2N force, extension increases by 4cm`,
      question: "What is the spring constant k?",
      options: ["0.25 N/m", "0.5 N/m", "50 N/m", "2 N/m"],
      correctAnswer: 2,
      explanation: "Using Hooke's Law F = kx: k = F/x = 2N/0.04m = 50 N/m"
    },
    {
      id: 4,
      context: `A student measures:
      • The time (t) taken for a pendulum to complete 20 oscillations
      • Divides by 20 to get the period (T)
      • Repeats 3 times and averages
      
Results:
Trial 1: t = 30.2s, T = 1.51s
Trial 2: t = 30.0s, T = 1.50s
Trial 3: t = 30.4s, T = 1.52s`,
      question: "What is the average period of the pendulum?",
      options: ["1.50s", "1.51s", "1.52s", "1.53s"],
      correctAnswer: 1,
      explanation: "Average period = (1.51 + 1.50 + 1.52)/3 = 1.51s"
    },
    {
      id: 5,
      context: `An object falls freely under gravity:
      • Initial velocity = 0 m/s
      • Time of fall = 2s
      • Acceleration due to gravity = 9.8 m/s²
      
Using s = ut + ½at²:
s = 0 + ½(9.8)(2²)
s = 19.6 meters`,
      question: "What distance does the object fall in 2 seconds?",
      options: ["9.8m", "19.6m", "39.2m", "4.9m"],
      correctAnswer: 1,
      explanation: "Using s = ut + ½at², with u=0, a=9.8, t=2: s = ½(9.8)(4) = 19.6m"
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