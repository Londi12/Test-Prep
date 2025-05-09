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
        "p-4 border rounded-lg cursor-pointer flex items-start gap-3",
        "transform transition-all duration-200 ease-in-out hover:scale-[1.02]",
        "animate-in fade-in-50 duration-300",
        isSelected 
          ? "bg-blue-50 border-blue-300 shadow-md" 
          : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
      )}
    >
      <div className={cn(
        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0",
        "transform transition-all duration-200",
        isSelected 
          ? "bg-blue-500 text-white scale-110" 
          : "bg-gray-100 text-gray-700"
      )}>
        {letter}
      </div>
      <div className={cn(
        "text-base pt-1",
        "transition-colors duration-200",
        isSelected ? "text-blue-700" : "text-gray-700"
      )}>
        {option}
      </div>
    </div>
  );
};

export default QuizOption;
