
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
        considerations: "While accepting everyone can lead to a large network and broad audience reach, it may compromise privacy and security. This approach maximizes potential connections but increases exposure to unwanted content or interactions."
      },
      {
        id: "3b",
        text: "Only people I know in real life",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "This conservative approach maintains strong privacy and control over your network, though it may limit professional opportunities and broader connections. It ensures authentic relationships but could restrict growth of your network."
      },
      {
        id: "3c",
        text: "Based on mutual connections and profile review",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "This balanced approach helps maintain a quality network while allowing for growth. It combines safety with opportunity by leveraging trusted connections' networks."
      },
      {
        id: "3d",
        text: "Strict verification process",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ],
        considerations: "A thorough verification process ensures high-quality connections while maintaining network security. This approach prioritizes safety and authenticity but requires more time and effort to manage."
      }
    ]
  }
];
