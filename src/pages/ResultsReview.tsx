import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuizQuestion from "@/components/QuizQuestion";
import { getQuizById } from "@/data/quizzes";
import { Button } from "@/components/ui/button";

const ResultsReview = () => {
  const { subject, paper } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const quizId = `${subject}-${paper}`;
  const quiz = getQuizById(quizId);
  
  // Get the user answers from location state
  const userAnswers = location.state?.answers || [];
  
  if (!quiz) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Review: {quiz.title}</h1>
            <Button
              variant="outline"
              onClick={() => navigate(`/quizzes/${subject}/${paper}`)}
              className="rounded-full"
            >
              Take Quiz Again
            </Button>
          </div>
          
          {quiz.questions.map((question, index) => (
            <QuizQuestion
              key={question.id}
              question={question}
              selectedAnswer={userAnswers[index] || null}
              onAnswerSelected={() => {}}
              showResults={true}
            />
          ))}
          
          <div className="flex justify-center mt-8">
            <Button 
              onClick={() => navigate("/")}
              className="btn rounded-full px-8 py-2"
            >
              Back to Home
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResultsReview;
