import { Quiz } from "@/types/quiz";

export const accountingPaper2Quiz1: Quiz = {
  id: "accounting-paper2-quiz1",
  title: "Accounting Paper 2 - Quiz 1: Cost Behavior",
  description: "Test your knowledge of cost behavior and classification",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Manufacturing Cost Analysis:

Step-by-Step Solution Guide:
1. Identify Cost Types:
   Fixed Costs:
   • Factory rent: R20,000
   • Supervisor salary: R15,000
   Total Fixed = R35,000

   Variable Costs (per unit):
   • Direct materials: R50
   • Direct labor: R30
   • Variable utilities: R5
   Total Variable = R85/unit

2. Calculate Total Cost:
   Current Level (1,000 units):
   • Variable costs: 1,000 × R85 = R85,000
   • Fixed costs: R35,000
   • Total: R120,000

3. New Level (1,200 units):
   • Variable costs: 1,200 × R85 = R102,000
   • Fixed costs: R35,000 (unchanged)
   • Total: R137,000

Key Learning Points:
• Fixed costs remain constant
• Variable costs change with production
• Total cost = Fixed + (Units × Variable cost)`,
      question: "What is the total variable cost per unit?",
      options: ["R80", "R85", "R90", "R95"],
      correctAnswer: 1,
      explanation: "Variable costs per unit:\n1. Direct materials: R50\n2. Direct labor: R30\n3. Variable portion of utilities: R5\nTotal variable cost per unit = R85"
    }
  ]
};

export const accountingPaper2Quiz2: Quiz = {
  id: "accounting-paper2-quiz2",
  title: "Accounting Paper 2 - Quiz 2: Cost-Volume-Profit Analysis",
  description: "Test your understanding of CVP analysis and break-even calculations",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      context: `Break-even Analysis:

Given:
• Selling price: R150 per unit
• Variable cost: R90 per unit
• Fixed costs: R240,000

Solution Framework:
1. Find Contribution Margin:
   • CM = Price - Variable cost
   • CM = R150 - R90 = R60 per unit

2. Calculate Break-even Point:
   • BEP units = Fixed costs ÷ CM per unit
   • BEP = R240,000 ÷ R60
   • BEP = 4,000 units

3. Verify with Income Statement:
   Sales (4,000 × R150)     R600,000
   Less: Variable costs     (R360,000)
   Contribution margin      R240,000
   Less: Fixed costs       (R240,000)
   Net profit/loss         R0 ✓

Common Mistakes to Avoid:
• Don't mix up fixed and variable costs
• Include ALL fixed costs
• Check your units`,
      question: "What is the break-even point?",
      options: [
        "Where total revenue equals total variable costs",
        "Where total revenue equals total fixed costs",
        "Where total revenue equals total costs",
        "Where variable costs equal fixed costs"
      ],
      correctAnswer: 2,
      explanation: "Break-even point is where total revenue equals total costs (fixed + variable)"
    },
    {
      id: 2,
      question: "What is contribution margin?",
      options: [
        "Total revenue minus fixed costs",
        "Total revenue minus variable costs",
        "Total costs minus fixed costs",
        "Total revenue minus total costs"
      ],
      correctAnswer: 1,
      explanation: "Contribution margin is what remains from revenue after variable costs to cover fixed costs"
    },
    {
      id: 3,
      question: "What does operating leverage measure?",
      options: [
        "Break-even point",
        "Contribution margin",
        "Effect of fixed costs on profits",
        "Variable cost ratio"
      ],
      correctAnswer: 2,
      explanation: "Operating leverage measures how changes in sales affect profits due to fixed costs"
    },
    {
      id: 4,
      question: "How is unit contribution margin calculated?",
      options: [
        "Price - Total costs",
        "Price - Variable costs",
        "Price - Fixed costs",
        "Price × Quantity"
      ],
      correctAnswer: 1,
      explanation: "Unit contribution margin is selling price per unit minus variable costs per unit"
    },
    {
      id: 5,
      question: "What happens to break-even point if fixed costs increase?",
      options: [
        "Decreases",
        "Increases",
        "Stays the same",
        "Becomes zero"
      ],
      correctAnswer: 1,
      explanation: "Higher fixed costs require more units to be sold to break even"
    }
  ]
};

export const accountingPaper2Quiz3: Quiz = {
  id: "accounting-paper2-quiz3",
  title: "Accounting Paper 2 - Quiz 3: Budgeting and Variance Analysis",
  description: "Test your knowledge of budgeting principles and variance analysis",
  timeLimit: 300,
  questions: [
    {
      id: 1,
      question: "What is a flexible budget?",
      options: [
        "A budget that never changes",
        "A budget that adjusts for different activity levels",
        "A budget without fixed costs",
        "A budget without variable costs"
      ],
      correctAnswer: 1,
      explanation: "Flexible budgets adjust for changes in activity levels"
    },
    {
      id: 2,
      question: "What is a favorable variance?",
      options: [
        "Actual costs higher than budgeted",
        "Actual costs lower than budgeted",
        "No difference in costs",
        "Budgeted costs are zero"
      ],
      correctAnswer: 1,
      explanation: "A favorable variance occurs when actual costs are less than budgeted"
    },
    {
      id: 3,
      question: "What causes material price variance?",
      options: [
        "Using different quantities",
        "Paying different prices",
        "Change in labor hours",
        "Change in overhead"
      ],
      correctAnswer: 1,
      explanation: "Material price variance occurs when actual prices differ from standard prices"
    },
    {
      id: 4,
      question: "What is zero-based budgeting?",
      options: [
        "Starting from last year's budget",
        "Starting from zero each period",
        "Having no budget",
        "Only budgeting variables"
      ],
      correctAnswer: 1,
      explanation: "Zero-based budgeting requires justifying all expenses from zero each period"
    },
    {
      id: 5,
      question: "What is a master budget?",
      options: [
        "Only operating budget",
        "Only financial budget",
        "Comprehensive set of all budgets",
        "Only cash budget"
      ],
      correctAnswer: 2,
      explanation: "Master budget is a comprehensive set of all an organization's budgets"
    },
    {
      id: 6,
      type: "multiple-select",
      question: "Which factors can cause unfavorable cost variances? Select all that apply:",
      options: [
        "Higher material prices",
        "Inefficient labor usage",
        "Increased overhead costs",
        "Better supplier discounts",
        "Improved production efficiency"
      ],
      correctAnswers: [0, 1, 2],
      explanation: "Unfavorable cost variances can be caused by higher material prices, inefficient labor usage, and increased overhead costs. Better supplier discounts and improved efficiency would lead to favorable variances."
    }
  ]
};

export const accountingPaper2: Quiz = {
  id: "accounting-paper2",
  title: "Accounting - Paper 2: Managerial Accounting",
  description: "Tests understanding of costing, budgeting, and managerial decision-making. Total marks: 150",
  timeLimit: 10800, // 3 hours
  questions: [
    // Section A: Concepts and Terminology (30 marks)
    {
      id: 1,
      context: `Cost Classification Exercise:

Manufacturing Company Cost Data:
• Raw materials used: R150,000
• Factory labor: R80,000
• Factory rent: R30,000
• Factory insurance: R15,000
• Sales salaries: R45,000
• Delivery expenses: R25,000

Analysis Framework:
1. Identify Manufacturing Costs:
   Direct:
   • Raw materials
   • Factory labor
   
   Indirect (Overhead):
   • Factory rent
   • Factory insurance

2. Separate Non-manufacturing:
   Period Costs:
   • Sales salaries
   • Delivery expenses

3. Calculate Totals:
   Prime Cost:
   • Materials + Direct labor
   • R150,000 + R80,000 = R230,000

   Factory Overhead:
   • Rent + Insurance
   • R30,000 + R15,000 = R45,000

   Total Manufacturing:
   • Prime + Overhead
   • R230,000 + R45,000 = R275,000

Tips:
• Check if cost is part of product
• Consider timing of cost
• Think about cost behavior`,
      question: "Classify these costs as product or period costs, and calculate total manufacturing costs.",
      type: "short-answer",
      correctAnswer: "Product costs (manufacturing):\n- Materials: R150,000\n- Direct labor: R80,000\n- Factory overhead: R45,000\nTotal manufacturing cost: R275,000\n\nPeriod costs:\n- Sales salaries: R45,000\n- Delivery: R25,000",
      marks: 8,
      explanation: "Answer should demonstrate understanding of cost classifications and calculations"
    },

    // Section B: Costing and Break-even Analysis (40 marks)
    {
      id: 10,
      type: "essay",
      context: `Break-even Analysis:

Company ABC Ltd produces widgets:
• Selling price: R50 per unit
• Variable cost: R30 per unit
• Fixed costs: R100,000 per month
• Current production: 8,000 units
• Maximum capacity: 12,000 units

Required:
1. Break-even point calculation
2. Margin of safety
3. Target profit of R60,000`,
      question: "Perform a complete break-even analysis including:\n1. Break-even point in units and value\n2. Margin of safety percentage\n3. Units needed for target profit\n4. Graphical presentation",
      markingCriteria: [
        "Accurate calculations",
        "Clear methodology",
        "Proper graph",
        "Valid interpretation"
      ],
      marks: 20,
      explanation: "Response should show understanding of CVP analysis and break-even concepts"
    },

    // Section C: Budgeting & Variance Analysis (40 marks)
    {
      id: 20,
      context: `Budgeting Case Study:

DEF Manufacturing - March 2025
Budget vs Actual Results:

Production (units):
• Budget: 10,000
• Actual: 9,500

Direct Materials:
• Budget: R200,000 (R20 per unit)
• Actual: R199,500 (R21 per unit)

Direct Labor:
• Budget: 2,000 hours at R100/hour
• Actual: 1,950 hours at R105/hour

Required: Variance analysis with recommendations`,
      question: "Calculate and analyze all variances:\n1. Material price and usage variances\n2. Labor rate and efficiency variances\n3. Identify causes\n4. Make recommendations",
      type: "essay",
      markingCriteria: [
        "Correct variance calculations",
        "Valid cause analysis",
        "Practical recommendations",
        "Professional presentation"
      ],
      marks: 20,
      explanation: "Answer should demonstrate understanding of budgeting and variance analysis"
    },

    // Section D: Decision Making (40 marks)
    {
      id: 30,
      context: `Investment Decision:

Project Options:
Option A:
• Initial cost: R500,000
• Annual cash inflow: R150,000
• Life: 5 years
• Salvage value: R50,000

Option B:
• Initial cost: R400,000
• Annual cash inflow: R130,000
• Life: 5 years
• Salvage value: R75,000

Required IRR: 12%`,
      question: "Evaluate these investment options:\n1. Calculate NPV for each option\n2. Calculate IRR\n3. Perform sensitivity analysis\n4. Make recommendations",
      type: "essay",
      markingCriteria: [
        "Accurate calculations",
        "Clear methodology",
        "Risk consideration",
        "Justified recommendation"
      ],
      marks: 15,
      explanation: "Response should show understanding of investment appraisal techniques"
    }
  ]
};