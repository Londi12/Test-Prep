import React from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { MatchingQuestion as MQuestion } from "@/types/quiz";

interface Props {
  question: MQuestion;
  selectedAnswers: Array<[number, number]>;
  onAnswerSelected: (answers: Array<[number, number]>) => void;
  showResults: boolean;
}

export const MatchingQuestion: React.FC<Props> = ({
  question,
  selectedAnswers,
  onAnswerSelected,
  showResults,
}) => {
  const handleMatch = (itemIndex: number, matchIndex: number) => {
    if (showResults) return;
    
    const newAnswers = selectedAnswers.filter(([i]) => i !== itemIndex);
    newAnswers.push([itemIndex, matchIndex]);
    onAnswerSelected(newAnswers);
  };

  const getMatchForItem = (itemIndex: number) => {
    const pair = selectedAnswers.find(([i]) => i === itemIndex);
    return pair ? pair[1] : undefined;
  };

  return (
    <div className="space-y-4">
      {question.items.map((item, itemIndex) => {
        const selectedMatch = getMatchForItem(itemIndex);
        const isCorrect = question.correctPairs.some(
          ([i, m]) => i === itemIndex && m === selectedMatch
        );
        
        return (
          <div key={itemIndex} className="flex items-center gap-4">
            <div className="flex-1 p-3 border rounded-md bg-gray-50">
              {item}
            </div>
            <div className="w-48">
              <Select
                value={selectedMatch?.toString()}
                onValueChange={(value) => handleMatch(itemIndex, parseInt(value))}
                disabled={showResults}
              >
                <SelectTrigger className={cn(
                  showResults && (isCorrect ? "border-green-500" : "border-red-500")
                )}>
                  <SelectValue placeholder="Select match..." />
                </SelectTrigger>
                <SelectContent>
                  {question.matches.map((match, matchIndex) => (
                    <SelectItem 
                      key={matchIndex} 
                      value={matchIndex.toString()}
                    >
                      {match}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        );
      })}
      
      {showResults && (
        <div className={cn(
          "mt-4 text-sm p-3 rounded",
          selectedAnswers.length === question.correctPairs.length &&
          selectedAnswers.every(([i, m]) => 
            question.correctPairs.some(([ci, cm]) => ci === i && cm === m)
          )
            ? "text-green-700 bg-green-50"
            : "text-red-700 bg-red-50"
        )}>
          <span className="font-medium">
            {selectedAnswers.length === question.correctPairs.length &&
             selectedAnswers.every(([i, m]) => 
               question.correctPairs.some(([ci, cm]) => ci === i && cm === m)
             )
              ? "Correct!"
              : "Incorrect."}
          </span>
          {!(selectedAnswers.length === question.correctPairs.length &&
             selectedAnswers.every(([i, m]) => 
               question.correctPairs.some(([ci, cm]) => ci === i && cm === m)
             )) && (
            <div>
              The correct matches are:
              <ul className="list-disc ml-4 mt-1">
                {question.correctPairs.map(([itemIndex, matchIndex]) => (
                  <li key={`${itemIndex}-${matchIndex}`}>
                    {question.items[itemIndex]} → {question.matches[matchIndex]}
                  </li>
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