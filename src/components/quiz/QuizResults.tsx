
import { Button } from "@/components/ui/button";
import { ethicalFrameworks } from "@/data/frameworks";
import { ArrowRight } from "lucide-react";
import { ResultScore } from "./types";
import ScoringBreakdown from "./ScoringBreakdown";

interface QuizResultsProps {
  results: ResultScore[];
  selectedOptions: string[];
  onReset: () => void;
  isGeneralEthics?: boolean;
  mainQuizResults?: ResultScore[];
}

const QuizResults = ({ 
  results, 
  selectedOptions, 
  onReset,
  isGeneralEthics = false,
  mainQuizResults
}: QuizResultsProps) => {
  const topFramework = results[0];
  const frameworkInfo = ethicalFrameworks.find(
    (framework) => framework.id === topFramework.frameworkId
  );

  // Compare main quiz with general ethics if available
  const renderComparison = () => {
    if (!isGeneralEthics || !mainQuizResults) return null;

    const mainTopFramework = mainQuizResults[0];
    const mainFrameworkInfo = ethicalFrameworks.find(
      (framework) => framework.id === mainTopFramework.frameworkId
    );

    const isMatch = topFramework.frameworkId === mainTopFramework.frameworkId;

    return (
      <div className="mt-8 p-4 bg-gray-50 rounded-lg border">
        <h4 className="text-lg font-medium mb-2">Comparison with Social Media Ethics</h4>
        <p className="mb-4">
          {isMatch 
            ? `Your general ethical framework (${frameworkInfo?.name}) matches your social media ethical approach (${mainFrameworkInfo?.name}).` 
            : `Your general ethical framework (${frameworkInfo?.name}) differs from your social media ethical approach (${mainFrameworkInfo?.name}).`}
        </p>
        {!isMatch && (
          <p className="text-sm text-gray-600">
            This suggests that your behavior on social media might be influenced by factors beyond your core ethical beliefs. 
            Consider how the digital environment affects your ethical decision-making.
          </p>
        )}
      </div>
    );
  };

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
        {isGeneralEthics && (
          <p className="mt-2 text-sm text-gray-500">
            This reflects your general ethical framework, not specific to social media contexts.
          </p>
        )}
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

      {renderComparison()}

      <div className="mt-8">
        <h4 className="text-lg font-medium mb-4">Your Answers Analysis</h4>
        <div className="space-y-4">
          {selectedOptions.map((option, index) => (
            <ScoringBreakdown
              key={index}
              index={index}
              selectedOption={option}
              isGeneralEthics={isGeneralEthics}
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
