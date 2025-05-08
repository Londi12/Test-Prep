import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FillBlanksQuestion as FBQuestion } from "@/types/quiz";

interface Props {
  question: FBQuestion;
  selectedAnswers: string[];
  onAnswerSelected: (answers: string[]) => void;
  showResults: boolean;
}

export const FillBlanksQuestion: React.FC<Props> = ({
  question,
  selectedAnswers,
  onAnswerSelected,
  showResults,
}) => {
  const handleAnswerChange = (index: number, value: string) => {
    if (showResults) return;
    
    const newAnswers = [...selectedAnswers];
    newAnswers[index] = value;
    onAnswerSelected(newAnswers);
  };

  const blanksCount = (question.text.match(/___/g) || []).length;
  const textParts = question.text.split('___');

  // Ensure we have enough answers
  while (selectedAnswers.length < blanksCount) {
    selectedAnswers.push('');
  }

  return (
    <div className="space-y-4">
      <div className="leading-relaxed text-base">
        {textParts.map((part, index) => (
          <React.Fragment key={index}>
            <span>{part}</span>
            {index < textParts.length - 1 && (
              <Input
                type="text"
                value={selectedAnswers[index] || ''}
                onChange={(e) => handleAnswerChange(index, e.target.value)}
                disabled={showResults}
                className={cn(
                  "inline-block w-32 mx-1",
                  showResults && (
                    selectedAnswers[index]?.toLowerCase() === question.correctAnswers[index]?.toLowerCase()
                      ? "border-green-500"
                      : "border-red-500"
                  )
                )}
                placeholder="Type here"
                spellCheck="false"
                autoComplete="off"
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      {showResults && (
        <div className={cn(
          "mt-4 text-sm p-3 rounded",
          selectedAnswers.every((answer, i) => 
            answer.toLowerCase() === question.correctAnswers[i].toLowerCase()
          )
            ? "text-green-700 bg-green-50"
            : "text-red-700 bg-red-50"
        )}>
          <span className="font-medium">
            {selectedAnswers.every((answer, i) => 
              answer.toLowerCase() === question.correctAnswers[i].toLowerCase()
            )
              ? "Correct!"
              : "Incorrect."}
          </span>
          {!selectedAnswers.every((answer, i) => 
            answer.toLowerCase() === question.correctAnswers[i].toLowerCase()
          ) && (
            <div>
              The correct answers are:
              <ul className="list-disc ml-4 mt-1">
                {question.correctAnswers.map((answer, index) => (
                  <li key={index}>Blank {index + 1}: {answer}</li>
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