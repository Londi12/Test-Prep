import React from "react";
import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const progress = (current / total) * 100;
  
  return (
    <div className="w-full fade-in">
      <div className="flex justify-between text-sm text-gray-600 mb-1">
        <span className="transition-all duration-300 ease-in-out">{`Question ${current} of ${total}`}</span>
        <span className="transition-all duration-300 ease-in-out font-medium text-blue-600">
          {Math.round(progress)}% complete
        </span>
      </div>
      <Progress 
        value={progress} 
        className="h-2 transition-all duration-500 ease-in-out"
      />
    </div>
  );
};

export default ProgressBar;
