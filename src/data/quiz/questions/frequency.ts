
import { QuizQuestionSet } from "@/types/ethics";

export const frequencyQuestions: QuizQuestionSet = [
  {
    id: 1,
    question: "How often do you post on social media?",
    options: [
      {
        id: "1a",
        text: "Multiple times per day",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "Frequent posting helps maintain strong social connections and regular engagement with your community. However, it may lead to oversharing personal information and could impact your digital footprint. Consider the long-term implications of maintaining such an active online presence."
      },
      {
        id: "1b",
        text: "Once daily",
        scoring: [
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "Daily updates provide consistent engagement while maintaining a balanced approach to social media use. This requires careful content curation and awareness of your audience's preferences."
      },
      {
        id: "1c",
        text: "A few times per week",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "This moderate frequency allows for more thoughtful and meaningful content sharing. Even less frequent posting requires attention to privacy settings and content appropriateness."
      },
      {
        id: "1d",
        text: "Only when something significant happens",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "This approach focuses on quality over quantity and maintains authenticity in online presence. Important to maintain privacy awareness even with occasional posts, as significant events might involve sensitive information."
      }
    ]
  }
];
