import React, { useState, Suspense } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { PlusIcon, MinusIcon, ArrowDownIcon, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const EditableMathField = React.lazy(() => import('react-mathquill').then(module => ({ default: module.EditableMathField })));

interface Step {
  explanation: string;
  math?: string;
  isValid: boolean;
}

interface Props {
  initialSteps?: Step[];
  onComplete: (steps: Step[]) => void;
  isMathQuestion?: boolean;
  currentLatex?: string;
}

export const StepByStepBuilder: React.FC<Props> = ({
  initialSteps = [],
  onComplete,
  isMathQuestion = false,
  currentLatex
}) => {
  const [steps, setSteps] = useState<Step[]>(initialSteps.length ? initialSteps : [{ explanation: '', isValid: false }]);
  const [currentStep, setCurrentStep] = useState(0);

  const addStep = () => {
    setSteps([...steps, { explanation: '', isValid: false }]);
  };

  const removeStep = (index: number) => {
    const newSteps = steps.filter((_, i) => i !== index);
    setSteps(newSteps);
    if (currentStep >= newSteps.length) {
      setCurrentStep(Math.max(0, newSteps.length - 1));
    }
  };

  const updateStep = (index: number, field: keyof Step, value: string) => {
    const newSteps = [...steps];
    newSteps[index] = {
      ...newSteps[index],
      [field]: value,
      isValid: field === 'explanation' ? value.length > 0 : newSteps[index].isValid
    };
    setSteps(newSteps);
  };

  const handleComplete = () => {
    if (steps.every(step => step.isValid)) {
      onComplete(steps);
    }
  };

  return (
    <div className="step-builder">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Solution Steps</h3>
        <div className="text-sm text-gray-500">
          {steps.length} step{steps.length !== 1 ? 's' : ''}
        </div>
      </div>
      
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={cn(
            "step-item transition-all duration-300",
            currentStep === index ? "border-l-4 border-blue-500" : ""
          )}
        >
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <span className="font-medium text-gray-700">Step {index + 1}</span>
              {step.isValid && (
                <CheckIcon className="w-4 h-4 text-green-500" />
              )}
            </div>
            {index > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeStep(index)}
                className="text-red-500 hover:text-red-700"
              >
                <MinusIcon className="w-4 h-4" />
              </Button>
            )}
          </div>

          <Textarea
            placeholder="Explain this step..."
            value={step.explanation}
            onChange={(e) => updateStep(index, 'explanation', e.target.value)}
            className="mb-2"
          />

          {isMathQuestion && (
            <div className="mt-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
              <Suspense fallback={<div>Loading Math Editor...</div>}>
                <EditableMathField
                  latex={step.math || ''}
                  onChange={(mathField: any) => {
                    updateStep(index, 'math', mathField.latex());
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
            </div>
          )}

          {index < steps.length - 1 && (
            <div className="flex justify-center my-3">
              <ArrowDownIcon className="w-4 h-4 text-gray-400" />
            </div>
          )}
        </div>
      ))}

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
        <Button
          variant="outline"
          onClick={addStep}
          className="flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Add Step
        </Button>

        <Button
          onClick={handleComplete}
          disabled={!steps.every(step => step.isValid)}
          className={cn(
            "transition-all duration-300",
            steps.every(step => step.isValid)
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-gray-100 text-gray-400"
          )}
        >
          Apply Solution
        </Button>
      </div>
      
      {currentLatex && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="text-sm font-medium text-blue-700 mb-2">Current Answer:</div>
          <div className="font-mono text-sm break-all">{currentLatex}</div>
        </div>
      )}
    </div>
  );
};