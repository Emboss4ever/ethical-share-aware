
import { QuizQuestionSet } from "@/types/ethics";

export const contentQuestions: QuizQuestionSet = [
  {
    id: 4,
    question: "What type of content do you most frequently share?",
    options: [
      {
        id: "4a",
        text: "Personal achievements and milestones",
        scoring: [
          { framework: "consequentialism", score: 20 }
        ],
        considerations: "Sharing personal achievements helps build a strong professional presence and can inspire others. This approach can help maintain relationships and create networking opportunities, though balance is needed to avoid appearing boastful."
      },
      {
        id: "4b",
        text: "Educational/informative content",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "Sharing educational content contributes positively to the community while establishing expertise. This approach helps build a reputation as a knowledgeable and helpful individual, benefiting both you and your network."
      },
      {
        id: "4c",
        text: "Entertainment and humor",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "Entertainment content can boost engagement and maintain an approachable online presence. While this can help build connections, it's important to ensure the content remains appropriate and doesn't undermine professional credibility."
      },
      {
        id: "4d",
        text: "Social/political commentary",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ],
        considerations: "Engaging in social/political discourse shows civic engagement and critical thinking. This can establish you as a thought leader but requires careful consideration of potential controversy and professional impact."
      }
    ]
  }
];
