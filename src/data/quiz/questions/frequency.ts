
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
        considerations: "Frequent posting may lead to oversharing personal information and could impact your digital footprint. Consider the long-term implications of maintaining such an active online presence.",
        positiveAspect: "Helps maintain strong social connections and regular engagement with your community."
      },
      {
        id: "1b",
        text: "Once daily",
        scoring: [
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "Daily updates still require careful content curation and awareness of your audience's preferences.",
        positiveAspect: "Provides consistent engagement while maintaining a balanced approach to social media use."
      },
      {
        id: "1c",
        text: "A few times per week",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "Even less frequent posting requires attention to privacy settings and content appropriateness.",
        positiveAspect: "Allows for more thoughtful and meaningful content sharing."
      },
      {
        id: "1d",
        text: "Only when something significant happens",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "Important to maintain privacy awareness even with occasional posts, as significant events might involve sensitive information.",
        positiveAspect: "Focuses on quality over quantity and maintains authenticity in online presence."
      }
    ]
  }
];
