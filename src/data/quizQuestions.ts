export interface QuizQuestion {
  id: number;
  question: string;
  options: Array<{
    id: string;
    text: string;
    scoring: {
      framework: string;
      score: number;
    }[];
  }>;
}

export const quizQuestions: QuizQuestion[] = [
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
    question: "Which principle do you value most when making decisions about sharing content?",
    options: [
      {
        id: "6a",
        text: "Following clear moral rules and principles",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "6b",
        text: "Maximizing positive outcomes for everyone involved",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "6c",
        text: "Acting with wisdom and good character",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "6d",
        text: "Balance between rules and outcomes",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "consequentialism", score: 15 }
        ]
      }
    ]
  },
  {
    id: 7,
    question: "When faced with an ethical dilemma online, what guides your decision-making?",
    options: [
      {
        id: "7a",
        text: "Universal principles that should apply to everyone",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "7b",
        text: "The potential impact on all stakeholders",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "7c",
        text: "What a person of good character would do",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "7d",
        text: "Platform guidelines and community standards",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ]
      }
    ]
  },
  {
    id: 8,
    question: "What matters most to you when sharing personal information online?",
    options: [
      {
        id: "8a",
        text: "Following strict privacy principles regardless of circumstances",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "8b",
        text: "The potential benefits vs risks for everyone involved",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "8c",
        text: "Being authentic and maintaining integrity",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "8d",
        text: "What feels right based on personal values",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      }
    ]
  },
  {
    id: 9,
    question: "How do you approach digital conflict resolution?",
    options: [
      {
        id: "9a",
        text: "Follow established community guidelines strictly",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "9b",
        text: "Find solutions that benefit the most people",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "9c",
        text: "Act with wisdom and compassion",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "9d",
        text: "Mediate based on fairness principles",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "virtue", score: 15 }
        ]
      }
    ]
  },
  {
    id: 10,
    question: "What best describes your view on digital ethics?",
    options: [
      {
        id: "10a",
        text: "There are universal rules we should all follow online",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "10b",
        text: "The right action is what creates the most good for the most people",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "10c",
        text: "Being a good digital citizen is about developing character",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "10d",
        text: "Balance between rules and personal judgment",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "virtue", score: 15 }
        ]
      }
    ]
  }
];
