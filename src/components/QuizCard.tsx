import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { quizQuestions, QuizQuestion } from "@/data/quizQuestions";
import { ethicalFrameworks, quizScoring } from "@/data/frameworks";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ResultScore {
  frameworkId: string;
  score: number;
  percentage: number;
}

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

  const isOptionSelected = (optionId: string) => {
    return selectedOptions[currentQuestionIndex] === optionId;
  };

  const renderScoringBreakdown = (questionIndex: number) => {
    const scoring = quizScoring[questionIndex];
    const selectedOption = scoring.options.find(
      (opt) => opt.id === selectedOptions[questionIndex]
    );

    if (!selectedOption) return null;

    const framework = ethicalFrameworks.find(
      (f) => f.id === selectedOption.framework
    );

    return (
      <div className="mt-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">Framework:</span>
          <span>{framework?.name}</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <Info className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem className="text-sm">
                {selectedOption.explanation}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    );
  };

  if (quizCompleted) {
    const topFramework = results[0];
    const frameworkInfo = ethicalFrameworks.find(
      (framework) => framework.id === topFramework.frameworkId
    );

    return (
      <Card className="w-full max-w-4xl mx-auto animate-fade-in shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-t-lg">
          <CardTitle className="text-2xl">Your Ethical Framework Profile</CardTitle>
          <CardDescription className="text-white/90">
            Based on your answers, here's how you approach social media ethics
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6 pb-2">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium mb-2">
                Your dominant framework: 
                <span className="font-bold text-purple-600 ml-2">
                  {frameworkInfo?.name}
                </span>
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                {frameworkInfo?.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {results.map((result) => {
                const framework = ethicalFrameworks.find(
                  (f) => f.id === result.frameworkId
                );
                return (
                  <div key={result.frameworkId} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{framework?.name}</h4>
                      <span className="text-sm font-bold">{Math.round(result.percentage)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-purple-600 h-2.5 rounded-full"
                        style={{ width: `${result.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Your Answers Analysis</h4>
              <div className="space-y-4">
                {quizQuestions.map((question, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <p className="font-medium mb-2">Q{index + 1}: {question.question}</p>
                    <p className="text-gray-600 mb-2">
                      Your answer: {question.options.find(opt => opt.id === selectedOptions[index])?.text}
                    </p>
                    {renderScoringBreakdown(index)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between pt-2">
          <Button variant="outline" onClick={resetQuiz}>
            Retake Quiz
          </Button>
          <Button onClick={() => window.location.href = "#frameworks"}>
            Learn More <ArrowRight size={16} className="ml-2" />
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <CardTitle className="text-xl">
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </CardTitle>
        <CardDescription>{currentQuestion.question}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {currentQuestion.options.map((option) => (
            <button
              key={option.id}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                isOptionSelected(option.id)
                  ? "border-purple-500 bg-purple-50"
                  : "border-gray-200 hover:border-purple-300"
              }`}
              onClick={() => handleOptionSelect(option.id)}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-0.5">
                  {isOptionSelected(option.id) ? (
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                  ) : (
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full" />
                  )}
                </div>
                <span className="ml-3">{option.text}</span>
              </div>
            </button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button 
          variant="outline" 
          onClick={goToPreviousQuestion}
          disabled={currentQuestionIndex === 0}
        >
          <ChevronLeft size={16} className="mr-1" /> Previous
        </Button>
        <Button onClick={goToNextQuestion}>
          {currentQuestionIndex === totalQuestions - 1 ? "See Results" : "Next"}
          {currentQuestionIndex === totalQuestions - 1 ? null : <ChevronRight size={16} className="ml-1" />}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
