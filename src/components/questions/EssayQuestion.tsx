import React from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { EssayQuestion as EQuestion } from "@/types/quiz";

interface Props {
  question: EQuestion;
  selectedAnswer: string | null;
  onAnswerSelected: (answer: string) => void;
  showResults: boolean;
}

export const EssayQuestion: React.FC<Props> = ({
  question,
  selectedAnswer,
  onAnswerSelected,
  showResults,
}) => {
  const wordCount = selectedAnswer?.split(/\s+/).filter(Boolean).length || 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!showResults) {
      onAnswerSelected(e.target.value);
    }
  };

  // Check for keywords in the answer
  const keywords = question.markingCriteria?.map(c => c.toLowerCase()) || [];
  const answerText = selectedAnswer?.toLowerCase() || '';
  const foundKeywords = keywords.filter(kw => answerText.includes(kw));
  const hasKeywords = keywords.length === 0 || foundKeywords.length > 0;

  // Check word count requirements
  const meetsWordLimit = !question.wordLimit || wordCount >= question.wordLimit * 0.8;
  const wordLimitClass = showResults ? (meetsWordLimit ? "text-green-600" : "text-red-600") : "text-gray-600";

  return (
    <div className="space-y-4">
      {question.wordLimit && (
        <div className={cn("text-sm flex justify-between", wordLimitClass)}>
          <span>Word limit: {question.wordLimit} words</span>
          <span>({wordCount}/{question.wordLimit} words used)</span>
        </div>
      )}
      
      <Textarea
        placeholder="Write your answer here..."
        value={selectedAnswer || ""}
        onChange={handleChange}
        disabled={showResults}
        rows={8}
        className={cn(
          "w-full min-h-[200px] p-4",
          showResults && !meetsWordLimit && "border-red-500"
        )}
      />
      
      {question.markingCriteria && (
        <div className="mt-4 space-y-2">
          <h4 className="font-medium text-gray-700">Marking Criteria:</h4>
          <ul className="list-disc ml-4 space-y-1">
            {question.markingCriteria.map((criterion, index) => {
              const isFound = answerText.includes(criterion.toLowerCase());
              return (
                <li key={index} className={cn(
                  showResults && (isFound ? "text-green-600" : "text-red-600")
                )}>
                  {criterion}
                  {showResults && (isFound ? " ✓" : " ✗")}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      
      {showResults && (
        <div className="mt-4 space-y-4">
          {question.sampleAnswer && (
            <div className="text-gray-700">
              <h4 className="font-medium mb-2">Sample Answer:</h4>
              <div className="p-4 bg-gray-50 rounded-md">
                {question.sampleAnswer}
              </div>
            </div>
          )}
          
          {question.explanation && (
            <div className="text-gray-700">
              <h4 className="font-medium mb-2">Additional Notes:</h4>
              <div>{question.explanation}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};