
import { QuizQuestionSet } from "@/types/ethics";

export const socialMediaQuestions: QuizQuestionSet = [
  {
    id: 1,
    question: "When sharing a photo, I consider metadata and location information visible to others:",
    options: [
      {
        id: "1a",
        text: "I never think about hidden data in my posts",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "1b",
        text: "I carefully strip sensitive data before sharing",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ]
      },
      {
        id: "1c",
        text: "I assume platforms handle that automatically",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ]
      },
      {
        id: "1d",
        text: "I review each post's data individually",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: 20 }
        ]
      }
    ]
  },
  {
    id: 2,
    question: "When someone messages me claiming to be an old friend:",
    options: [
      {
        id: "2a",
        text: "I engage immediately if they seem familiar",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "virtue", score: -20 }
        ]
      },
      {
        id: "2b",
        text: "I verify their identity through mutual connections",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ]
      },
      {
        id: "2c",
        text: "I ignore all unexpected connection attempts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "duty", score: 20 }
        ]
      },
      {
        id: "2d",
        text: "I share limited information while building trust",
        scoring: [
          { framework: "consequentialism", score: 10 },
          { framework: "virtue", score: -10 }
        ]
      }
    ]
  },
  {
    id: 3,
    question: "If I notice subtle changes in a friend's online behavior:",
    options: [
      {
        id: "3a",
        text: "I assume they're exploring new interests",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "3b",
        text: "I privately verify their well-being",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: 20 }
        ]
      },
      {
        id: "3c",
        text: "I report suspicious activity to platforms",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ]
      },
      {
        id: "3d",
        text: "I publicly question the changes",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "virtue", score: -20 }
        ]
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
        ]
      },
      {
        id: "4b",
        text: "I verify everyone's comfort with facial recognition",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ]
      },
      {
        id: "4c",
        text: "I blur or edit sensitive details",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ]
      },
      {
        id: "4d",
        text: "I trust my social circle's privacy settings",
        scoring: [
          { framework: "consequentialism", score: -10 },
          { framework: "duty", score: -20 }
        ]
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
        ]
      },
      {
        id: "5b",
        text: "I only worry when something happens",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "5c",
        text: "I maintain multiple separate online identities",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      },
      {
        id: "5d",
        text: "I share everything openly for transparency",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "duty", score: -20 }
        ]
      }
    ]
  }
];

