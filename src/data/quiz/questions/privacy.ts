
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
        considerations: "Public posts maximize your exposure to <a href='/risks/osint'>OSINT collection</a> and significantly increase risk of <a href='/risks/data-theft'>data harvesting</a>. This setting also provides extensive training data for <a href='/risks/deepfakes'>deepfake creation</a> if you share photos or videos."
      },
      {
        id: "2b",
        text: "Friends only",
        scoring: [
          { framework: "duty", score: 20 }
        ],
        considerations: "While more secure than public settings, friends-only still poses risks of <a href='/risks/data-theft'>data theft</a> through compromised friend accounts or <a href='/risks/identity-theft'>identity theft</a> from trusted connections being exploited."
      },
      {
        id: "2c",
        text: "Custom lists based on content type",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "This granular approach helps mitigate <a href='/risks/osint'>OSINT threats</a> by controlling information flow. However, complex privacy settings need regular auditing to prevent accidental exposure that could lead to <a href='/risks/data-theft'>data theft</a>."
      },
      {
        id: "2d",
        text: "Mostly private with occasional public posts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "This hybrid approach reduces overall <a href='/risks/osint'>OSINT vulnerability</a>, but requires careful consideration of which content goes public. Each public post should be evaluated for potential <a href='/risks/deepfakes'>deepfake exploitation</a> or <a href='/risks/identity-theft'>identity theft risks</a>."
      }
    ]
  }
];
