import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import QuizResults from "@/components/QuizResults";
import QuizInstructions from "@/components/QuizInstructions";
import QuizTaking from "@/components/QuizTaking";
import { getQuizById } from "@/data/quizzes";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { QuizResult } from "@/types/quiz";

const QuizPage = () => {
  const { subject, paper, number } = useParams();
  const navigate = useNavigate();
  const { user, addQuizResult } = useAuth();
  
  // Ensure paper parameter is in the correct format
  const formattedPaper = paper?.toLowerCase();
  
  // Construct the quiz ID to match the data structure
  const baseQuizId = `${subject}-${formattedPaper}`.toLowerCase();
  const quizId = number 
    ? `${baseQuizId}-quiz${number}`
    : baseQuizId;

  const quiz = getQuizById(quizId);
  
  const [answers, setAnswers] = useState<Array<any>>(
    quiz ? new Array(quiz.questions.length).fill(null) : []
  );
  const [currentStep, setCurrentStep] = useState<"intro" | "instructions" | "taking" | "results">("intro");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(quiz?.timeLimit || 0);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  useEffect(() => {
    if (!quiz) {
      toast.error("Quiz not found");
      navigate("/");
    }
    
    // Initialize answers array
    if (quiz) {
      setAnswers(new Array(quiz.questions.length).fill(null));
      setTimeRemaining(quiz.timeLimit || quiz.questions.length * 60);
    }
  }, [quiz, navigate]);

  const handleAnswerSelected = (questionIndex: number, answerValue: any) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answerValue;
    setAnswers(newAnswers);
  };

  const startQuiz = () => {
    setIsQuizStarted(true);
    setCurrentStep("taking");
    window.scrollTo(0, 0);
  };

  const handleBeginQuiz = () => {
    setCurrentStep("instructions");
    window.scrollTo(0, 0);
  };

  const goToNextQuestion = () => {
    if (currentQuestion < (quiz?.questions.length || 0) - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitQuiz = () => {
    if (!quiz) return;
    
    const unansweredQuestions = answers.filter(answer => {
      if (Array.isArray(answer)) {
        return answer.length === 0;
      }
      return answer === null;
    }).length;

    if (unansweredQuestions > 0) {
      toast.warning(`You have ${unansweredQuestions} unanswered question(s)`);
      return;
    }
    
    // Calculate results - handle different question types
    const correctAnswers = answers.reduce((count, answer, index) => {
      const question = quiz.questions[index];
      let isCorrect = false;

      switch (question.type) {
        case 'multiple-choice':
          isCorrect = answer === question.correctAnswer;
          break;
          
        case 'short-answer':
          isCorrect = answer?.toLowerCase() === question.correctAnswer.toLowerCase() ||
            question.acceptableAnswers?.some(ans => 
              ans.toLowerCase() === answer?.toLowerCase()
            );
          break;
          
        case 'true-false':
          isCorrect = answer === question.correctAnswer;
          break;
          
        case 'multiple-select':
          isCorrect = answer?.length === question.correctAnswers.length &&
            answer.every((a: number) => question.correctAnswers.includes(a));
          break;
          
        case 'matching':
          isCorrect = answer?.length === question.correctPairs.length &&
            answer.every(([i, m]: [number, number]) => 
              question.correctPairs.some(([ci, cm]) => ci === i && cm === m)
            );
          break;
          
        case 'essay':
          const wordCount = answer?.split(/\s+/).filter(Boolean).length || 0;
          const meetsWordLimit = !question.wordLimit || wordCount >= question.wordLimit * 0.8;
          // Basic validation - check if answer meets 80% of word limit and contains keywords if specified
          const keywords = question.markingCriteria?.map(c => c.toLowerCase()) || [];
          const answerText = answer?.toLowerCase() || '';
          const hasKeywords = keywords.length === 0 || keywords.some(kw => answerText.includes(kw));
          isCorrect = meetsWordLimit && hasKeywords;
          break;
          
        case 'fill-blanks':
          isCorrect = answer?.every((ans: string, i: number) => 
            ans.toLowerCase() === question.correctAnswers[i].toLowerCase()
          );
          break;
      }

      return count + (isCorrect ? (question.marks || 1) : 0);
    }, 0);
    
    const totalMarks = quiz.questions.reduce((sum, q) => sum + (q.marks || 1), 0);
    const percentage = Math.round((correctAnswers / totalMarks) * 100);
    
    const quizResult = {
      correctAnswers,
      totalQuestions: quiz.questions.length,
      percentage,
      answers: answers.map((answer, index) => {
        const question = quiz.questions[index];
        let isCorrect = false;

        switch (question.type) {
          case 'multiple-choice':
            isCorrect = answer === question.correctAnswer;
            break;
            
          case 'short-answer':
            isCorrect = answer?.toLowerCase() === question.correctAnswer.toLowerCase() ||
              question.acceptableAnswers?.some(ans => 
                ans.toLowerCase() === answer?.toLowerCase()
              );
            break;
            
          case 'true-false':
            isCorrect = answer === question.correctAnswer;
            break;
            
          case 'multiple-select':
            isCorrect = answer?.length === question.correctAnswers.length &&
              answer.every((a: number) => question.correctAnswers.includes(a));
            break;
            
          case 'matching':
            isCorrect = answer?.length === question.correctPairs.length &&
              answer.every(([i, m]: [number, number]) => 
                question.correctPairs.some(([ci, cm]) => ci === i && cm === m)
              );
            break;
            
          case 'essay':
            const wordCount = answer?.split(/\s+/).filter(Boolean).length || 0;
            const meetsWordLimit = !question.wordLimit || wordCount >= question.wordLimit * 0.8;
            const keywords = question.markingCriteria?.map(c => c.toLowerCase()) || [];
            const answerText = answer?.toLowerCase() || '';
            const hasKeywords = keywords.length === 0 || keywords.some(kw => answerText.includes(kw));
            isCorrect = meetsWordLimit && hasKeywords;
            break;

          case 'fill-blanks':
            isCorrect = answer?.every((ans: string, i: number) => 
              ans.toLowerCase() === question.correctAnswers[i].toLowerCase()
            );
            break;
        }

        return {
          questionId: question.id,
          answer,
          isCorrect
        };
      })
    };
    
    setResult(quizResult);

    if (user) {
      addQuizResult({
        quizId: quizId,
        quizTitle: quiz.title,
        subject: subject || "",
        score: correctAnswers,
        percentage,
        totalQuestions: quiz.questions.length,
        correctAnswers
      });
      toast.success("Quiz result saved to your profile!");
    } else {
      toast.info("Sign in to save your quiz results!");
    }
    
    setIsQuizComplete(true);
    setCurrentStep("results");
    window.scrollTo(0, 0);
  };

  const handleTimeUp = () => {
    handleSubmitQuiz();
    toast.info("Time's up! Your quiz has been submitted.");
  };

  const handleTryAgain = () => {
    setAnswers(new Array(quiz?.questions.length).fill(null));
    setCurrentQuestion(0);
    setCurrentStep("taking");
    setResult(null);
    setIsQuizComplete(false);
    setIsQuizStarted(true);
    setTimeRemaining(quiz?.timeLimit || quiz?.questions.length * 60);
    window.scrollTo(0, 0);
  };

  const handleBackToSubject = () => {
    navigate("/");
  };

  if (!quiz) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        {currentStep === "intro" && (
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl">{quiz.title}</CardTitle>
              <CardDescription className="text-lg">{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mb-6">
                <p className="mb-2"><span className="font-medium">Number of questions:</span> {quiz.questions.length}</p>
                <p><span className="font-medium">Estimated time:</span> {Math.ceil(quiz.timeLimit ? quiz.timeLimit / 60 : quiz.questions.length * 1.5)} minutes</p>
              </div>
              <Button 
                onClick={handleBeginQuiz}
                className="btn rounded-full px-8 py-2 text-lg"
              >
                Start Quiz
              </Button>
            </CardContent>
          </Card>
        )}
        
        {currentStep === "instructions" && (
          <QuizInstructions 
            quiz={quiz} 
            loading={loading} 
            onStartQuiz={startQuiz} 
          />
        )}
        
        {currentStep === "taking" && (
          <QuizTaking
            quiz={quiz}
            currentQuestion={currentQuestion}
            answers={answers}
            timeRemaining={timeRemaining}
            isQuizStarted={isQuizStarted}
            isQuizComplete={isQuizComplete}
            onSelectAnswer={handleAnswerSelected}
            onGoToNext={goToNextQuestion}
            onGoToPrev={goToPrevQuestion}
            onSubmit={handleSubmitQuiz}
            onTimeUp={handleTimeUp}
          />
        )}
        
        {currentStep === "results" && result && (
          <QuizResults 
            result={result}
            quizTitle={quiz.title}
            onTryAgain={handleTryAgain}
            onBackToSubject={handleBackToSubject}
          />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default QuizPage;
