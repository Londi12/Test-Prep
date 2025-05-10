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

export const lifeSciencePaper2Quiz4: Quiz = {
  id: "life-science-paper2-quiz4",
  title: "Life Science Paper 2 - Quiz 4: Common Misconceptions",
  description: "Review and correct common misconceptions in genetics and evolution",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Common Misconception:
"Evolution means that organisms are trying to adapt
and can change their genes when needed."

Correct Understanding:
1. Evolution is NOT directed or intentional
2. Random mutations occur regardless of need
3. Natural selection acts on existing variations
4. Beneficial mutations are preserved
5. Changes occur in populations, not individuals
6. Process takes many generations`,
      question: "Why can't individual organisms evolve during their lifetime?",
      options: [
        "They don't try hard enough",
        "Changes to body cells don't affect gametes",
        "The environment isn't changing fast enough",
        "They need more time"
      ],
      correctAnswer: 1,
      explanation: "Only mutations in gametes can be passed on. Changes to body cells (somatic cells) during an organism's lifetime don't affect inheritance."
    },
    {
      id: 2,
      context: `Common Misconception:
"If a trait is dominant, it must be more common
in the population than the recessive trait."

Correct Understanding:
1. Dominance ≠ frequency in population
2. Example: Polydactyly (extra fingers)
   • Dominant trait
   • Very rare in population
3. Example: Blue eyes
   • Recessive trait
   • Common in some populations
4. Population frequency depends on:
   • Selection pressures
   • Genetic drift
   • Founder effects
   • Migration patterns`,
      question: "Why isn't a dominant allele necessarily more common in a population?",
      options: [
        "Because dominant alleles are stronger",
        "Because dominance only affects phenotype expression",
        "Because recessive alleles are stronger",
        "Because dominance changes over time"
      ],
      correctAnswer: 1,
      explanation: "Dominance only determines how alleles interact and are expressed (phenotype). Population frequency is determined by evolutionary factors."
    }
  ]
};

export const lifeSciencePaper2Quiz5: Quiz = {
  id: "life-science-paper2-quiz5",
  title: "Life Science Paper 2 - Quiz 5: Exam Technique",
  description: "Learn effective strategies for tackling biology exams",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Analyzing Biological Data:

Population Study Data:
Year | Population | Rainfall(mm)
2020 | 120       | 650        
2021 | 145       | 700        
2022 | 180       | 750        

Analysis Framework:
1. Describe Patterns (3-4 min)
   • Population trend: Increasing
   • Rainfall trend: Increasing
   • Relationship: Positive correlation

2. Calculate Changes (3-4 min)
   • Population increase:
     2020-2021: +25 (20.8%)
     2021-2022: +35 (24.1%)
   • Rainfall increase:
     2020-2021: +50mm
     2021-2022: +50mm

3. Scientific Explanation (5-6 min)
   • More rainfall → more vegetation
   • More food availability
   • Better breeding conditions
   • Higher survival rates

4. Consider Other Factors (3-4 min)
   • Predator numbers
   • Disease outbreaks
   • Human interference
   • Competition

Writing Tips:
• Use data to support claims
• Show calculations clearly
• Consider multiple factors
• Link to ecological principles`,
    },
    {
      id: 2,
      context: `Experimental Design:

Research Question: 
"How does light intensity affect the rate of photosynthesis?"

Design Framework:
1. Variables (2-3 min):
   Independent: Light intensity
   Dependent: Rate of photosynthesis
   Control: Temperature, CO₂, plant type

2. Method (4-5 min):
   • Use water plant (Elodea)
   • Count oxygen bubbles
   • Different distances from light
   • Time: 5 minutes per test
   • 3 repeats per distance

3. Data Collection (3-4 min):
   • Create results table
   • Record bubble count
   • Note observations
   • Calculate averages

4. Analysis Plan (3-4 min):
   • Graph: Line graph
   • X-axis: Light intensity
   • Y-axis: Bubble count/min
   • Include error bars

Safety & Accuracy:
• Maintain constant temperature
• Fresh plants for each test
• Clean equipment
• Accurate measurements`,
    }
  ]
};

export const lifeSciencePaper2: Quiz = {
  id: "life-science-paper2",
  title: "Life Sciences - Paper 2: Environmental Studies & Genetics",
  description: "Tests knowledge of evolution, environmental studies, and genetics. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Environmental Studies (50 marks)
    {
      id: 1,
      context: `Study the food web diagram:

[Diagram shows:
• Primary producers: Grass, Trees, Algae
• Primary consumers: Zebra, Giraffe, Small fish
• Secondary consumers: Lion, Eagle, Large fish
• Decomposers: Bacteria, Fungi

Energy flow and nutrient cycling indicated by arrows]

Energy pyramid data:
Level 4 (Top predators): 0.1% of original energy
Level 3 (Secondary consumers): 1%
Level 2 (Primary consumers): 10%
Level 1 (Producers): 100%`,
      question: "Analyze this ecosystem:\n1. Explain energy flow\n2. Discuss nutrient cycling\n3. Predict impact if decomposers are removed\n4. Suggest conservation measures",
      type: "essay",
      markingCriteria: [
        "Understanding of energy transfer",
        "Nutrient cycle explanation",
        "Ecological relationships",
        "Conservation awareness"
      ],
      marks: 20,
      explanation: "Answer should demonstrate understanding of ecosystem dynamics and interdependence."
    },

    // Section B: Population Studies (30 marks)
    {
      id: 10,
      context: `Population Growth Study:

Data for zebra population in reserve:
Year | Population | Rainfall(mm) | Predators
2020 | 120       | 650         | 15
2021 | 145       | 700         | 12
2022 | 180       | 750         | 10
2023 | 230       | 720         | 8
2024 | 300       | 680         | 6

Required:
1. Calculate growth rate
2. Identify limiting factors
3. Predict carrying capacity
4. Suggest management strategies`,
      question: "Analyze the population dynamics and suggest management strategies.",
      type: "essay",
      markingCriteria: [
        "Data analysis",
        "Factor identification",
        "Prediction accuracy",
        "Management suggestions"
      ],
      marks: 15,
      explanation: "Response should show understanding of population ecology and wildlife management."
    },

    // Section C: Genetics (70 marks)
    {
      id: 20,
      context: `Genetic Disorder Case Study:

Family pedigree for color blindness:
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
      markingCriteria: [
        "Inheritance pattern analysis",
        "Probability calculations",
        "Genetic diagram accuracy",
        "Sex-linkage explanation"
      ],
      marks: 20,
      explanation: "Answer should demonstrate understanding of sex-linked inheritance patterns."
    },

    // Section D: Molecular Genetics (30 marks)
    {
      id: 30,
      context: `DNA Analysis:

Original DNA: GAT CCG TAA
Mutated DNA:  GAT CTG TAA

Types of mutations:
1. Substitution (base change)
2. Insertion (base added)
3. Deletion (base removed)
4. Frameshift (reading frame altered)

Protein synthesis steps:
1. Transcription
2. Translation
3. Protein folding`,
      question: "Analyze the mutation's effect:\n1. Identify mutation type\n2. Predict effect on protein\n3. Discuss potential phenotype\n4. Suggest treatment approaches",
      type: "essay",
      markingCriteria: [
        "Mutation identification",
        "Protein analysis",
        "Phenotype prediction",
        "Treatment discussion"
      ],
      marks: 15,
      explanation: "Response should show understanding of molecular genetics and protein synthesis."
    }
  ]
};