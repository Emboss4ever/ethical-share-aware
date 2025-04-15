
import { QuizQuestionSet } from "@/types/ethics";

export const privacyQuestions: QuizQuestionSet = [
  {
    id: 2,
    question: "What privacy settings do you typically use for your posts?",
    options: [
      {
        id: "2a",
        text: "Public - everyone can see",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ],
        considerations: "Public posts can expose personal information to a wider audience, which may not be appropriate for all situations.",
        positiveAspect: "Allows for easy sharing of content and can be useful for reaching a broad audience."
      },
      {
        id: "2b",
        text: "Friends only",
        scoring: [
          { framework: "duty", score: 20 }
        ],
        considerations: "Friends-only posts provide a more controlled environment for sharing content, but may limit visibility.",
        positiveAspect: "Maintains privacy and control over who can see your posts."
      },
      {
        id: "2c",
        text: "Custom lists based on content type",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "Custom lists allow for more targeted sharing of content, but may require careful consideration of who to include.",
        positiveAspect: "Balances privacy and control over who can see your posts."
      },
      {
        id: "2d",
        text: "Mostly private with occasional public posts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "A mix of private and public posts allows for a balance between privacy and visibility, but requires careful consideration of who to share with.",
        positiveAspect: "Maintains privacy while still allowing for some public sharing."
      }
    ]
  }
];
