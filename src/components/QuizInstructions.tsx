
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/quizHelpers";
import { Quiz } from "@/types/quiz";
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

  // Default time limit if not specified
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
              This quiz contains <span className="font-medium">{quiz.questions.length} multiple-choice questions</span>.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 py-2">
            <h3 className="font-semibold text-lg">Scoring</h3>
            <p>
              Each correct answer is worth <span className="font-medium">1 point</span>. No points are deducted for incorrect answers.
            </p>
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
