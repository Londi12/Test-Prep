import React from "react";
import { QuizResult } from "../types/quiz";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { getQuizById } from "@/data/quizzes";
import { getPerformanceFeedback } from "@/lib/quizHelpers";
import { CheckCircle2, XCircle, AlertCircle, BookOpen, TrendingUp, Target } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface QuizResultsProps {
  result: QuizResult;
  onTryAgain: () => void;
  onBackToSubject: () => void;
  quizTitle?: string;
}

const QuizResults: React.FC<QuizResultsProps> = ({ 
  result, 
  onTryAgain, 
  onBackToSubject,
  quizTitle = "Quiz"
}) => {
  const { subject, paper, number } = useParams();
  const navigate = useNavigate();
  const { user, addQuizResult } = useAuth();
  const [resultSaved, setResultSaved] = React.useState(false);
  const [scrollHeight, setScrollHeight] = React.useState(500);
  
  const baseQuizId = `${subject}-${paper}`.toLowerCase();
  const quizId = number ? `${baseQuizId}-quiz${number}` : baseQuizId;
  const quiz = getQuizById(quizId);

  React.useEffect(() => {
    if (!quiz) {
      toast.error("Quiz data not found");
      navigate("/");
      return;
    }
  }, [quiz, navigate]);

  React.useEffect(() => {
    if (user && !resultSaved && quiz) {
      addQuizResult({
        quizId,
        quizTitle: quiz.title,
        subject: subject || "General",
        score: result.correctAnswers,
        percentage: result.percentage,
        totalQuestions: result.totalQuestions,
        correctAnswers: result.correctAnswers
      });
      setResultSaved(true);
    }
  }, [user, result, addQuizResult, resultSaved, subject, quiz, quizId]);

  if (!quiz) {
    return (
      <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
        <div className="text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mt-4 text-2xl font-bold text-red-700">Quiz Data Not Found</h2>
          <p className="mt-2 text-gray-600">We couldn't load the quiz data. Please try again.</p>
          <Button 
            onClick={onBackToSubject}
            className="mt-6"
          >
            Back to Subjects
          </Button>
        </div>
      </div>
    );
  }

  // Calculate topic-specific performance
  const topicPerformance = quiz.questions.reduce((acc, question, index) => {
    const topic = question.topic || 'General';
    if (!acc[topic]) {
      acc[topic] = { correct: 0, total: 0 };
    }
    acc[topic].total++;
    if (result.answers[index].isCorrect) {
      acc[topic].correct++;
    }
    return acc;
  }, {} as Record<string, { correct: number; total: number }>);

  // Generate learning recommendations
  const getLearningRecommendations = () => {
    const recommendations = [];
    
    // Subject-specific recommendations
    if (subject?.includes('maths')) {
      if (result.percentage < 70) {
        recommendations.push("Review fundamental concepts and practice basic problem-solving");
      }
      recommendations.push("Work through example problems step-by-step");
      recommendations.push("Practice with different question types, especially word problems");
    }
    else if (subject?.includes('english')) {
      recommendations.push("Read extensively to improve comprehension");
      recommendations.push("Practice analyzing different text types");
      if (result.percentage < 70) {
        recommendations.push("Focus on understanding question keywords and requirements");
      }
    }
    else if (subject?.includes('science')) {
      recommendations.push("Link theoretical concepts to practical applications");
      if (result.percentage < 70) {
        recommendations.push("Review core principles and terminology");
      }
      recommendations.push("Practice interpreting data and graphs");
    }
    else if (subject?.includes('accounting')) {
      recommendations.push("Practice with different types of financial statements");
      if (result.percentage < 70) {
        recommendations.push("Review basic accounting principles and concepts");
      }
      recommendations.push("Work on speed and accuracy in calculations");
    }

    return recommendations;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      <Tabs defaultValue="summary" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="summary">Performance Summary</TabsTrigger>
          <TabsTrigger value="analysis">Detailed Analysis</TabsTrigger>
          <TabsTrigger value="improvement">Improvement Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="space-y-6">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Quiz Results</h2>
            <p className="text-gray-600 mb-6">{quiz.title}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Overall Score</h3>
                <p className="text-4xl font-bold mb-2">{result.percentage}%</p>
                <Progress value={result.percentage} className="h-3 rounded-full" />
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Questions</h3>
                <p className="text-4xl font-bold">
                  {result.correctAnswers}/{result.totalQuestions}
                </p>
                <p className="text-sm text-gray-600 mt-2">Correct Answers</p>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <p className="text-lg font-medium">{getPerformanceFeedback(result.percentage)}</p>
              </Card>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Topic Performance</h3>
            {Object.entries(topicPerformance).map(([topic, { correct, total }]) => {
              const percentage = (correct / total) * 100;
              return (
                <div key={topic} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{topic}</span>
                    <span className="text-sm text-gray-600">{correct}/{total} correct</span>
                  </div>
                  <Progress value={percentage} className="h-2" />
                </div>
              );
            })}
          </div>
        </TabsContent>

        <TabsContent value="analysis">
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold">Question Analysis</h3>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Adjust view height</span>
                <Slider
                  value={[scrollHeight]}
                  onValueChange={([value]) => setScrollHeight(value)}
                  min={300}
                  max={800}
                  step={50}
                  className="w-[200px]"
                />
              </div>
            </div>

            <ScrollArea className="rounded-md border" style={{ height: scrollHeight }}>
              {quiz.questions.map((question, index) => {
                const userAnswer = result.answers[index];
                const isCorrect = userAnswer.isCorrect;
                
                return (
                  <div key={question.id} className="p-4 border-b last:border-b-0">
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      )}
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-lg font-medium">Question {index + 1}</h4>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {isCorrect ? 'Correct' : 'Incorrect'}
                          </span>
                        </div>
                        
                        <p className="text-gray-800 mb-4">{question.question}</p>
                        
                        <div className="bg-gray-50 p-4 rounded-md">
                          {/* Question-specific feedback based on type */}
                          {renderAnswerAnalysis(question, userAnswer)}
                          
                          {/* Explanation */}
                          {question.explanation && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <p className="font-medium mb-2">Explanation:</p>
                              <p className="text-gray-700">{question.explanation}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollArea>
          </div>
        </TabsContent>

        <TabsContent value="improvement" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <Target className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Areas for Improvement</h3>
                  <ul className="space-y-2 text-gray-700">
                    {Object.entries(topicPerformance)
                      .filter(([_, { correct, total }]) => (correct / total) < 0.7)
                      .map(([topic]) => (
                        <li key={topic} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          {topic}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-3 mb-4">
                <BookOpen className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Learning Recommendations</h3>
                  <ul className="space-y-2 text-gray-700">
                    {getLearningRecommendations().map((rec, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Next Steps</h3>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Based on your performance, we recommend:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Review incorrect answers and their explanations
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Focus practice on identified weak areas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Take similar quizzes to reinforce learning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      <Separator className="my-8" />

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onTryAgain} 
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8"
        >
          Try Again
        </Button>
        
        <Button 
          onClick={onBackToSubject}
          variant="outline" 
          className="border-blue-500 text-blue-700 hover:bg-blue-50 rounded-full px-8"
        >
          Back to Subject
        </Button>
      </div>
      
      {!user && (
        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-center">
          <p className="text-blue-800 mb-2">Create an account to track your progress!</p>
          <Button 
            variant="outline" 
            onClick={() => navigate("/register")}
            className="text-blue-700 border-blue-500"
          >
            Sign Up Now
          </Button>
        </div>
      )}
    </div>
  );
};

// Helper function to render answer analysis based on question type
const renderAnswerAnalysis = (question: any, userAnswer: any) => {
  switch (question.type) {
    case 'multiple-choice':
      return (
        <>
          <p className="font-medium mb-2">Your answer:</p>
          <p className={userAnswer.isCorrect ? 'text-green-600' : 'text-red-600'}>
            {userAnswer.answer !== null ? question.options[userAnswer.answer] : '(No answer provided)'}
          </p>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct answer:</p>
              <p className="text-green-600">{question.options[question.correctAnswer]}</p>
            </>
          )}
        </>
      );

    case 'multiple-select':
      return (
        <>
          <p className="font-medium mb-2">Your selections:</p>
          <ul className="list-disc ml-5 space-y-1">
            {Array.isArray(userAnswer?.answer) && userAnswer.answer.length > 0 ? (
              userAnswer.answer.map((idx: number) => (
                <li key={idx} className={
                  question.correctAnswers.includes(idx) ? 'text-green-600' : 'text-red-600'
                }>
                  {question.options[idx]}
                </li>
              ))
            ) : (
              <li className="text-red-600">(No answer provided)</li>
            )}
          </ul>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct selections:</p>
              <ul className="list-disc ml-5 space-y-1">
                {question.correctAnswers.map((idx: number) => (
                  <li key={idx} className="text-green-600">
                    {question.options[idx]}
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      );

    case 'true-false':
      return (
        <>
          <p className="font-medium mb-2">Your answer:</p>
          <p className={userAnswer.isCorrect ? 'text-green-600' : 'text-red-600'}>
            {userAnswer.answer !== null ? (userAnswer.answer ? 'True' : 'False') : '(No answer provided)'}
          </p>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct answer:</p>
              <p className="text-green-600">{question.correctAnswer ? 'True' : 'False'}</p>
            </>
          )}
        </>
      );

    case 'short-answer':
      return (
        <>
          <p className="font-medium mb-2">Your answer:</p>
          <p className={userAnswer.isCorrect ? 'text-green-600' : 'text-red-600'}>
            {userAnswer.answer || '(No answer provided)'}
          </p>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct answer:</p>
              <p className="text-green-600">{question.correctAnswer}</p>
              {question.acceptableAnswers && question.acceptableAnswers.length > 0 && (
                <>
                  <p className="font-medium mt-3 mb-2">Also acceptable:</p>
                  <ul className="list-disc ml-5 space-y-1">
                    {question.acceptableAnswers.map((answer: string, idx: number) => (
                      <li key={idx} className="text-green-600">{answer}</li>
                    ))}
                  </ul>
                </>
              )}
            </>
          )}
        </>
      );

    case 'matching':
      return (
        <>
          <p className="font-medium mb-2">Your matches:</p>
          <div className="space-y-2">
            {Array.isArray(userAnswer?.answer) && userAnswer.answer.length > 0 ? (
              userAnswer.answer.map(([itemIndex, matchIndex]: [number, number]) => (
                <div key={itemIndex} className={
                  question.correctPairs.some(([ci, cm]) => ci === itemIndex && cm === matchIndex)
                    ? 'text-green-600'
                    : 'text-red-600'
                }>
                  {question.items[itemIndex]} → {question.matches[matchIndex]}
                </div>
              ))
            ) : (
              <div className="text-red-600">(No answer provided)</div>
            )}
          </div>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct matches:</p>
              <div className="space-y-2">
                {question.correctPairs.map(([itemIndex, matchIndex]: [number, number]) => (
                  <div key={`${itemIndex}-${matchIndex}`} className="text-green-600">
                    {question.items[itemIndex]} → {question.matches[matchIndex]}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      );

    case 'essay':
      return (
        <>
          <p className="font-medium mb-2">Your essay:</p>
          <div className="bg-white p-3 rounded border border-gray-200 mb-3">
            <p className="whitespace-pre-wrap">{userAnswer.answer || '(No answer provided)'}</p>
          </div>
          {question.markingCriteria && (
            <div className="mt-4">
              <p className="font-medium mb-2">Marking Criteria:</p>
              <ul className="list-disc ml-5 space-y-1">
                {question.markingCriteria.map((criterion: string, idx: number) => {
                  const isMet = userAnswer.answer && 
                    userAnswer.answer.toLowerCase().includes(criterion.toLowerCase());
                  return (
                    <li key={idx} className={isMet ? 'text-green-600' : 'text-red-600'}>
                      {criterion} {isMet ? '✓' : '✗'}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {question.sampleAnswer && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="font-medium mb-2">Sample Answer:</p>
              <div className="bg-white p-3 rounded border border-gray-200">
                <p className="whitespace-pre-wrap text-gray-700">{question.sampleAnswer}</p>
              </div>
            </div>
          )}
        </>
      );

    case 'fill-blanks':
      return (
        <>
          <p className="font-medium mb-2">Your answers:</p>
          <div className="space-y-2">
            {Array.isArray(userAnswer?.answer) && userAnswer.answer.length > 0 ? (
              userAnswer.answer.map((answer: string, idx: number) => (
                <div key={idx} className={
                  answer.toLowerCase() === question.correctAnswers[idx].toLowerCase()
                    ? 'text-green-600'
                    : 'text-red-600'
                }>
                  <span className="font-medium">Blank {idx + 1}:</span> {answer || '(No answer)'}
                </div>
              ))
            ) : (
              <div className="text-red-600">(No answer provided)</div>
            )}
          </div>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct answers:</p>
              <div className="space-y-2">
                {question.correctAnswers.map((answer: string, idx: number) => (
                  <div key={idx} className="text-green-600">
                    <span className="font-medium">Blank {idx + 1}:</span> {answer}
                  </div>
                ))}
              </div>
            </>
          )}
        </>
      );

    case 'math':
      return (
        <>
          <p className="font-medium mb-2">Your answer:</p>
          <div className="bg-white p-3 rounded border border-gray-200 font-mono">
            {userAnswer.answer?.latex || '(No answer provided)'}
          </div>
          {!userAnswer.isCorrect && (
            <>
              <p className="font-medium mt-3 mb-2">Correct answer:</p>
              <div className="bg-white p-3 rounded border border-gray-200 font-mono text-green-600">
                {question.correctAnswer}
              </div>
              {question.steps && (
                <div className="mt-4">
                  <p className="font-medium mb-2">Solution steps:</p>
                  <ol className="list-decimal ml-5 space-y-2">
                    {question.steps.map((step: { explanation: string; math?: string }, idx: number) => (
                      <li key={idx}>
                        <p>{step.explanation}</p>
                        {step.math && (
                          <div className="bg-white p-2 rounded border border-gray-200 font-mono mt-1">
                            {step.math}
                          </div>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </>
          )}
        </>
      );

    default:
      return null;
  }
};

export default QuizResults;
