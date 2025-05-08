import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { MultipleChoiceQuestion as MCQuestion } from "@/types/quiz";

interface Props {
  question: MCQuestion;
  selectedAnswer: number | null;
  onAnswerSelected: (answer: number) => void;
  showResults: boolean;
}

export const MultipleChoiceQuestion: React.FC<Props> = ({
  question,
  selectedAnswer,
  onAnswerSelected,
  showResults,
}) => {
  return (
    <RadioGroup value={selectedAnswer?.toString()} disabled={showResults}>
      {question.options.map((option, index) => {
        const isCorrect = index === question.correctAnswer;
        const isSelected = selectedAnswer === index;
        
        let optionClasses = "p-4 border border-gray-200 rounded-md mb-2 relative transition-all hover:bg-gray-50";
        
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
          <div key={index} className={optionClasses}>
            <div className="flex items-center gap-3">
              <div className="relative flex items-center">
                <RadioGroupItem 
                  id={`q${question.id}-option${index}`} 
                  value={index.toString()}
                  onClick={() => !showResults && onAnswerSelected(index)}
                />
              </div>
              <Label 
                htmlFor={`q${question.id}-option${index}`}
                className="flex-1 text-base cursor-pointer py-1 select-none"
              >
                {option}
              </Label>
            </div>
            
            {showResults && isSelected && (
              <div className={cn(
                "mt-2 text-sm p-2 rounded",
                isCorrect ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
              )}>
                <span className="font-medium">{isCorrect ? "Correct!" : "Incorrect."}</span>
                {!isCorrect && (
                  <span> The correct answer is: {question.options[question.correctAnswer]}.</span>
                )}
                {question.explanation && (
                  <div className="mt-1">{question.explanation}</div>
                )}
              </div>
            )}
            
            {showResults && isCorrect && !isSelected && (
              <div className="mt-2 text-sm text-green-700 bg-green-50 p-2 rounded">
                <span className="font-medium">This was the correct answer.</span>
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