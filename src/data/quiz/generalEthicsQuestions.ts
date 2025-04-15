
import { QuizQuestionSet } from "@/types/ethics";

export const generalEthicsQuestions: QuizQuestionSet = [
  {
    id: 1,
    question: "When making moral decisions, which approach do you prefer?",
    options: [
      {
        id: "g1a",
        text: "Following clear moral rules and universal principles",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "g1b",
        text: "Evaluating outcomes and maximizing benefits for all",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "g1c",
        text: "Acting with wisdom and virtuous character",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "g1d",
        text: "Balancing principles with practical outcomes",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "consequentialism", score: 15 }
        ]
      }
    ]
  },
  {
    id: 2,
    question: "How do you typically approach ethical dilemmas?",
    options: [
      {
        id: "g2a",
        text: "By referring to established moral principles",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "g2b",
        text: "By analyzing potential consequences",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "g2c",
        text: "By considering what a virtuous person would do",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "g2d",
        text: "By following community standards and guidelines",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ]
      }
    ]
  },
  {
    id: 3,
    question: "What matters most in determining if an action is ethical?",
    options: [
      {
        id: "g3a",
        text: "Whether it follows universal moral laws",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "g3b",
        text: "The outcomes and impacts it produces",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "g3c",
        text: "If it reflects good character and wisdom",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "g3d",
        text: "How well it aligns with personal values",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      }
    ]
  },
  {
    id: 4,
    question: "Which statement best describes your view on ethical decision-making?",
    options: [
      {
        id: "g4a",
        text: "There are universal moral rules we must follow",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "g4b",
        text: "The right action is what creates the most good",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "g4c",
        text: "Good character leads to right actions",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "g4d",
        text: "Balance between rules and consequences",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "consequentialism", score: 15 }
        ]
      }
    ]
  },
  {
    id: 5,
    question: "In a conflict between doing what is legally required and what you believe is morally right, what would you do?",
    options: [
      {
        id: "g5a",
        text: "Follow the law, as rules exist for a reason",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "g5b",
        text: "Do what produces the best outcome for most people",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -20 }
        ]
      },
      {
        id: "g5c",
        text: "Act according to your moral character and wisdom",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "g5d",
        text: "Seek a compromise that respects the law while minimizing moral harm",
        scoring: [
          { framework: "duty", score: 10 },
          { framework: "consequentialism", score: 10 },
          { framework: "virtue", score: 10 }
        ]
      }
    ]
  }
];
