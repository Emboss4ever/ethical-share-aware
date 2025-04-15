
import { QuizQuestionSet } from "@/types/ethics";

export const sharingQuestions: QuizQuestionSet = [
  {
    id: 5,
    question: "How do you handle potentially controversial content?",
    options: [
      {
        id: "5a",
        text: "Share with disclaimer",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "Sharing potentially controversial content with a disclaimer can help maintain a positive online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a positive online presence and can be useful for building relationships with others."
      },
      {
        id: "5b",
        text: "Avoid sharing entirely",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "Avoiding potentially controversial content can help maintain a positive online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a positive online presence and can be useful for building relationships with others."
      },
      {
        id: "5c",
        text: "Share only in private groups",
        scoring: [
          { framework: "consequentialism", score: 20 }
        ],
        considerations: "Sharing potentially controversial content only in private groups can help maintain a positive online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a positive online presence and can be useful for building relationships with others."
      },
      {
        id: "5d",
        text: "Evaluate each case individually",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "Evaluating each case individually can help maintain a positive online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a positive online presence and can be useful for building relationships with others."
      }
    ]
  },
  {
    id: 8,
    question: "How do you approach sharing photos that include others?",
    options: [
      {
        id: "8a",
        text: "Always ask for permission first",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Always asking for permission first shows respect for others' privacy and autonomy, but might slow down sharing time-sensitive content.",
        positiveAspect: "Demonstrates strong respect for consent and privacy rights."
      },
      {
        id: "8b",
        text: "Share and remove if someone objects",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "duty", score: -10 }
        ],
        considerations: "While this approach is more efficient, it might violate someone's privacy rights before they can object.",
        positiveAspect: "Allows for quick sharing while still respecting objections."
      },
      {
        id: "8c",
        text: "Only share in private groups based on moral principles",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "This balanced approach protects privacy while allowing sharing, but might limit content reach.",
        positiveAspect: "Balances privacy concerns with sharing needs."
      },
      {
        id: "8d",
        text: "Tag everyone to maximize utility",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -20 }
        ],
        considerations: "While this maximizes engagement, it might make some people uncomfortable or violate privacy preferences.",
        positiveAspect: "Maximizes content visibility and engagement."
      }
    ]
  },
  {
    id: 4,
    question: "When sharing group photos from events:",
    options: [
      {
        id: "4a",
        text: "I post immediately to maintain relevance",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -30 }
        ],
        considerations: "Quick posting maintains engagement but might not consider everyone's preferences or privacy.",
        positiveAspect: "Maximizes timeliness and relevance of content."
      },
      {
        id: "4b",
        text: "I verify everyone's comfort with facial recognition",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "This approach prioritizes consent but might delay sharing time-sensitive content.",
        positiveAspect: "Shows strong consideration for privacy and consent."
      },
      {
        id: "4c",
        text: "I blur or edit sensitive details",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ],
        considerations: "Balances privacy with sharing, but might reduce photo authenticity.",
        positiveAspect: "Protects sensitive information while allowing content sharing."
      },
      {
        id: "4d",
        text: "I trust my social circle's privacy settings",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ],
        considerations: "This approach might expose content to unintended audiences due to complex privacy settings.",
        positiveAspect: "Simplifies sharing process within trusted circles."
      }
    ]
  }
];
