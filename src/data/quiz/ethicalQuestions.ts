
import { QuizQuestionSet } from "@/types/ethics";

export const ethicalQuestions: QuizQuestionSet = [
  {
    id: 1,
    question: "When deciding to share news or information, what guides your choice?",
    options: [
      {
        id: "1a",
        text: "Established fact-checking protocols",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "1b",
        text: "Potential impact on audience",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "1c",
        text: "Personal judgment and integrity",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "1d",
        text: "Platform guidelines and policies",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "virtue", score: 15 }
        ]
      }
    ]
  }
];
