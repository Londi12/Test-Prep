import { Quiz } from "@/types/quiz";

export const lifeSciencePaper2Quiz1: Quiz = {
  id: "life-science-paper2-quiz1",
  title: "Life Science Paper 2 - Quiz 1: Environmental Studies",
  description: "Test your knowledge on ecosystems, food webs, and environmental interactions",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Study the energy pyramid diagram:
      
[Diagram shows:
Level 4: Tertiary Consumers (hawks, eagles) - 1 unit energy
Level 3: Secondary Consumers (snakes, small birds) - 10 units
Level 2: Primary Consumers (rabbits, insects) - 100 units
Level 1: Producers (plants) - 1000 units of energy]

Note: Only about 10% of energy transfers between levels`,
      question: "What is the term for organisms that can produce their own food?",
      options: ["Heterotrophs", "Autotrophs", "Carnivores", "Decomposers"],
      correctAnswer: 1,
      explanation: "Autotrophs (producers) can produce their own food through processes like photosynthesis"
    },
    {
      id: 2,
      context: `Field Study Results: Forest Floor Decomposition
      
Experiment setup:
• 4 identical leaf litter bags placed on forest floor
• Different decomposer access:
  - Bag 1: No decomposers (control)
  - Bag 2: Bacteria only
  - Bag 3: Fungi only
  - Bag 4: All decomposers
  
Results after 6 months:
Bag 1: 2% mass loss
Bag 2: 15% mass loss
Bag 3: 25% mass loss
Bag 4: 45% mass loss`,
      question: "What is the primary role of decomposers in an ecosystem?",
      options: [
        "To produce oxygen",
        "To break down dead organic matter",
        "To feed on other organisms",
        "To produce energy from sunlight"
      ],
      correctAnswer: 1,
      explanation: "Decomposers break down dead organic matter, recycling nutrients back into the ecosystem"
    },
    {
      id: 3,
      context: `Marine Ecosystem Study:
      
[Diagram shows:
- Shark with attached remora fish
- Remora feeding on food scraps
- No negative impact on shark
- Benefits: cleaning, transportation for remora]

Type of Interaction:
• One species benefits (+)
• Other species unaffected (0)
• Example of +/0 relationship`,
      question: "What is the relationship between a remora and a shark?",
      options: [
        "Predator-prey",
        "Competition",
        "Commensalism",
        "Parasitism"
      ],
      correctAnswer: 2,
      explanation: "Commensalism: the remora benefits by eating scraps and getting transportation, while the shark is unaffected"
    }
  ]
};

export const lifeSciencePaper2Quiz2: Quiz = {
  id: "life-science-paper2-quiz2",
  title: "Life Science Paper 2 - Quiz 2: Evolution",
  description: "Test your understanding of natural selection, adaptation, and evolutionary processes",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Study the graph of beak size distribution in Galapagos finches:
      
[Graph shows:
- Two peaks in beak size frequency
- Original population had one peak
- After drought: population split into two groups
- Large beaks: crack large seeds
- Small beaks: eat small seeds]`,
      question: "What type of selection favors individuals at both extremes of a trait's range?",
      options: [
        "Directional selection",
        "Stabilizing selection",
        "Disruptive selection",
        "Natural selection"
      ],
      correctAnswer: 2,
      explanation: "Disruptive selection favors extreme traits, leading to bimodal distribution as seen in the beak sizes"
    },
    {
      id: 2,
      context: `Population Genetics Study:

Given population:
• 100 individuals
• Genotype frequencies:
  - AA: 36 individuals (p² = 0.36)
  - Aa: 48 individuals (2pq = 0.48)
  - aa: 16 individuals (q² = 0.16)

Hardy-Weinberg calculations:
p = √0.36 + (0.48/2) = 0.6
q = √0.16 + (0.48/2) = 0.4
p + q = 1`,
      question: "What must be true for Hardy-Weinberg equilibrium?",
      type: "multiple-select",
      options: [
        "Random mating",
        "No mutation",
        "Large population",
        "Natural selection occurring",
        "Gene flow present"
      ],
      correctAnswers: [0, 1, 2],
      explanation: "Hardy-Weinberg equilibrium requires random mating, no mutation, large population, no selection, and no gene flow"
    }
  ]
};

export const lifeSciencePaper2Quiz3: Quiz = {
  id: "life-science-paper2-quiz3",
  title: "Life Science Paper 2 - Quiz 3: Genetics and Inheritance",
  description: "Test your knowledge of genetic principles, inheritance patterns, and DNA",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Study the pedigree diagram for colorblindness:
      
[Pedigree shows:
- Affected males (filled squares)
- Carrier females (half-filled circles)
- Unaffected individuals (empty shapes)
- Pattern shows X-linked inheritance
- Gene located on X chromosome]

Key observations:
• Males are either affected or unaffected
• Females can be carriers
• Sons of carrier mothers have 50% chance of being affected
• Fathers cannot pass condition to sons`,
      question: "Which of these is a sex-linked trait?",
      options: ["Eye color", "Height", "Colorblindness", "Blood type"],
      correctAnswer: 2,
      explanation: "Colorblindness is a sex-linked trait as the gene is located on the X chromosome"
    },
    {
      id: 2,
      context: `Genetic Cross Analysis:

Parents: Rr × Rr (R = round seeds, r = wrinkled seeds)

Punnett Square:
   R    r
R  RR   Rr
r  Rr   rr

Results:
• RR: Round seeds (dominant)
• Rr: Round seeds (dominant expressed)
• rr: Wrinkled seeds (recessive)

Phenotype ratio: 3 round : 1 wrinkled`,
      question: "In genetics, what is meant by the term 'dominant allele'?",
      options: [
        "An allele that is most common in the population",
        "An allele that is expressed even in heterozygous condition",
        "An allele that causes disease",
        "An allele that is recessive"
      ],
      correctAnswer: 1,
      explanation: "A dominant allele (R) is expressed even when paired with a different (recessive) allele (r), as seen in the Rr genotype showing the round seed phenotype"
    },
    {
      id: 3,
      context: `Probability Calculation:

Cross: Bb × Bb (B = black fur, b = white fur)

Punnett Square:
   B    b
B  BB   Bb
b  Bb   bb

Calculate probability of bb:
• Total possible outcomes: 4
• Favorable outcomes (bb): 1
• Probability = 1/4 = 25%`,
      question: "What is the probability of two heterozygous parents (Bb) having a homozygous recessive (bb) child?",
      options: ["0%", "25%", "50%", "75%"],
      correctAnswer: 1,
      explanation: "Using a Punnett square: Bb × Bb gives BB(25%), Bb(50%), bb(25%). Probability of bb = 25%"
    },
    {
      id: 4,
      context: `Study the process of protein synthesis:

DNA sequence: TAC GGA CCT
mRNA transcribed: AUG CCU GGA
Amino acids: Met-Pro-Gly

Steps:
1. DNA unwinds
2. mRNA transcribed
3. mRNA leaves nucleus
4. Ribosomes read mRNA
5. Proteins assembled`,
      question: "What is the function of mRNA?",
      options: [
        "To store genetic information",
        "To carry genetic information for protein synthesis",
        "To break down proteins",
        "To make lipids"
      ],
      correctAnswer: 1,
      explanation: "mRNA carries genetic information from DNA to ribosomes for protein synthesis"
    },
    {
      id: 5,
      context: `DNA Mutation Analysis:

Original DNA: ATG CCG TAA
Mutated DNA:  ATG CTG TAA

Types of mutations:
1. Substitution: one base changed
2. Insertion: base added
3. Deletion: base removed
4. Frameshift: reading frame changed

In this case: C→T substitution mutation
Result: Different amino acid coded`,
      question: "What is a mutation?",
      options: [
        "Normal cell division",
        "A change in DNA sequence",
        "Protein synthesis",
        "Gene expression"
      ],
      correctAnswer: 1,
      explanation: "A mutation is a change in the DNA sequence (like the C→T substitution shown) that may affect the organism"
    }
  ]
};

export const lifeSciencePaper2: Quiz = {
  id: "life-science-paper2",
  title: "Life Sciences - Paper 2: Environmental Studies & Genetics",
  description: "Tests knowledge of evolution, environmental studies, and genetics. Includes data response and analysis. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Short Questions (50 marks)
    {
      id: 1,
      context: `Study the diagram of a food web:

[Diagram shows:
• Primary producers: Grass, Trees, Algae
• Primary consumers: Zebra, Giraffe, Small fish
• Secondary consumers: Lion, Eagle, Large fish
• Decomposers: Bacteria, Fungi

Energy flow indicated by arrows]`,
      question: "Explain why this food web would collapse if all decomposers were removed.",
      type: "essay",
      marks: 8,
      markingCriteria: [
        "Understanding of nutrient cycling",
        "Role of decomposers",
        "Impact on ecosystem",
        "Logical explanation"
      ],
      explanation: "Answer should demonstrate understanding of nutrient cycles and ecosystem interdependence"
    },

    // Section B: Evolution & Population Dynamics (50 marks)
    {
      id: 10,
      context: `Study this population growth data:

Year  Population Size  Birth Rate  Death Rate  Migration
1990  1000            45          15          +5
1995  1200            42          14          +8
2000  1500            40          12          +10
2005  1900            38          11          +15
2020  2500            35          10          +20

Required:
1. Calculate growth rate for each period
2. Identify limiting factors
3. Predict future trends`,
      question: "Analyze the population dynamics shown in the data. Include:\n1. Growth rate calculations\n2. Factors affecting growth\n3. Environmental implications\n4. Future predictions",
      type: "essay",
      marks: 15,
      markingCriteria: [
        "Accurate calculations",
        "Factor analysis",
        "Environmental impact",
        "Valid predictions"
      ],
      explanation: "Response should show understanding of population dynamics and environmental carrying capacity"
    },

    // Section C: Genetics & Inheritance (50 marks)
    {
      id: 20,
      context: `Genetic Study:

Pedigree analysis of color blindness:
[Diagram shows three generations]
□ = Unaffected male
■ = Affected male
○ = Unaffected female
● = Carrier female

Pattern indicates X-linked inheritance:
• Males are either affected or unaffected
• Females can be carriers
• Condition passes from carrier mother to son`,
      question: "Analyze this inheritance pattern:\n1. Determine type of inheritance\n2. Calculate probability of inheritance\n3. Draw genetic diagrams\n4. Explain gender differences",
      type: "essay",
      marks: 15,
      markingCriteria: [
        "Correct inheritance pattern",
        "Accurate probability",
        "Clear genetic diagrams",
        "Valid explanation"
      ],
      explanation: "Answer should demonstrate understanding of sex-linked inheritance patterns"
    },

    // Environmental Impact Analysis
    {
      id: 30,
      context: `Study these climate change indicators:

1990: pH 8.1, CO₂ 355ppm
2025: pH 8.0, CO₂ 410ppm

Chemical reaction:
CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻`,
      question: "Analyze the environmental impact:\n1. Explain ocean acidification\n2. Impact on marine ecosystems\n3. Suggest mitigation strategies",
      type: "essay",
      marks: 12,
      markingCriteria: [
        "Process explanation",
        "Impact analysis",
        "Valid solutions",
        "Scientific accuracy"
      ],
      explanation: "Answer should show understanding of environmental chemistry and ecosystem impacts"
    }
  ]
};