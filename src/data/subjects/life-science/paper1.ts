import { Quiz } from "@/types/quiz";

export const lifeSciencePaper1Quiz1: Quiz = {
  id: "life-science-paper1-quiz1",
  title: "Life Science Paper 1 - Quiz 1: Cell Biology",
  description: "Test your knowledge on cell structure, function, and processes",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Study this electron microscope image of a cell:
      
[Diagram shows:
- Double membrane structure (outer membrane)
- Inner folded membranes (cristae)
- Matrix space
- ATP synthase enzymes]

This organelle is responsible for cellular respiration:
• Glucose + O₂ → CO₂ + H₂O + Energy (ATP)
• Process occurs in the inner membrane folds
• ATP is produced via chemiosmosis`,
      question: "Which organelle is responsible for energy production in the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
      correctAnswer: 2,
      explanation: "Mitochondria are known as the 'powerhouse of the cell' because they produce most of the cell's supply of ATP (energy)"
    },
    {
      id: 2,
      context: `Examine this micrograph of a eukaryotic cell:
      
[Image shows:
- Large central structure
- Dense nucleolus
- Nuclear membrane with pores
- Chromatin material]

Key functions:
1. Contains genetic material (DNA)
2. Controls protein synthesis
3. Regulates gene expression
4. Separates during cell division`,
      question: "What is the function of the nucleus?",
      options: [
        "Energy production",
        "Protein synthesis",
        "Storage of genetic material",
        "Waste removal"
      ],
      correctAnswer: 2,
      explanation: "The nucleus contains and protects the cell's genetic material (DNA) and controls gene expression"
    },
    {
      id: 3,
      context: `Laboratory Investigation: Osmosis
      
Setup:
• Three potato cylinders of equal size
• Solutions: distilled water, 0.9% NaCl, 10% NaCl
• Initial mass recorded
• Final mass measured after 30 minutes

Results:
Distilled water: mass increased
0.9% NaCl: mass unchanged
10% NaCl: mass decreased`,
      question: "What happened to the potato in distilled water?",
      options: [
        "Water moved out of the cells",
        "Water moved into the cells",
        "No water movement",
        "Cells burst"
      ],
      correctAnswer: 1,
      explanation: "In distilled water (hypotonic solution), water moves into cells by osmosis, causing the mass to increase"
    }
  ]
};

export const lifeSciencePaper1Quiz2: Quiz = {
  id: "life-science-paper1-quiz2",
  title: "Life Science Paper 1 - Quiz 2: Human Systems",
  description: "Test your understanding of human body systems and their functions",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "Which of these is NOT a function of the skeletal system?",
      options: ["Support", "Protection", "Movement", "Digestion"],
      correctAnswer: 3,
      explanation: "Digestion is a function of the digestive system, not the skeletal system"
    },
    {
      id: 2,
      question: "What is the main function of red blood cells?",
      options: ["Fighting infection", "Blood clotting", "Transporting oxygen", "Producing antibodies"],
      correctAnswer: 2,
      explanation: "Red blood cells contain hemoglobin, which allows them to transport oxygen"
    },
    {
      id: 3,
      question: "Which organ system is responsible for removing waste products from the blood?",
      options: [
        "Digestive system",
        "Respiratory system",
        "Urinary system",
        "Circulatory system"
      ],
      correctAnswer: 2,
      explanation: "The urinary system, particularly the kidneys, filters waste products from the blood"
    },
    {
      id: 4,
      question: "What is the primary function of the lymphatic system?",
      options: [
        "Blood circulation",
        "Immune defense",
        "Digestion",
        "Breathing"
      ],
      correctAnswer: 1,
      explanation: "The lymphatic system plays a crucial role in immune defense and fighting infections"
    },
    {
      id: 5,
      question: "Which part of the brain controls balance and coordination?",
      options: [
        "Cerebrum",
        "Cerebellum",
        "Medulla",
        "Hypothalamus"
      ],
      correctAnswer: 1,
      explanation: "The cerebellum is responsible for balance, coordination, and fine motor control"
    }
  ]
};

export const lifeSciencePaper1Quiz3: Quiz = {
  id: "life-science-paper1-quiz3",
  title: "Life Science Paper 1 - Quiz 3: Biological Processes",
  description: "Test your knowledge of key biological processes and biochemistry",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "During which phase of photosynthesis is oxygen produced?",
      options: ["Calvin Cycle", "Glycolysis", "Light-dependent reactions", "Krebs Cycle"],
      correctAnswer: 2,
      explanation: "Oxygen is produced during the light-dependent reactions when water molecules are split"
    },
    {
      id: 2,
      question: "Which hormone is responsible for regulating blood glucose levels?",
      options: ["Estrogen", "Testosterone", "Insulin", "Thyroxine"],
      correctAnswer: 2,
      explanation: "Insulin regulates blood glucose levels by allowing cells to take up glucose"
    },
    {
      id: 3,
      question: "What is the final product of cellular respiration?",
      options: [
        "Glucose",
        "Oxygen",
        "ATP",
        "Carbon dioxide"
      ],
      correctAnswer: 2,
      explanation: "The main purpose of cellular respiration is to produce ATP (energy)"
    },
    {
      id: 4,
      question: "Which process converts glucose to pyruvate?",
      options: [
        "Glycolysis",
        "Krebs cycle",
        "Electron transport chain",
        "Beta oxidation"
      ],
      correctAnswer: 0,
      explanation: "Glycolysis is the process that breaks down glucose into pyruvate"
    },
    {
      id: 5,
      question: "What is the role of enzymes in biological processes?",
      options: [
        "Energy storage",
        "Catalyzing reactions",
        "Hormone production",
        "Waste removal"
      ],
      correctAnswer: 1,
      explanation: "Enzymes are biological catalysts that speed up chemical reactions in living organisms"
    }
  ]
};

export const lifeSciencePaper1Quiz4: Quiz = {
  id: "life-science-paper1-quiz4",
  title: "Life Science Paper 1 - Quiz 4: Plant Biology & Scientific Method",
  description: "Test your knowledge of plant systems and scientific investigation",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "What is the role of guard cells in leaves?",
      options: [
        "Photosynthesis",
        "Control of stomatal opening",
        "Water transport",
        "Support"
      ],
      correctAnswer: 1,
      explanation: "Guard cells control the opening and closing of stomata, regulating gas exchange and water loss"
    },
    {
      id: 2,
      question: "Which plant tissue is responsible for water transport?",
      options: [
        "Phloem",
        "Xylem",
        "Epidermis",
        "Palisade mesophyll"
      ],
      correctAnswer: 1,
      explanation: "Xylem vessels transport water and minerals from roots to other parts of the plant"
    },
    {
      id: 3,
      question: "What is the correct sequence in the scientific method?",
      options: [
        "Hypothesis, Observation, Experiment, Conclusion",
        "Observation, Hypothesis, Experiment, Conclusion",
        "Experiment, Observation, Hypothesis, Conclusion",
        "Conclusion, Hypothesis, Observation, Experiment"
      ],
      correctAnswer: 1,
      explanation: "The scientific method begins with observation, followed by forming a hypothesis, testing it through experimentation, and drawing conclusions"
    },
    {
      id: 4,
      question: "Which is a controlled variable in a photosynthesis experiment?",
      options: [
        "Amount of light",
        "Temperature",
        "CO2 concentration",
        "Plant growth"
      ],
      correctAnswer: 1,
      explanation: "Temperature should be kept constant to ensure that changes in plant growth are due to light intensity only"
    },
    {
      id: 5,
      question: "What is the resolution of a light microscope?",
      options: [
        "0.1 nm",
        "0.2 μm",
        "2 mm",
        "20 μm"
      ],
      correctAnswer: 1,
      explanation: "Light microscopes typically have a resolution limit of about 0.2 micrometers"
    }
  ]
};

export const lifeSciencePaper1: Quiz = {
  id: "life-science-paper1",
  title: "Life Sciences - Paper 1: Molecular & Cellular Processes",
  description: "Tests knowledge of life processes at molecular, cellular and tissue levels, including practical investigations and data analysis. Total marks: 150",
  timeLimit: 9000, // 2.5 hours
  questions: [
    // Section A: Multiple Choice, Terminology & Matching (50 marks)
    {
      id: 1,
      context: `Study this electron microscope image and diagram of a cell organelle:
      
[Diagram shows:
- Double membrane structure
- Inner folded membranes (cristae)
- Matrix space
- ATP synthase enzymes
- Scale bar showing size: 1μm]

The organelle is involved in cellular respiration:
• Glucose + O₂ → CO₂ + H₂O + Energy (ATP)
• Process occurs in inner membrane folds
• ATP synthesis via chemiosmosis`,
      question: "Identify this organelle and its primary function:",
      options: [
        "Nucleus - DNA replication",
        "Ribosome - protein synthesis",
        "Mitochondrion - cellular respiration",
        "Golgi apparatus - protein packaging"
      ],
      correctAnswer: 2,
      marks: 2,
      explanation: "The structure shown is a mitochondrion, identifiable by its characteristic double membrane and cristae. Its primary function is cellular respiration and ATP production."
    },

    // Section B: Practical Investigation & Data Analysis (40 marks)
    {
      id: 15,
      type: "essay",
      context: `Investigation: Effect of Salt Concentration on Cell Transport

Materials:
• Three potato cylinders of equal size (3cm × 1cm)
• Solutions: distilled water, 0.9% NaCl, 10% NaCl
• Electronic balance (±0.01g accuracy)
• Timer

Method:
1. Record initial mass of each cylinder
2. Place each cylinder in different solutions
3. Leave for 30 minutes
4. Remove, blot dry, and record final mass

Results:
Solution          Initial Mass   Final Mass   Change
Distilled water   3.52g         3.89g        +0.37g
0.9% NaCl        3.48g         3.50g        +0.02g
10% NaCl         3.55g         3.21g        -0.34g`,
      question: "Analyze the investigation above and write a scientific report that includes:\n1. Formulation of hypothesis\n2. Identification of variables\n3. Analysis of results\n4. Conclusion\n5. Potential sources of error",
      markingCriteria: [
        "Clear hypothesis relating concentration to water movement",
        "Correct identification of independent, dependent and control variables",
        "Data analysis with correct scientific terminology (osmosis, concentration gradient)",
        "Valid conclusion supported by results",
        "Relevant experimental errors and improvements"
      ],
      marks: 20,
      explanation: "A complete answer should demonstrate understanding of osmosis, scientific method, and data analysis."
    },

    // Section C: Integration & Application (60 marks)
    {
      id: 25,
      type: "essay",
      context: `Study the following information about a newly discovered metabolic disorder:

Patients show:
• Elevated blood glucose
• Normal insulin production
• Normal insulin receptor structure
• Abnormal glucose transport protein (GLUT4)
• Symptoms worsen with high-carbohydrate meals

Recent research:
• GLUT4 gene mutation identified
• Protein misfolding prevents glucose uptake
• Exercise increases membrane GLUT4 despite mutation
• Some patients respond to chemical chaperone therapy`,
      question: "Evaluate how understanding of cell membrane transport and protein structure helps explain this disorder. In your essay:\n1. Explain normal glucose uptake mechanism\n2. Analyze how the mutation affects cellular processes\n3. Suggest why exercise helps\n4. Discuss potential treatment approaches",
      markingCriteria: [
        "Accurate description of membrane transport",
        "Clear explanation of protein structure-function relationship",
        "Logical analysis of mutation effects",
        "Evidence-based treatment discussion"
      ],
      marks: 20,
      explanation: "The essay should demonstrate integration of knowledge about cell structure, membrane transport, and protein function in a medical context."
    }
    // Additional questions following similar pattern...
  ]
};