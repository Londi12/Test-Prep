import React from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ShortAnswerQuestion as SAQuestion } from "@/types/quiz";

interface Props {
  question: SAQuestion;
  selectedAnswer: string | null;
  onAnswerSelected: (answer: string) => void;
  showResults: boolean;
}

export const ShortAnswerQuestion: React.FC<Props> = ({
  question,
  selectedAnswer,
  onAnswerSelected,
  showResults,
}) => {
  const isCorrect = showResults && (
    selectedAnswer?.toLowerCase() === question.correctAnswer.toLowerCase() ||
    question.acceptableAnswers?.some(ans => 
      ans.toLowerCase() === selectedAnswer?.toLowerCase()
    )
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!showResults) {
      onAnswerSelected(e.target.value);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Type your answer here..."
        value={selectedAnswer || ""}
        onChange={handleChange}
        disabled={showResults}
        className={cn(
          "w-full",
          showResults && (isCorrect ? "border-green-500" : "border-red-500")
        )}
        aria-label="Answer input"
        aria-disabled={showResults}
        autoComplete="off"
      />
      
      {showResults && (
        <div className={cn(
          "mt-2 text-sm p-2 rounded",
          isCorrect ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"
        )}>
          <span className="font-medium">
            {isCorrect ? "Correct!" : "Incorrect."}
          </span>
          {!isCorrect && (
            <span> The correct answer is: {question.correctAnswer}</span>
          )}
          {question.explanation && (
            <div className="mt-1">{question.explanation}</div>
          )}
        </div>
      )}
    </div>
  );
};