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
        considerations: "Always asking for permission first can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "8b",
        text: "Share and remove if someone objects",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "duty", score: -10 }
        ],
        considerations: "Sharing and removing if someone objects can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "8c",
        text: "Only share in private groups based on moral principles",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "Only sharing in private groups based on moral principles can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "8d",
        text: "Tag everyone to maximize utility",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -20 }
        ],
        considerations: "Tagging everyone to maximize utility can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
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
        considerations: "Posting immediately to maintain relevance can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "4b",
        text: "I verify everyone's comfort with facial recognition",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "Verifying everyone's comfort with facial recognition can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "4c",
        text: "I blur or edit sensitive details",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ],
        considerations: "Blurring or editing sensitive details can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "4d",
        text: "I trust my social circle's privacy settings",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ],
        considerations: "Trusting your social circle's privacy settings can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      }
    ]
  }
];
