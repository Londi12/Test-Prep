import React from "react";
import { Subject } from "@/types/quiz";
import { BookOpen, Calculator, DollarSign, Laptop, Atom } from "lucide-react";

import { englishPapers } from "./english";
import { mathsPapers } from "./mathematics";
import { accountingPapers } from "./accounting";
import { physicalSciencePapers } from "./physical-science";
import { lifeSciencePapers } from "./life-science";

export const subjects: Subject[] = [
  {
    name: "English Home Language",
    icon: <BookOpen className="w-5 h-5" />,
    papers: englishPapers
  },
  {
    name: "Mathematics",
    icon: <Calculator className="w-5 h-5" />,
    papers: mathsPapers
  },
  {
    name: "Accounting",
    icon: <DollarSign className="w-5 h-5" />,
    papers: accountingPapers
  },
  {
    name: "Physical Science",
    icon: <Atom className="w-5 h-5" />,
    papers: physicalSciencePapers
  },
  {
    name: "Life Science",
    icon: <Laptop className="w-5 h-5" />,
    papers: lifeSciencePapers
  }
];