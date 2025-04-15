
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
        considerations: "While this approach saves time, it exposes you to significant privacy risks. Not reviewing settings can lead to unintended information exposure and security vulnerabilities."
      },
      {
        id: "6b",
        text: "Annually",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "Annual reviews provide basic protection while requiring minimal time investment. This approach might miss important updates but maintains some level of privacy awareness."
      },
      {
        id: "6c",
        text: "Monthly",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Regular monthly reviews demonstrate strong privacy consciousness. This consistent approach helps maintain security while requiring a reasonable time commitment."
      },
      {
        id: "6d",
        text: "After every platform update",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ],
        considerations: "This proactive approach ensures maximum privacy protection and awareness of platform changes. While requiring vigilance, it provides the most comprehensive privacy management."
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
        considerations: "Quick sharing maximizes visibility and potential networking opportunities. However, this approach might appear boastful or miss important context that could make the share more meaningful."
      },
      {
        id: "7b",
        text: "I carefully consider potential future implications",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "This thoughtful approach protects long-term interests and professional reputation. While it might miss immediate opportunities, it ensures more strategic and considered sharing."
      },
      {
        id: "7c",
        text: "I only share if it might benefit others",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "This altruistic approach contributes positively to community knowledge and inspiration. While it may limit personal networking opportunities, it maintains a focus on providing value to others."
      },
      {
        id: "7d",
        text: "I share based on established rules",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Following established guidelines maintains a consistent and professional online presence. While this approach might miss unique opportunities, it ensures appropriate and standardized sharing practices."
      }
    ]
  }
];
