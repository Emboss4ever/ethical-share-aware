import { ethicalFrameworks } from "@/data/frameworks";
import { quizQuestions } from "@/data/quizQuestions";

interface ScoringBreakdownProps {
  index: number;
  selectedOption: string;
}

const ScoringBreakdown = ({ index, selectedOption }: ScoringBreakdownProps) => {
  const question = quizQuestions[index];
  const selectedOptionData = question.options.find(
    (opt) => opt.id === selectedOption
  );

  if (!selectedOptionData) return null;

  return (
    <div className="p-4 border rounded-lg">
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
  );
};

export default ScoringBreakdown;
