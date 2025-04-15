
import { QuizQuestionSet } from "@/types/ethics";

export const visualPrivacyQuestions: QuizQuestionSet = [
  {
    id: 12,
    question: "When sharing group photos from events:",
    options: [
      {
        id: "12a",
        text: "I post immediately to maintain relevance",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -30 }
        ],
        considerations: "This approach significantly increases <a href='/risks/deepfakes' class='underline'>deepfake vulnerability</a> by providing current, high-quality images that can be misused. Fast posting often skips privacy considerations."
      },
      {
        id: "12b",
        text: "I verify everyone's comfort with facial recognition",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "This considerate approach reduces risks of <a href='/risks/deepfakes' class='underline'>deepfake exploitation</a> by ensuring everyone is comfortable with their image being used and recognizes potential AI misuse."
      },
      {
        id: "12c",
        text: "I blur or edit sensitive details",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ],
        considerations: "This privacy-conscious approach reduces <a href='/risks/osint' class='underline'>OSINT vulnerability</a> by removing visual data that could be exploited, such as home addresses, workplace badges, or location identifiers."
      },
      {
        id: "12d",
        text: "I trust my social circle's privacy settings",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ],
        considerations: "This approach creates significant <a href='/risks/data-theft' class='underline'>data theft risks</a> by assuming others' privacy controls are adequate. Privacy settings vary greatly and are often misunderstood."
      }
    ]
  }
];
