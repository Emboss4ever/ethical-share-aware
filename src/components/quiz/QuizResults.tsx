
import { Button } from "@/components/ui/button";
import { ethicalFrameworks, quizScoring } from "@/data/frameworks";
import { ArrowRight } from "lucide-react";
import { ResultScore } from "./types";
import ScoringBreakdown from "./ScoringBreakdown";

interface QuizResultsProps {
  results: ResultScore[];
  selectedOptions: string[];
  onReset: () => void;
}

const QuizResults = ({ results, selectedOptions, onReset }: QuizResultsProps) => {
  const topFramework = results[0];
  const frameworkInfo = ethicalFrameworks.find(
    (framework) => framework.id === topFramework.frameworkId
  );

  return (
    <>
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
                <span className="text-sm font-bold">
                  {Math.round(result.percentage)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${result.percentage}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium mb-4">Your Answers Analysis</h4>
        <div className="space-y-4">
          {quizScoring.map((scoring, index) => (
            <ScoringBreakdown
              key={index}
              index={index}
              scoring={scoring}
              selectedOption={selectedOptions[index]}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={onReset}>
          Retake Quiz
        </Button>
        <Button onClick={() => window.location.href = "#frameworks"}>
          Learn More <ArrowRight size={16} className="ml-2" />
        </Button>
      </div>
    </>
  );
};

export default QuizResults;
