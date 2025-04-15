
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
        considerations: "Public posts allow for easy sharing of content and can be useful for reaching a broad audience. However, this can expose personal information to a wider audience, which may not be appropriate for all situations."
      },
      {
        id: "2b",
        text: "Friends only",
        scoring: [
          { framework: "duty", score: 20 }
        ],
        considerations: "Friends-only posts provide a more controlled environment for sharing content while maintaining privacy and control over who can see your posts. However, this may limit visibility and potential connections."
      },
      {
        id: "2c",
        text: "Custom lists based on content type",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "Custom lists allow for more targeted sharing of content while balancing privacy and control. This approach requires careful consideration of audience segmentation but provides optimal content control."
      },
      {
        id: "2d",
        text: "Mostly private with occasional public posts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "This balanced approach maintains privacy while still allowing for some public sharing when appropriate. It requires thoughtful consideration of which content to make public versus private."
      }
    ]
  }
];
