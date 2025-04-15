
import { QuizQuestionSet } from "@/types/ethics";

export const socialMediaQuestions: QuizQuestionSet = [
  {
    id: 1,
    question: "How often do you post on social media?",
    options: [
      {
        id: "1a",
        text: "Multiple times per day",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "1b",
        text: "Once daily",
        scoring: [
          { framework: "consequentialism", score: 10 }
        ]
      },
      {
        id: "1c",
        text: "A few times per week",
        scoring: [
          { framework: "duty", score: 10 }
        ]
      },
      {
        id: "1d",
        text: "Only when something significant happens",
        scoring: [
          { framework: "virtue", score: 20 }
        ]
      }
    ]
  },
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
        ]
      },
      {
        id: "2b",
        text: "Friends only",
        scoring: [
          { framework: "duty", score: 20 }
        ]
      },
      {
        id: "2c",
        text: "Custom lists based on content type",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      },
      {
        id: "2d",
        text: "Mostly private with occasional public posts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "consequentialism", score: 10 }
        ]
      }
    ]
  },
  {
    id: 3,
    question: "How do you handle friend/follow requests?",
    options: [
      {
        id: "3a",
        text: "Accept everyone",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -20 }
        ]
      },
      {
        id: "3b",
        text: "Only people I know in real life",
        scoring: [
          { framework: "duty", score: 30 }
        ]
      },
      {
        id: "3c",
        text: "Based on mutual connections and profile review",
        scoring: [
          { framework: "virtue", score: 20 }
        ]
      },
      {
        id: "3d",
        text: "Strict verification process",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ]
      }
    ]
  },
  {
    id: 4,
    question: "What type of content do you most frequently share?",
    options: [
      {
        id: "4a",
        text: "Personal achievements and milestones",
        scoring: [
          { framework: "consequentialism", score: 20 }
        ]
      },
      {
        id: "4b",
        text: "Educational/informative content",
        scoring: [
          { framework: "virtue", score: 30 }
        ]
      },
      {
        id: "4c",
        text: "Entertainment and humor",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "4d",
        text: "Social/political commentary",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ]
      }
    ]
  },
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
        ]
      },
      {
        id: "5b",
        text: "Avoid sharing entirely",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      },
      {
        id: "5c",
        text: "Share only in private groups",
        scoring: [
          { framework: "consequentialism", score: 20 }
        ]
      },
      {
        id: "5d",
        text: "Evaluate each case individually",
        scoring: [
          { framework: "virtue", score: 30 }
        ]
      }
    ]
  },
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
        ]
      },
      {
        id: "6b",
        text: "Annually",
        scoring: [
          { framework: "duty", score: 10 }
        ]
      },
      {
        id: "6c",
        text: "Monthly",
        scoring: [
          { framework: "duty", score: 30 }
        ]
      },
      {
        id: "6d",
        text: "After every platform update",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 20 }
        ]
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
        ]
      },
      {
        id: "7b",
        text: "I carefully consider potential future implications",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ]
      },
      {
        id: "7c",
        text: "I only share if it might benefit others",
        scoring: [
          { framework: "virtue", score: 30 }
        ]
      },
      {
        id: "7d",
        text: "I share based on established rules",
        scoring: [
          { framework: "duty", score: 30 }
        ]
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
        ]
      },
      {
        id: "8b",
        text: "Share and remove if someone objects",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "8c",
        text: "Only share in private groups based on moral principles",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      },
      {
        id: "8d",
        text: "Tag everyone to maximize utility",
        scoring: [
          { framework: "consequentialism", score: 30 },
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
