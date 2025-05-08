import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/quizHelpers";
import { Quiz, Question } from "@/types/quiz";
import { Loader2 } from "lucide-react";

interface QuizInstructionsProps {
  quiz: Quiz | null;
  loading: boolean;
  onStartQuiz: () => void;
}

const QuizInstructions: React.FC<QuizInstructionsProps> = ({
  quiz,
  loading,
  onStartQuiz,
}) => {
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
        <span className="ml-2 text-blue-600">Loading quiz data...</span>
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Quiz Not Found</h2>
          <p className="text-gray-600 text-center mb-6">
            Sorry, the quiz you're looking for couldn't be loaded.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => navigate("/")}>Return to Home</Button>
          </div>
        </div>
      </div>
    );
  }

  // Get counts of each question type
  const questionTypes = quiz.questions.reduce((acc, q) => {
    acc[q.type] = (acc[q.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const timeLimit = quiz.timeLimit || quiz.questions.length * 60;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Instructions</h2>
          <p className="text-gray-600">{quiz.title}</p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">Time Limit</h3>
            <p>
              You have <span className="font-medium">{formatTime(timeLimit)}</span> to complete this quiz.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">Questions</h3>
            <p>
              This quiz contains <span className="font-medium">{quiz.questions.length} questions</span>:
            </p>
            <ul className="mt-2 space-y-1">
              {Object.entries(questionTypes).map(([type, count]) => (
                <li key={type} className="text-gray-700">
                  • {count} {type.replace('-', ' ')} question{count > 1 ? 's' : ''}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">Question Types</h3>
            <div className="space-y-3 mt-2">
              {questionTypes['multiple-choice'] && (
                <p>
                  <span className="font-medium">Multiple Choice:</span> Select one correct answer from the given options.
                </p>
              )}
              {questionTypes['true-false'] && (
                <p>
                  <span className="font-medium">True/False:</span> Select whether the statement is true or false.
                </p>
              )}
              {questionTypes['short-answer'] && (
                <p>
                  <span className="font-medium">Short Answer:</span> Type a brief response to the question.
                </p>
              )}
              {questionTypes['essay'] && (
                <p>
                  <span className="font-medium">Essay:</span> Write a detailed response. Pay attention to any word limits.
                </p>
              )}
              {questionTypes['fill-blank'] && (
                <p>
                  <span className="font-medium">Fill in the Blanks:</span> Complete the sentence by filling in the missing words.
                </p>
              )}
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">Scoring</h3>
            <div className="space-y-2">
              <p>
                • Multiple choice and true/false questions are automatically scored
              </p>
              <p>
                • Short answer questions are checked against accepted answers
              </p>
              {questionTypes['essay'] && (
                <p>
                  • Essay questions may be manually reviewed
                </p>
              )}
              <p>
                • No points are deducted for incorrect answers
              </p>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">Navigation</h3>
            <p>Use the Next and Previous buttons to navigate between questions.</p>
          </div>

          <div className="border-l-4 border-yellow-500 pl-4 py-2 bg-yellow-50">
            <h3 className="font-semibold text-lg text-yellow-700">Important</h3>
            <p className="text-yellow-700">
              The timer will start as soon as you begin the quiz. You cannot pause the quiz once started.
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-between">
          <Button 
            variant="outline" 
            className="text-gray-700"
            onClick={() => navigate("/")}
          >
            Back to Subjects
          </Button>
          <Button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900"
          >
            Begin Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuizInstructions;
