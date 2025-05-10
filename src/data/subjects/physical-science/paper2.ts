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

export const physicalSciencePaper2Quiz5: Quiz = {
  id: "physical-science-paper2-quiz5",
  title: "Physical Science Paper 2 - Quiz 5: Common Misconceptions",
  description: "Review and correct common misconceptions in chemistry",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Common Misconception:
"When a chemical bond forms, energy is released.
Therefore, breaking a bond releases energy."

Correct Understanding:
1. Bond formation RELEASES energy
2. Bond breaking REQUIRES energy
3. Overall energy change depends on:
   • Energy needed to break reactant bonds
   • Energy released when product bonds form
4. Exothermic if more energy released than absorbed
5. Endothermic if more energy absorbed than released`,
      question: "Why is breaking chemical bonds an endothermic process?",
      options: [
        "Because bonds store energy",
        "Because energy is needed to overcome bond forces",
        "Because products have less energy",
        "Because reactions release heat"
      ],
      correctAnswer: 1,
      explanation: "Breaking bonds requires energy input to overcome the attractive forces between atoms. This is why bond breaking is endothermic."
    },
    {
      id: 2,
      context: `Common Misconception:
"Strong acids are strong electrolytes because they
have strong bonds between H⁺ and the anion."

Correct Understanding:
1. Strong acids ionize completely in water
2. Bond strength ≠ degree of ionization
3. HCl is a strong acid but has weak H-Cl bonds
4. H₃PO₄ is a weak acid but has strong P-O bonds
5. Acid strength relates to ease of H⁺ donation`,
      question: "What determines if an acid is strong or weak?",
      options: [
        "The strength of its bonds",
        "Its concentration in solution",
        "Its degree of ionization in water",
        "The size of its molecules"
      ],
      correctAnswer: 2,
      explanation: "An acid's strength is determined by its degree of ionization in water, not by its bond strength or concentration."
    }
  ]
};

export const physicalSciencePaper2Quiz6: Quiz = {
  id: "physical-science-paper2-quiz6",
  title: "Physical Science Paper 2 - Quiz 6: Exam Technique",
  description: "Learn effective strategies for tackling physical science exams",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Approaching Chemical Calculations:

Given question:
Calculate the concentration of H₂SO₄ needed to
produce 5.0 g of H₂ gas when reacted with excess Zn.
Zn + H₂SO₄ → ZnSO₄ + H₂

Strategy:
1. Write balanced equation
2. Highlight key information:
   • Mass H₂ required = 5.0 g
   • Zn in excess
3. Plan solution:
   • Find moles H₂
   • Use equation ratio
   • Calculate moles H₂SO₄
   • Convert to concentration`,
      question: "Why is writing a balanced equation the first step?",
      options: [
        "It's required by the examiner",
        "To determine stoichiometric relationships",
        "To practice writing",
        "To use all information"
      ],
      correctAnswer: 1,
      explanation: "The balanced equation is essential for determining the stoichiometric relationships between reactants and products, which is needed for the calculation."
    },
    {
      id: 2,
      context: `Data Analysis Strategy:

Given: Graph of temperature vs time for heating curve

Effective approach:
1. Read title and axes (2 min)
2. Identify key points:
   • Phase changes (flat regions)
   • Temperature ranges
   • Gradient changes
3. Link to theory:
   • Phase change energy
   • Specific heat capacity
   • Latent heat
4. Answer questions:
   • Quote data points
   • Show calculations
   • Explain patterns`,
      question: "Why should you spend time reading axes before answering?",
      options: [
        "To look busy",
        "To identify units and variables for accurate interpretation",
        "To memorize numbers",
        "To check handwriting"
      ],
      correctAnswer: 1,
      explanation: "Understanding the axes helps identify units and variables, ensuring accurate data interpretation and appropriate use of formulae."
    }
  ]
};

export const physicalSciencePaper2: Quiz = {
  id: "physical-science-paper2",
  title: "Physical Sciences - Paper 2: Chemistry",
  description: "Tests understanding of matter and materials, chemical change, and chemical systems. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Multiple Choice & Terminology (30 marks)
    {
      id: 1,
      context: `Study the periodic table and atomic structure:

Element X:
• Atomic number: 11
• Mass number: 23
• Electron configuration: [Ne]3s¹

Calculate:
1. Number of protons = 11
2. Number of neutrons = 23 - 11 = 12
3. Number of electrons = 11
4. Valence electrons = 1`,
      question: "Which element is X and what is its likely chemical behavior?",
      options: [
        "Neon - inert",
        "Sodium - highly reactive metal",
        "Magnesium - moderately reactive",
        "Chlorine - forms anions"
      ],
      correctAnswer: 1,
      explanation: "Element X is Sodium (Na):\n1. Atomic number 11 = number of protons\n2. One valence electron (3s¹)\n3. Forms Na⁺ by losing one electron\n4. Highly reactive alkali metal",
      marks: 3
    },

    // Section B: Chemical Bonding & Matter (40 marks)
    {
      id: 10,
      context: `Study the reaction:
2Na + Cl₂ → 2NaCl

Bonding analysis:
1. Na loses 1e⁻ to form Na⁺
2. Cl gains 1e⁻ to form Cl⁻
3. Ionic bond forms between Na⁺ and Cl⁻
4. Crystal lattice structure forms`,
      question: "Analyze the bonding in sodium chloride formation. Include:\n1. Electron transfer process\n2. Energy changes\n3. Crystal structure\n4. Physical properties",
      type: "essay",
      markingCriteria: [
        "Electron configuration changes",
        "Energy considerations",
        "Structure description",
        "Property explanation"
      ],
      marks: 15,
      explanation: "Answer should demonstrate understanding of ionic bonding and structure-property relationships."
    },

    // Section C: Chemical Change (40 marks)
    {
      id: 20,
      context: `Acid-Base Titration:

25.0 mL of H₂SO₄ solution titrated with 0.100 M NaOH
• NaOH used = 40.0 mL
• Indicator: phenolphthalein
• Temperature: 25°C

Balanced equation:
H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O

Calculate:
1. Moles NaOH = 0.100 M × 0.0400 L = 0.00400 mol
2. Mole ratio H₂SO₄:NaOH = 1:2
3. Moles H₂SO₄ = 0.00400 ÷ 2 = 0.00200 mol
4. [H₂SO₄] = 0.00200 mol ÷ 0.0250 L = 0.0800 M`,
      question: "Calculate the concentration of the sulfuric acid solution.",
      type: "short-answer",
      correctAnswer: "0.0800 M",
      marks: 12,
      explanation: "Solution involves:\n1. Finding moles NaOH used\n2. Using stoichiometric ratio\n3. Finding moles H₂SO₄\n4. Calculating concentration"
    },

    // Section D: Chemical Systems (40 marks)
    {
      id: 30,
      context: `Industrial Production of Sulfuric Acid:

Contact Process stages:
1. S + O₂ → SO₂
2. 2SO₂ + O₂ ⇌ 2SO₃
3. H₂SO₄ formation

Conditions for step 2:
• Temperature: 450°C
• Pressure: 2-3 atm
• Catalyst: V₂O₅
• Equilibrium reaction`,
      question: "Discuss how the conditions affect the yield of SO₃. Consider:\n1. Le Chatelier's Principle\n2. Rate considerations\n3. Economic factors\n4. Environmental impact",
      type: "essay",
      markingCriteria: [
        "Equilibrium analysis",
        "Kinetic factors",
        "Economic evaluation",
        "Environmental awareness"
      ],
      marks: 15,
      explanation: "Response should show understanding of industrial processes and chemical equilibrium."
    }
  ]
};