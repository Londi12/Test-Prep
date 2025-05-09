import React, { Suspense } from "react";
import { Question } from "../types/quiz";
import { cn } from "@/lib/utils";
import { MultipleChoiceQuestion } from "./questions/MultipleChoiceQuestion";
import { ShortAnswerQuestion } from "./questions/ShortAnswerQuestion";
import { TrueFalseQuestion } from "./questions/TrueFalseQuestion";
import { MultipleSelectQuestion } from "./questions/MultipleSelectQuestion";
import { MatchingQuestion } from "./questions/MatchingQuestion";
import { EssayQuestion } from "./questions/EssayQuestion";
import { FillBlanksQuestion } from "./questions/FillBlanksQuestion";
import { StepByStepBuilder } from "./questions/StepByStepBuilder";

const EditableMathField = React.lazy(() => import('react-mathquill').then(module => ({ default: module.EditableMathField })));

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: any;
  onAnswerSelected: (answer: any) => void;
  showResults: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelected,
  showResults,
}) => {
  const renderQuestion = () => {
    const isMathQuestion = question.type === 'math' || question.requiresMathInput;

    switch (question.type) {
      case 'multiple-choice':
        return (
          <MultipleChoiceQuestion
            question={question}
            selectedAnswer={selectedAnswer as number | null}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );
      
      case 'short-answer':
        return question.isLatex ? (
          <div className="space-y-4">
            <Suspense fallback={<div>Loading...</div>}>
              <EditableMathField
                latex={selectedAnswer || ''}
                onChange={(mathField: any) => onAnswerSelected(mathField.latex())}
                config={{
                  spaceBehavesLikeTab: true,
                  leftRightIntoCmdGoes: 'up',
                  restrictMismatchedBrackets: true,
                  autoCommands: 'pi theta sqrt sum prod alpha beta gamma',
                  autoOperatorNames: 'sin cos tan'
                }}
              />
            </Suspense>
            {question.solutionSteps && !showResults && (
              <StepByStepBuilder
                initialSteps={[]}
                onComplete={(steps) => {
                  // Store steps along with the answer
                  onAnswerSelected({ latex: selectedAnswer, steps });
                }}
                isMathQuestion={true}
              />
            )}
          </div>
        ) : (
          <ShortAnswerQuestion
            question={question}
            selectedAnswer={selectedAnswer as string | null}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );
      
      case 'true-false':
        return (
          <TrueFalseQuestion
            question={question}
            selectedAnswer={selectedAnswer as boolean | null}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );
      
      case 'multiple-select':
        return (
          <MultipleSelectQuestion
            question={question}
            selectedAnswers={selectedAnswer as number[] || []}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );
      
      case 'matching':
        return (
          <MatchingQuestion
            question={question}
            selectedAnswers={selectedAnswer as Array<[number, number]> || []}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );
      
      case 'essay':
        return (
          <EssayQuestion
            question={question}
            selectedAnswer={selectedAnswer as string | null}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );
      
      case 'fill-blanks':
        return (
          <FillBlanksQuestion
            question={question}
            selectedAnswers={selectedAnswer as string[] || []}
            onAnswerSelected={onAnswerSelected}
            showResults={showResults}
          />
        );

      case 'math':
        return (
          <div className="space-y-4">
            <Suspense fallback={<div>Loading...</div>}>
              <EditableMathField
                latex={selectedAnswer?.latex || ''}
                onChange={(mathField: any) => {
                  const currentAnswer = selectedAnswer || {};
                  onAnswerSelected({
                    ...currentAnswer,
                    latex: mathField.latex()
                  });
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
            {!showResults && (
              <StepByStepBuilder
                initialSteps={selectedAnswer?.steps || []}
                onComplete={(steps) => {
                  const currentAnswer = selectedAnswer || {};
                  onAnswerSelected({
                    ...currentAnswer,
                    steps
                  });
                }}
                isMathQuestion={true}
              />
            )}
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6 shadow-sm border border-gray-100">
      {question.marks && (
        <div className="text-sm text-gray-600 mb-2">[{question.marks} marks]</div>
      )}
      {question.context && (
        <div className="mb-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-gray-800 leading-relaxed">
            {question.context.split('\n').map((paragraph, idx) => (
              <p key={idx} className={idx < question.context.split('\n').length - 1 ? 'mb-4' : ''}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
      <h3 className="text-lg font-medium mb-4">{question.question}</h3>
      {renderQuestion()}
    </div>
  );
};

export default QuizQuestion;
