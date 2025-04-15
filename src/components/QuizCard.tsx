
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { quizQuestions } from "@/data/quizQuestions";
import { ethicalFrameworks } from "@/data/frameworks";
import { useToast } from "@/hooks/use-toast";
import QuizQuestion from "./quiz/QuizQuestion";
import QuizResults from "./quiz/QuizResults";
import { ResultScore } from "./quiz/types";

const QuizCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<ResultScore[]>([]);
  const { toast } = useToast();

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const totalQuestions = quizQuestions.length;
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
    const frameworkScores: Record<string, number> = {};
    
    ethicalFrameworks.forEach(framework => {
      frameworkScores[framework.id] = 0;
    });

    selectedOptions.forEach((optionId, questionIndex) => {
      const question = quizQuestions[questionIndex];
      const selectedOption = question.options.find(option => option.id === optionId);
      
      if (selectedOption) {
        frameworkScores[selectedOption.framework] += selectedOption.score;
      }
    });

    const maxPossibleScorePerFramework = 9;
    
    const resultsArray: ResultScore[] = Object.entries(frameworkScores)
      .map(([frameworkId, score]) => ({
        frameworkId,
        score,
        percentage: (score / maxPossibleScorePerFramework) * 100
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
        <CardTitle className="text-2xl">Ethical Framework Quiz</CardTitle>
        <CardDescription>
          Answer these questions to discover your ethical framework alignment
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
          <QuizResults
            results={results}
            selectedOptions={selectedOptions}
            onReset={resetQuiz}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default QuizCard;
