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
        considerations: "Never reviewing your privacy settings can lead to security vulnerabilities and can be difficult to maintain a balanced online presence.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "6b",
        text: "Annually",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "Annually reviewing your privacy settings can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "6c",
        text: "Monthly",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Monthly reviewing your privacy settings can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "6d",
        text: "After every platform update",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ],
        considerations: "After every platform update reviewing your privacy settings can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
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
        considerations: "Sharing personal achievements immediately can help maximize engagement, but may not be appropriate for all situations.",
        positiveAspect: "Helps maximize engagement and can be useful for building relationships with others."
      },
      {
        id: "7b",
        text: "I carefully consider potential future implications",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "Carefully considering potential future implications can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "7c",
        text: "I only share if it might benefit others",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "Only sharing personal achievements if it might benefit others can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "7d",
        text: "I share based on established rules",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Sharing personal achievements based on established rules can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
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
  },
  {
    id: 5,
    question: "Regarding my personal information visible online:",
    options: [
      {
        id: "5a",
        text: "I regularly search and audit my digital presence",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "Regularly searching and auditing your digital presence can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "5b",
        text: "I only worry when something happens",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "Only worrying when something happens can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "5c",
        text: "I maintain multiple separate online identities",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "Maintaining multiple separate online identities can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      },
      {
        id: "5d",
        text: "I share everything openly for transparency",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "duty", score: -20 }
        ],
        considerations: "Sharing everything openly for transparency can help maintain a balanced online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a balanced online presence and can be useful for building relationships with others."
      }
    ]
  }
];
