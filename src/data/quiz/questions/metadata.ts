
import { QuizQuestionSet } from "@/types/ethics";

export const metadataQuestions: QuizQuestionSet = [
  {
    id: 6,
    question: "How often do you review your privacy settings?",
    options: [
      {
        id: "6a",
        text: "Never",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ],
        considerations: "Not reviewing privacy settings can expose personal information and lead to security vulnerabilities.",
        positiveAspect: "Reduces time spent on platform management."
      },
      {
        id: "6b",
        text: "Annually",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "Annual reviews might miss important privacy updates but provide basic protection.",
        positiveAspect: "Maintains basic privacy awareness with minimal time investment."
      },
      {
        id: "6c",
        text: "Monthly",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Regular monthly reviews help maintain privacy but require time commitment.",
        positiveAspect: "Ensures consistent privacy maintenance and awareness."
      },
      {
        id: "6d",
        text: "After every platform update",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ],
        considerations: "This approach ensures up-to-date privacy settings but requires vigilance.",
        positiveAspect: "Stays current with platform changes and protects privacy proactively."
      }
    ]
  },
  {
    id: 7,
    question: "When sharing personal achievements online, what's your primary consideration?",
    options: [
      {
        id: "7a",
        text: "I share immediately to maximize engagement",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "Quick sharing maximizes engagement but might appear boastful or miss important context.",
        positiveAspect: "Maximizes visibility and potential networking opportunities."
      },
      {
        id: "7b",
        text: "I carefully consider potential future implications",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "This approach protects long-term interests but might miss immediate opportunities.",
        positiveAspect: "Protects professional and personal reputation."
      },
      {
        id: "7c",
        text: "I only share if it might benefit others",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "Focusing on benefiting others might limit personal networking opportunities.",
        positiveAspect: "Contributes positively to community knowledge and inspiration."
      },
      {
        id: "7d",
        text: "I share based on established rules",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Following established rules might miss unique opportunities or context.",
        positiveAspect: "Maintains consistent and professional online presence."
      }
    ]
  }
];
