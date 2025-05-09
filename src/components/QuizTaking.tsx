import React, { useState, Suspense } from "react";
import QuizOption from "@/components/QuizOption";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import QuizNavigation from "@/components/QuizNavigation";
import QuizQuestion from "@/components/QuizQuestion";
import Calculator from "@/components/Calculator";
import { Card, CardContent } from "@/components/ui/card";
import { Quiz } from "@/types/quiz";
import { Button } from "@/components/ui/button";
import { LightbulbIcon, PencilIcon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EditableMathField = React.lazy(() => import('react-mathquill').then(module => ({ default: module.EditableMathField })));

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
  const [showHint, setShowHint] = useState(false);
  const [showScratchPad, setShowScratchPad] = useState(false);
  const [scratchPadContent, setScratchPadContent] = useState("");
  const [mathInput, setMathInput] = useState("");

  // Current question data
  const question = quiz.questions[currentQuestion];
  const isMathQuiz = quiz.id.startsWith('maths-');
  const requiresMathInput = isMathQuiz || question.type === 'short-answer';

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
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <QuizQuestion
                  question={question}
                  selectedAnswer={answers[currentQuestion]}
                  onAnswerSelected={(answer) => onSelectAnswer(currentQuestion, answer)}
                  showResults={false}
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className={`hint-button flex items-center gap-2 ${showHint ? 'bg-blue-50' : ''}`}
                  onClick={() => setShowHint(!showHint)}
                >
                  <LightbulbIcon className={`w-5 h-5 ${showHint ? 'text-yellow-500' : 'text-blue-500'}`} />
                  {showHint ? "Hide Hint" : "Need a Hint?"}
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className={`flex items-center gap-2 ${showScratchPad ? 'bg-gray-100' : ''}`}
                  onClick={() => setShowScratchPad(!showScratchPad)}
                >
                  <PencilIcon className="w-4 h-4" />
                  {showScratchPad ? "Hide Workspace" : "Show Workspace"}
                </Button>
              </div>
            </div>

            {showHint && (
              <div className="hint-panel">
                <div className="flex items-start gap-2">
                  <LightbulbIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <p className="text-blue-800 leading-relaxed">{getHint()}</p>
                </div>
              </div>
            )}

            {showScratchPad && (
              <div className="space-y-4">
                <Tabs defaultValue="notes" className="w-full">
                  <TabsList>
                    <TabsTrigger value="notes">Notes</TabsTrigger>
                    {requiresMathInput && <TabsTrigger value="math">Math Input</TabsTrigger>}
                  </TabsList>
                  
                  <TabsContent value="notes">
                    <Textarea
                      placeholder="Use this space for your calculations and notes..."
                      value={scratchPadContent}
                      onChange={(e) => setScratchPadContent(e.target.value)}
                      className="scratch-pad font-mono"
                    />
                  </TabsContent>
                  
                  {requiresMathInput && (
                    <TabsContent value="math">
                      <div className="space-y-4">
                        <Suspense fallback={<div>Loading Math Input...</div>}>
                          <EditableMathField
                            latex={mathInput}
                            onChange={(mathField: any) => {
                              setMathInput(mathField.latex());
                            }}
                            config={{
                              spaceBehavesLikeTab: true,
                              leftRightIntoCmdGoes: 'up',
                              restrictMismatchedBrackets: true,
                              autoCommands: 'pi theta sqrt sum prod alpha beta gamma',
                              autoOperatorNames: 'sin cos tan'
                            }}
                          />
                        </Suspense>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => {
                            const answer = answers[currentQuestion] || '';
                            onSelectAnswer(currentQuestion, answer + mathInput);
                          }}
                        >
                          Insert Math
                        </Button>
                      </div>
                    </TabsContent>
                  )}
                </Tabs>
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
