
import React from "react";
import { cn } from "@/lib/utils";

interface QuizOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  option,
  index,
  isSelected,
  onClick
}) => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const letter = letters[index] || `${index + 1}`;
  
  return (
    <div 
      onClick={onClick}
      className={cn(
        "p-4 border rounded-lg transition-all cursor-pointer flex items-start gap-3",
        isSelected 
          ? "bg-blue-50 border-blue-300" 
          : "bg-white border-gray-200 hover:bg-gray-50"
      )}
    >
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
        isSelected 
          ? "bg-blue-500 text-white" 
          : "bg-gray-100 text-gray-700"
      )}>
        {letter}
      </div>
      <div className="text-base pt-1">
        {option}
      </div>
    </div>
  );
};

export default QuizOption;
