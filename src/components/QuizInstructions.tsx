import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatTime } from "@/lib/quizHelpers";
import { Quiz } from "@/types/quiz";
import { Loader2, Clock, Target, Brain, CheckSquare } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
        <Card className="max-w-2xl mx-auto p-6">
          <h2 className="text-2xl font-bold text-center mb-4">Quiz Not Found</h2>
          <p className="text-gray-600 text-center mb-6">
            Sorry, the quiz you're looking for couldn't be loaded.
          </p>
          <div className="flex justify-center">
            <Button onClick={() => navigate("/")}>Return to Home</Button>
          </div>
        </Card>
      </div>
    );
  }

  const timeLimit = quiz.timeLimit || quiz.questions.length * 60;
  const questionTypes = Array.from(new Set(quiz.questions.map((q) => q.type)));

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Instructions</h2>
          <p className="text-gray-600">{quiz.title}</p>
          <p className="text-sm text-gray-500 mt-1">{quiz.description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Time Management</h3>
                <p className="text-gray-600">
                  Total time: <span className="font-medium">{formatTime(timeLimit)}</span>
                  <br />
                  Recommended pace: {Math.ceil(timeLimit / quiz.questions.length / 60)} minutes per question
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Target className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Quiz Structure</h3>
                <p className="text-gray-600">
                  {quiz.questions.length} questions
                  <br />
                  Question types: {questionTypes.map((type) => type.replace("-", " ")).join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Brain className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Strategic Tips</h3>
                <ul className="text-gray-600 list-disc ml-4 space-y-1">
                  <li>Read each question carefully before answering</li>
                  <li>Look for key words in questions</li>
                  <li>Use the scratch pad for calculations</li>
                  <li>Review your answers if time permits</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckSquare className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Scoring</h3>
                <p className="text-gray-600">
                  Points per question vary by difficulty
                  <br />
                  No penalty for incorrect answers
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-lg text-blue-800 mb-2">Subject-Specific Tips</h3>
          <div className="text-blue-700">
            {quiz.id.includes("maths") && (
              <ul className="list-disc ml-4 space-y-1">
                <li>Show all your working out in the scratch pad</li>
                <li>Check units in word problems</li>
                <li>Draw diagrams for geometry questions</li>
                <li>Verify your answers make logical sense</li>
              </ul>
            )}
            {quiz.id.includes("english") && (
              <ul className="list-disc ml-4 space-y-1">
                <li>Read passages thoroughly before answering</li>
                <li>Look for context clues in comprehension</li>
                <li>Consider tone and purpose in analysis</li>
                <li>Use evidence to support your answers</li>
              </ul>
            )}
            {quiz.id.includes("science") && (
              <ul className="list-disc ml-4 space-y-1">
                <li>Pay attention to units in calculations</li>
                <li>Consider cause and effect relationships</li>
                <li>Apply scientific principles to scenarios</li>
                <li>Analyze data and graphs carefully</li>
              </ul>
            )}
            {quiz.id.includes("accounting") && (
              <ul className="list-disc ml-4 space-y-1">
                <li>Check your calculations twice</li>
                <li>Consider the accounting period</li>
                <li>Apply accounting principles consistently</li>
                <li>Watch for adjusting entries</li>
              </ul>
            )}
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 mb-8">
          <h3 className="font-semibold text-lg text-yellow-800 mb-2">Important Notes</h3>
          <ul className="list-disc ml-4 space-y-1 text-yellow-700">
            <li>Timer starts immediately when you begin</li>
            <li>Quiz cannot be paused once started</li>
            <li>All answers are final once submitted</li>
            <li>Use the "Need a Hint" button if stuck</li>
          </ul>
        </div>

        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            className="text-gray-700"
            onClick={() => navigate("/")}
          >
            Back to Subjects
          </Button>

          <Button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 px-8"
          >
            Begin Quiz
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default QuizInstructions;
