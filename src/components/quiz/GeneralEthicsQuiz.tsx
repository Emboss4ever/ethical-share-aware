
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { generalEthicsQuiz } from "@/data/quizQuestions";
import { ethicalFrameworks } from "@/data/frameworks";
import { useToast } from "@/hooks/use-toast";
import QuizQuestion from "./QuizQuestion";
import QuizResults from "./QuizResults";
import { ResultScore } from "./types";

interface GeneralEthicsQuizProps {
  onClose: () => void;
  mainQuizResults?: ResultScore[];
}

const GeneralEthicsQuiz = ({ onClose, mainQuizResults }: GeneralEthicsQuizProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<ResultScore[]>([]);
  const { toast } = useToast();

  const currentQuestion = generalEthicsQuiz[currentQuestionIndex];
  const totalQuestions = generalEthicsQuiz.length;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (optionId: string) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = optionId;
    setSelectedOptions(newSelectedOptions);
  };

  const goToNextQuestion = () => {
    if (!selectedOptions[currentQuestionIndex]) {
      toast({
        title: "Please select an option",
        description: "You need to select an answer before continuing.",
        variant: "destructive",
      });
      return;
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      calculateResults();
      setQuizCompleted(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateResults = () => {
    const frameworkScores: Record<string, number> = {
      duty: 0,
      consequentialism: 0,
      virtue: 0
    };

    selectedOptions.forEach((optionId, questionIndex) => {
      const question = generalEthicsQuiz[questionIndex];
      const selectedOption = question.options.find(opt => opt.id === optionId);
      
      if (selectedOption) {
        selectedOption.scoring.forEach(score => {
          frameworkScores[score.framework] += score.score;
        });
      }
    });

    const maxPossibleScorePerFramework = 100;
    
    const resultsArray: ResultScore[] = Object.entries(frameworkScores)
      .map(([frameworkId, score]) => ({
        frameworkId,
        score,
        percentage: Math.max(0, Math.min(100, (score / maxPossibleScorePerFramework) * 100))
      }))
      .sort((a, b) => b.percentage - a.percentage);

    setResults(resultsArray);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setQuizCompleted(false);
    setResults([]);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">General Ethics Framework Quiz</CardTitle>
        <CardDescription>
          Discover your ethical framework alignment in general (non-social media) contexts
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!quizCompleted ? (
          <QuizQuestion
            question={currentQuestion}
            selectedOption={selectedOptions[currentQuestionIndex]}
            onOptionSelect={handleOptionSelect}
            onNext={goToNextQuestion}
            onPrevious={goToPreviousQuestion}
            currentQuestionIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
            progress={progress}
          />
        ) : (
          <>
            <QuizResults
              results={results}
              selectedOptions={selectedOptions}
              onReset={resetQuiz}
              isGeneralEthics={true}
              mainQuizResults={mainQuizResults}
            />
            <div className="mt-4">
              <button 
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
              >
                Back to Main Quiz
              </button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default GeneralEthicsQuiz;
