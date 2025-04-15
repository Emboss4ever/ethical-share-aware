
import { QuizQuestionSet } from "@/types/ethics";

export const metadataAwarenessQuestions: QuizQuestionSet = [
  {
    id: 9,
    question: "When sharing a photo, I consider metadata and location information visible to others:",
    options: [
      {
        id: "9a",
        text: "I never think about hidden data in my posts",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "This approach exposes you to significant <a href='/risks/data-theft' class='underline'>data theft risks</a>. Metadata in photos can reveal precise locations, device information, and other sensitive details that can be exploited."
      },
      {
        id: "9b",
        text: "I carefully strip sensitive data before sharing",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "This proactive approach significantly reduces <a href='/risks/osint' class='underline'>OSINT vulnerability</a> by limiting exploitable metadata. Removing location data and other embedded information is an excellent privacy practice."
      },
      {
        id: "9c",
        text: "I assume platforms handle that automatically",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ],
        considerations: "This misconception creates substantial <a href='/risks/identity-theft' class='underline'>identity theft risks</a>. Most platforms preserve metadata unless explicitly configured otherwise, potentially exposing sensitive location and device information."
      },
      {
        id: "9d",
        text: "I review each post's data individually",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: 20 }
        ],
        considerations: "This thoughtful approach shows excellent privacy awareness and significantly reduces <a href='/risks/data-theft' class='underline'>data theft risks</a>. Contextual evaluation of each post ensures appropriate protection levels."
      }
    ]
  }
];
