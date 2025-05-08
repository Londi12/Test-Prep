import { Quiz } from "@/types/quiz";

export const physicalSciencePaper2Quiz1: Quiz = {
  id: "physical-science-paper2-quiz1",
  title: "Physical Science Paper 2 - Quiz 1: Atomic Structure and Bonding",
  description: "Test your knowledge on atomic structure, electron configuration, and chemical bonding",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Consider an atom of Sodium (Na):
      • Atomic number = 11
      • Mass number = 23
      • Electron configuration: 1s² 2s² 2p⁶ 3s¹
      
This means:
• Number of protons = 11
• Number of neutrons = 23 - 11 = 12
• Number of electrons = 11`,
      question: "What is the atomic number of an element?",
      options: [
        "The number of neutrons",
        "The number of protons",
        "The number of electrons",
        "The total number of protons and neutrons"
      ],
      correctAnswer: 1,
      explanation: "The atomic number is the number of protons in an atom's nucleus, which defines the element"
    },
    {
      id: 2,
      context: `Consider these molecular compounds:
      1. Cl₂ (chlorine gas)
      2. NaCl (table salt)
      3. CO₂ (carbon dioxide)
      4. H₂O (water)

Examine the bonding in CO₂:
O=C=O
• Both C and O are non-metals
• They share electrons
• Forms double covalent bonds`,
      question: "Which type of bond forms between two non-metal atoms?",
      options: ["Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"],
      correctAnswer: 1,
      explanation: "Non-metals share electrons to form covalent bonds"
    },
    {
      id: 3,
      context: `Laboratory test for gases:
      1. Hydrogen (H₂): Lights 'pop' sound with flame
      2. Oxygen (O₂): Relights glowing splint
      3. Carbon dioxide (CO₂): Turns limewater milky
      4. Chlorine (Cl₂): Bleaches damp litmus paper

Experiment:
• Student collects gas over water
• Gas turns limewater milky
• Balanced equation: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O`,
      question: "What gas was collected?",
      options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Chlorine"],
      correctAnswer: 2,
      explanation: "The milky appearance of limewater (Ca(OH)₂) is a characteristic test for carbon dioxide, forming calcium carbonate (CaCO₃)"
    }
  ]
};

export const physicalSciencePaper2Quiz2: Quiz = {
  id: "physical-science-paper2-quiz2",
  title: "Physical Science Paper 2 - Quiz 2: Chemical Reactions",
  description: "Test your knowledge of chemical reactions and equations",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Balance this combustion reaction:
      C₃H₈ + O₂ → CO₂ + H₂O

Step by step:
1. Count atoms on each side
2. Balance carbon: C₃H₈ + O₂ → 3CO₂ + H₂O
3. Balance hydrogen: C₃H₈ + O₂ → 3CO₂ + 4H₂O
4. Balance oxygen: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O`,
      question: "How many O₂ molecules are needed?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 2,
      explanation: "Five O₂ molecules are needed to balance the equation: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O"
    },
    {
      id: 2,
      context: `Acid-base titration:
      • 25.0 mL of HCl solution
      • Concentration unknown
      • Titrated with 0.1 M NaOH
      • 20.0 mL NaOH needed for neutralization
      
Balanced equation: HCl + NaOH → NaCl + H₂O
Using n₁c₁ = n₂c₂:
(25.0 mL)(x M) = (20.0 mL)(0.1 M)`,
      question: "What is the concentration of HCl?",
      options: ["0.08 M", "0.10 M", "0.12 M", "0.15 M"],
      correctAnswer: 0,
      explanation: "Using n₁c₁ = n₂c₂: (25.0 mL)(x M) = (20.0 mL)(0.1 M), so x = 0.08 M"
    }
  ]
};

export const physicalSciencePaper2Quiz3: Quiz = {
  id: "physical-science-paper2-quiz3",
  title: "Physical Science Paper 2 - Quiz 3: Acids, Bases and Chemical Equilibrium",
  description: "Test your knowledge of acid-base reactions, pH, and chemical equilibrium",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "What is the pH of a neutral solution at 25°C?",
      context: "Solution temperature: 25°C",
      options: ["0", "7", "10", "14"],
      correctAnswer: 1,
      explanation: "At 25°C, a neutral solution has a pH of 7, with equal concentrations of H+ and OH- ions"
    },
    {
      id: 2,
      question: "What happens to a reversible reaction when pressure is increased?",
      context: "System under increased pressure",
      options: [
        "Always shifts to reactants",
        "Always shifts to products",
        "Shifts to the side with fewer gas molecules",
        "No effect on equilibrium"
      ],
      correctAnswer: 2,
      explanation: "According to Le Chatelier's principle, increasing pressure shifts the equilibrium to the side with fewer gas molecules"
    },
    {
      id: 3,
      question: "What is the pH range of acids?",
      options: [
        "0-7",
        "7",
        "7-14",
        "14 only"
      ],
      correctAnswer: 0,
      explanation: "Acids have pH values less than 7, with stronger acids having lower pH values"
    },
    {
      id: 4,
      question: "Which is a characteristic of bases?",
      options: [
        "Taste sour",
        "Feel slippery",
        "Turn blue litmus red",
        "Produce H+ in water"
      ],
      correctAnswer: 1,
      explanation: "Bases feel slippery to the touch (though you should never touch chemicals directly)"
    },
    {
      id: 5,
      question: "What is a buffer?",
      options: [
        "A solution that maintains pH when small amounts of acid or base are added",
        "A solution with pH 7",
        "A solution that changes color with pH",
        "A solution that always has pH 0"
      ],
      correctAnswer: 0,
      explanation: "A buffer resists pH changes when small amounts of acid or base are added"
    }
  ]
};

export const physicalSciencePaper2: Quiz = {
  id: "physical-science-paper2",
  title: "Physical Sciences - Paper 2: Chemistry",
  description: "Tests understanding of matter and materials, chemical change, and chemical systems. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Multiple Choice & One-Word Items (30 marks)
    {
      id: 1,
      context: `Study the periodic table and atomic structure:

Element X:
• Atomic number: 11
• Mass number: 23
• Electron configuration: [Ne]3s¹

Given:
• Atomic mass of Ne = 20
• Ground state electron config of Ne = 1s²2s²2p⁶`,
      question: "What is the number of neutrons in element X?",
      options: ["11", "12", "20", "23"],
      correctAnswer: 1,
      marks: 2,
      explanation: "Number of neutrons = Mass number - Atomic number = 23 - 11 = 12"
    },

    // Section B: Chemical Change (40 marks)
    {
      id: 10,
      type: "essay",
      context: `Practical Investigation: Reaction Rates

Equipment:
• CaCO₃ (marble chips)
• Different concentrations of HCl
• Gas syringe
• Stopwatch

Method:
1. Add 2g marble chips to 50mL HCl
2. Measure volume of CO₂ every 30 seconds
3. Repeat with different [HCl]

Data collected:
Time(s)  Volume CO₂ (mL)
         2M HCl  1M HCl  0.5M HCl
0        0       0       0
30       45      28      15
60       82      51      27
90       98      67      36

Balanced equation:
CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂`,
      question: "Analyze this investigation:\n1. Plot appropriate graphs\n2. Calculate initial rates\n3. Explain relationship between [HCl] and rate\n4. Identify factors affecting rate",
      markingCriteria: [
        "Accurate graphs with proper labels",
        "Correct rate calculations",
        "Clear explanation of concentration effect",
        "Valid discussion of rate factors"
      ],
      marks: 15,
      explanation: "Answer should demonstrate understanding of reaction kinetics and data analysis"
    },

    // Section C: Chemical Systems (40 marks)
    {
      id: 20,
      context: `Industrial Production of H₂SO₄:

Step 1: S + O₂ → SO₂     ΔH = -297 kJ/mol
Step 2: 2SO₂ + O₂ ⇌ 2SO₃  ΔH = -198 kJ/mol
Step 3: SO₃ + H₂O → H₂SO₄  ΔH = -130 kJ/mol

Contact Process Conditions:
• Temperature: 450°C
• Pressure: 2-3 atm
• V₂O₅ catalyst
• Excess air`,
      question: "Discuss the Contact Process:\n1. Explain conditions using Le Chatelier's Principle\n2. Role of catalyst\n3. Safety and environmental considerations\n4. Economic factors",
      type: "essay",
      markingCriteria: [
        "Correct application of equilibrium principles",
        "Understanding of catalyst function",
        "Valid safety/environmental analysis",
        "Relevant economic discussion"
      ],
      marks: 20,
      explanation: "Answer should show understanding of industrial processes and chemical equilibrium"
    },

    // Section D: Matter & Materials (40 marks)
    {
      id: 30,
      context: `Organic Chemistry:

Compound X undergoes the following reactions:
1. X + Br₂/UV → C₄H₉Br
2. X + H₂O/H⁺ → C₄H₉OH
3. X + HBr → C₄H₉Br

IR Spectrum shows:
• Strong peak at 3080 cm⁻¹
• Strong peak at 1645 cm⁻¹
• No peak at 3300 cm⁻¹`,
      question: "1. Identify compound X\n2. Write mechanisms for reactions 1-3\n3. Explain IR spectrum peaks\n4. Predict product from X + KMnO₄",
      type: "essay",
      markingCriteria: [
        "Correct structure identification",
        "Accurate reaction mechanisms",
        "Valid spectral analysis",
        "Proper product prediction"
      ],
      marks: 15,
      explanation: "Response should demonstrate understanding of organic chemistry and spectroscopy"
    }
  ]
};