import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { TrueFalseQuestion as TFQuestion } from "@/types/quiz";

interface Props {
  question: TFQuestion;
  selectedAnswer: boolean | null;
  onAnswerSelected: (answer: boolean) => void;
  showResults: boolean;
}

export const TrueFalseQuestion: React.FC<Props> = ({
  question,
  selectedAnswer,
  onAnswerSelected,
  showResults,
}) => {
  return (
    <RadioGroup 
      value={selectedAnswer === null ? undefined : selectedAnswer.toString()} 
      disabled={showResults}
    >
      {[true, false].map((value) => {
        const isCorrect = value === question.correctAnswer;
        const isSelected = value === selectedAnswer;
        
        let optionClasses = "p-4 border border-gray-200 rounded-md mb-2 relative transition-all";
        
        if (showResults) {
          if (isCorrect) {
            optionClasses = cn(optionClasses, "bg-green-50 border-green-200");
          } else if (isSelected && !isCorrect) {
            optionClasses = cn(optionClasses, "bg-red-50 border-red-200");
          }
        } else if (isSelected) {
          optionClasses = cn(optionClasses, "bg-blue-50 border-blue-300");
        }

        return (
          <div key={value.toString()} className={optionClasses}>
            <div className="flex items-start gap-2">
              <RadioGroupItem 
                id={`q${question.id}-option-${value}`} 
                value={value.toString()}
                onClick={() => !showResults && onAnswerSelected(value)}
                className="mt-1"
              />
              <Label 
                htmlFor={`q${question.id}-option-${value}`}
                className="text-base cursor-pointer flex-1"
              >
                {value ? "True" : "False"}
              </Label>
            </div>
            
            {showResults && isSelected && (
              <div className={cn(
                "mt-2 text-sm p-2 rounded",
                isCorrect ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
              )}>
                <span className="font-medium">{isCorrect ? "Correct!" : "Incorrect."}</span>
                {!isCorrect && (
                  <span> The correct answer is: {question.correctAnswer ? "True" : "False"}.</span>
                )}
                {question.explanation && (
                  <div className="mt-1">{question.explanation}</div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </RadioGroup>
  );
};