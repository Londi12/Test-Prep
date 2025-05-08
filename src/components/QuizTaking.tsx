import React from "react";
import QuizOption from "@/components/QuizOption";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import QuizNavigation from "@/components/QuizNavigation";
import QuizQuestion from "@/components/QuizQuestion";
import Calculator from "@/components/Calculator";
import { Card, CardContent } from "@/components/ui/card";
import { Quiz } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { LightbulbIcon } from "lucide-react";

interface QuizTakingProps {
  quiz: Quiz;
  currentQuestion: number;
  answers: any[];
  timeRemaining: number;
  isQuizStarted: boolean;
  isQuizComplete: boolean;
  onSelectAnswer: (questionIndex: number, answerValue: any) => void;
  onGoToNext: () => void;
  onGoToPrev: () => void;
  onSubmit: () => void;
  onTimeUp: () => void;
}

const QuizTaking: React.FC<QuizTakingProps> = ({
  quiz,
  currentQuestion,
  answers,
  timeRemaining,
  isQuizStarted,
  isQuizComplete,
  onSelectAnswer,
  onGoToNext,
  onGoToPrev,
  onSubmit,
  onTimeUp
}) => {
  const [showHint, setShowHint] = React.useState(false);
  
  // Current question data
  const question = quiz.questions[currentQuestion];
  const isMathQuiz = quiz.id.startsWith('maths-');

  // Generate hint based on question type and content
  const getHint = () => {
    const q = question;
    switch (q.type) {
      case 'multiple-choice':
      case 'multiple-select':
        return "Look carefully at each option. Eliminate choices that are clearly wrong, then analyze the remaining options based on the context provided.";
      case 'matching':
        return "Start with the matches you're most confident about. Look for key terms or relationships between items.";
      case 'true-false':
        return "Analyze the statement carefully. Look for absolute terms like 'always' or 'never' which often indicate false statements.";
      case 'short-answer':
        return "Consider the key concepts mentioned in the question. Think about related terms and definitions.";
      case 'essay':
        return q.markingCriteria ? 
          "Focus on addressing these key points: " + q.markingCriteria.join(", ") :
          "Structure your response with a clear introduction, body paragraphs, and conclusion.";
      case 'fill-blanks':
        return "Read the entire sentence first. Consider what type of word (noun, verb, etc.) would make sense in each blank.";
      default:
        return "Read the question carefully and consider all information provided in the context.";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Timer and Progress Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-md rounded-lg p-4 mb-6">
        <div className="flex justify-between items-center mb-3">
          <div className="font-semibold text-gray-800">{quiz.title}</div>
          <Timer 
            initialTime={timeRemaining} 
            onTimeUp={onTimeUp} 
            isPaused={!isQuizStarted || isQuizComplete} 
          />
        </div>
        
        <ProgressBar 
          current={currentQuestion + 1} 
          total={quiz.questions.length} 
        />
      </div>
      
      {/* Question Card */}
      <Card className="mb-6">
        <CardContent className="p-6 md:p-8">
          <div className="flex flex-col gap-4">
            <div className="w-full">
              <QuizQuestion
                question={question}
                selectedAnswer={answers[currentQuestion]}
                onAnswerSelected={(answer) => onSelectAnswer(currentQuestion, answer)}
                showResults={false}
              />
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                className="text-yellow-600 border-yellow-200 hover:bg-yellow-50 hover:text-yellow-700 transition-colors"
                onClick={() => setShowHint(!showHint)}
              >
                <span className="mr-2" role="img" aria-label="hint">💡</span>
                {showHint ? "Hide Hint" : "Show Hint"}
              </Button>
            </div>
            
            {showHint && (
              <div className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg shadow-sm">
                <p className="text-sm text-yellow-800 leading-relaxed">
                  <span className="font-semibold">Hint: </span>
                  {getHint()}
                </p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      {/* Navigation Buttons */}
      <QuizNavigation
        currentQuestion={currentQuestion}
        totalQuestions={quiz.questions.length}
        onNext={onGoToNext}
        onPrev={onGoToPrev}
        onSubmit={onSubmit}
      />

      {/* Calculator for math quizzes */}
      {isMathQuiz && <Calculator />}
    </div>
  );
};

export default QuizTaking;
