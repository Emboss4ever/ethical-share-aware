
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: string | undefined;
  onOptionSelect: (optionId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  currentQuestionIndex: number;
  totalQuestions: number;
  progress: number;
}

const QuizQuestion = ({
  question,
  selectedOption,
  onOptionSelect,
  onNext,
  onPrevious,
  currentQuestionIndex,
  totalQuestions,
  progress,
}: QuizQuestionProps) => {
  return (
    <>
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="text-xl mb-4">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>
      <div className="text-gray-600 mb-6">{question.question}</div>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
              selectedOption === option.id
                ? "border-purple-500 bg-purple-50"
                : "border-gray-200 hover:border-purple-300"
            }`}
            onClick={() => onOptionSelect(option.id)}
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                {selectedOption === option.id ? (
                  <div className="h-5 w-5 rounded-full bg-purple-500" />
                ) : (
                  <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                )}
              </div>
              <span className="ml-3">{option.text}</span>
            </div>
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-6">
        <Button 
          variant="outline" 
          onClick={onPrevious}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft size={16} className="mr-1" /> Previous
        </Button>
        <Button onClick={onNext}>
          {currentQuestionIndex === totalQuestions - 1 ? "See Results" : "Next"}
          {currentQuestionIndex === totalQuestions - 1 ? null : <ChevronRight size={16} className="ml-1" />}
        </Button>
      </div>
    </>
  );
};

export default QuizQuestion;
