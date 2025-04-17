
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { socialMediaQuiz } from "@/data/quizQuestions";
import { useToast } from "@/hooks/use-toast";
import QuizQuestion from "./quiz/QuizQuestion";
import QuizResults from "./quiz/QuizResults";
import { ResultScore, scoringRules } from "./quiz/types";
import { Button } from "./ui/button";
import "./quiz/Quiz.css";

const QuizCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [results, setResults] = useState<ResultScore[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  const currentQuestion = socialMediaQuiz[currentQuestionIndex];
  const totalQuestions = socialMediaQuiz.length;
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

    // Apply the new scoring rules
    selectedOptions.forEach((optionId, questionIndex) => {
      const question = socialMediaQuiz[questionIndex];
      const selectedOption = question.options.find(opt => opt.id === optionId);
      
      if (selectedOption) {
        selectedOption.scoring.forEach(score => {
          // Determine the type of scoring rule based on score.score
          let points = 0;
          if (score.score >= 30) {
            points = scoringRules.primary; // +20
          } else if (score.score >= 15) {
            points = scoringRules.secondary; // +10
          } else if (score.score === 0) {
            points = scoringRules.neutral; // 0
          } else if (score.score < 0) {
            points = scoringRules.conflict; // -20
          }
          
          frameworkScores[score.framework] += points;
        });
      }
    });

    // Ensure exactly one framework has the highest score (break ties if needed)
    const maxScore = Math.max(...Object.values(frameworkScores));
    const highestFrameworks = Object.keys(frameworkScores).filter(
      framework => frameworkScores[framework] === maxScore
    );
    
    // If there's a tie, artificially break it for one dominant framework
    if (highestFrameworks.length > 1) {
      // We'll choose the first one as dominant (could be randomized)
      frameworkScores[highestFrameworks[0]] += 1;
    }

    // Calculate percentages based on relative scores
    const totalPossibleScore = totalQuestions * scoringRules.primary; // Max possible score
    
    const resultsArray: ResultScore[] = Object.entries(frameworkScores)
      .map(([frameworkId, score]) => {
        // Ensure percentage is positive and capped at 100%
        const rawPercentage = (score / totalPossibleScore) * 100;
        const percentage = Math.max(0, Math.min(100, rawPercentage));
        
        return {
          frameworkId,
          score,
          percentage
        };
      })
      .sort((a, b) => b.score - a.score); // Sort by score instead of percentage

    setResults(resultsArray);
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptions([]);
    setQuizCompleted(false);
    setResults([]);
  };

  const handleTakeGeneralEthicsQuiz = () => {
    navigate('/general-ethics');
  };

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl">Social Media Ethics Quiz</CardTitle>
        <CardDescription>
          Answer these questions to discover your ethical framework alignment in social media contexts
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
            />
            <div className="mt-6 text-center">
              <p className="mb-4 text-gray-600">
                Curious how your general ethical views compare to your social media behavior?
              </p>
              <Button onClick={handleTakeGeneralEthicsQuiz}>
                Take the General Ethics Quiz
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default QuizCard;
