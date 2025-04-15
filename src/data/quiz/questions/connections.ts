
import { QuizQuestionSet } from "@/types/ethics";

export const connectionQuestions: QuizQuestionSet = [
  {
    id: 3,
    question: "How do you handle friend/follow requests?",
    options: [
      {
        id: "3a",
        text: "Accept everyone",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -20 }
        ],
        considerations: "Accepting everyone can lead to a large number of followers, which may not be appropriate for all situations.",
        positiveAspect: "Maintains a large following and can be useful for reaching a broad audience."
      },
      {
        id: "3b",
        text: "Only people I know in real life",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Only accepting people you know in real life can limit your network and make it harder to connect with others.",
        positiveAspect: "Maintains privacy and control over who can see your posts."
      },
      {
        id: "3c",
        text: "Based on mutual connections and profile review",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "Based on mutual connections and profile review can help maintain a balanced network of followers.",
        positiveAspect: "Balances privacy and control over who can see your posts."
      },
      {
        id: "3d",
        text: "Strict verification process",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ],
        considerations: "A strict verification process can help maintain a balanced network of followers and ensure that only appropriate people are connected.",
        positiveAspect: "Balances privacy and control over who can see your posts."
      }
    ]
  }
];
