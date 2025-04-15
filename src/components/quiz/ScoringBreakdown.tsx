
import React from 'react';
import { Link } from 'react-router-dom';
import { risksConfig } from '@/data/risksConfig';
import { socialMediaQuiz, generalEthicsQuiz } from '@/data/quizQuestions';
import { ethicalFrameworks } from '@/data/ethicalFrameworks';

interface ScoringBreakdownProps {
  index: number;
  selectedOption: string;
  isGeneralEthics?: boolean;
}

const ScoringBreakdown = ({ 
  index, 
  selectedOption,
  isGeneralEthics = false 
}: ScoringBreakdownProps) => {
  const questions = isGeneralEthics ? generalEthicsQuiz : socialMediaQuiz;
  const question = questions[index];
  
  if (!question) return null;
  
  const selectedOptionData = question.options.find(
    (opt) => opt.id === selectedOption
  );

  if (!selectedOptionData) return null;

  const renderRiskLink = (riskPath: string) => {
    const riskConfig = risksConfig[riskPath];
    if (!riskConfig) return null;

    return (
      <Link 
        to={`/risks/${riskPath}`} 
        state={{ fromQuizResults: true }}
        className="text-purple-600 underline hover:text-purple-800"
      >
        Learn more about {riskConfig.title}
      </Link>
    );
  };

  return (
    <div className="p-4 border rounded-lg space-y-4">
      <div>
        <p className="font-medium mb-2">Q{index + 1}: {question.question}</p>
        <p className="text-gray-600 mb-2">
          Your answer: {selectedOptionData.text}
        </p>
        <div className="mt-2">
          <div className="space-y-2">
            {selectedOptionData.scoring.map((score, i) => {
              const framework = ethicalFrameworks.find(
                (f) => f.id === score.framework
              );
              return (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="font-medium">{framework?.name}:</span>
                  <span className={score.score >= 0 ? "text-green-600" : "text-red-600"}>
                    {score.score > 0 ? "+" : ""}{score.score} points
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      
      {selectedOptionData.considerations && (
        <div className="mt-4 space-y-3 text-sm border-t pt-3">
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Considerations:</h4>
            <p 
              className="text-gray-600"
              dangerouslySetInnerHTML={{ __html: selectedOptionData.considerations }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoringBreakdown;
