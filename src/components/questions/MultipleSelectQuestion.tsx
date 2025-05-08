import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { MultipleSelectQuestion as MSQuestion } from "@/types/quiz";

interface Props {
  question: MSQuestion;
  selectedAnswers: number[];
  onAnswerSelected: (answers: number[]) => void;
  showResults: boolean;
}

export const MultipleSelectQuestion: React.FC<Props> = ({
  question,
  selectedAnswers,
  onAnswerSelected,
  showResults,
}) => {
  const handleToggle = (index: number) => {
    if (showResults) return;
    
    const newAnswers = selectedAnswers.includes(index)
      ? selectedAnswers.filter(i => i !== index)
      : [...selectedAnswers, index];
    
    onAnswerSelected(newAnswers);
  };

  return (
    <div className="space-y-2">
      {question.options.map((option, index) => {
        const isCorrect = question.correctAnswers.includes(index);
        const isSelected = selectedAnswers.includes(index);
        
        let optionClasses = "p-4 border border-gray-200 rounded-md relative transition-all";
        
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
            <div className="flex items-start gap-2">
              <Checkbox
                id={`q${question.id}-option${index}`}
                checked={isSelected}
                onCheckedChange={() => handleToggle(index)}
                disabled={showResults}
              />
              <Label 
                htmlFor={`q${question.id}-option${index}`}
                className="text-base cursor-pointer flex-1"
              >
                {option}
              </Label>
            </div>
          </div>
        );
      })}
      
      {showResults && (
        <div className={cn(
          "mt-4 text-sm p-3 rounded",
          selectedAnswers.length === question.correctAnswers.length &&
          selectedAnswers.every(a => question.correctAnswers.includes(a))
            ? "text-green-700 bg-green-50"
            : "text-red-700 bg-red-50"
        )}>
          <span className="font-medium">
            {selectedAnswers.length === question.correctAnswers.length &&
             selectedAnswers.every(a => question.correctAnswers.includes(a))
              ? "Correct!"
              : "Incorrect."}
          </span>
          {!(selectedAnswers.length === question.correctAnswers.length &&
             selectedAnswers.every(a => question.correctAnswers.includes(a))) && (
            <div>
              The correct answers are:
              <ul className="list-disc ml-4 mt-1">
                {question.correctAnswers.map(index => (
                  <li key={index}>{question.options[index]}</li>
                ))}
              </ul>
            </div>
          )}
          {question.explanation && (
            <div className="mt-2">{question.explanation}</div>
          )}
        </div>
      )}
    </div>
  );
};