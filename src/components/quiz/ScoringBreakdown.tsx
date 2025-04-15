
import { ethicalFrameworks, QuizScoring } from "@/data/frameworks";
import { quizQuestions } from "@/data/quizQuestions";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ScoringBreakdownProps {
  index: number;
  scoring: QuizScoring;
  selectedOption: string;
}

const ScoringBreakdown = ({ index, scoring, selectedOption }: ScoringBreakdownProps) => {
  const question = quizQuestions[index];
  const selectedOptionData = scoring.options.find(
    (opt) => opt.id === selectedOption
  );

  if (!selectedOptionData) return null;

  const framework = ethicalFrameworks.find(
    (f) => f.id === selectedOptionData.framework
  );

  return (
    <div className="p-4 border rounded-lg">
      <p className="font-medium mb-2">Q{index + 1}: {question.question}</p>
      <p className="text-gray-600 mb-2">
        Your answer: {question.options.find(opt => opt.id === selectedOption)?.text}
      </p>
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
                {selectedOptionData.explanation}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ScoringBreakdown;
