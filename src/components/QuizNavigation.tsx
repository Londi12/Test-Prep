
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
  onSubmit: () => void;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  onNext,
  onPrev,
  onSubmit,
}) => {
  const isLastQuestion = currentQuestion === totalQuestions - 1;
  
  return (
    <div className="flex justify-between items-center">
      <Button 
        variant="outline" 
        onClick={onPrev}
        disabled={currentQuestion === 0}
        className="flex items-center"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Previous
      </Button>
      
      <div>
        {isLastQuestion ? (
          <Button 
            onClick={onSubmit}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          >
            Submit Quiz
          </Button>
        ) : (
          <Button 
            onClick={onNext}
            className="flex items-center"
          >
            Next
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default QuizNavigation;
