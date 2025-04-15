import { QuizQuestionSet } from "@/types/ethics";

export const ethicalQuestions: QuizQuestionSet = [
  {
    id: 6,
    question: "[Ethics] When making moral decisions, which approach do you prefer?",
    options: [
      {
        id: "6a",
        text: "Following clear moral rules and universal principles",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "6b",
        text: "Evaluating outcomes and maximizing benefits for all",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "6c",
        text: "Acting with wisdom and virtuous character",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "6d",
        text: "Balancing principles with practical outcomes",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "consequentialism", score: 15 }
        ]
      }
    ]
  },
  {
    id: 7,
    question: "[Ethics] How do you typically approach ethical dilemmas?",
    options: [
      {
        id: "7a",
        text: "By referring to established moral principles",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "7b",
        text: "By analyzing potential consequences",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "7c",
        text: "By considering what a virtuous person would do",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "7d",
        text: "By following community standards and guidelines",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ]
      }
    ]
  },
  {
    id: 8,
    question: "[Ethics] What matters most in determining if an action is ethical?",
    options: [
      {
        id: "8a",
        text: "Whether it follows universal moral laws",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "8b",
        text: "The outcomes and impacts it produces",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "8c",
        text: "If it reflects good character and wisdom",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "8d",
        text: "How well it aligns with personal values",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ]
      }
    ]
  },
  {
    id: 9,
    question: "[Social Media] When deciding to share news or information, what guides your choice?",
    options: [
      {
        id: "9a",
        text: "Established fact-checking protocols",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "9b",
        text: "Potential impact on audience",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "9c",
        text: "Personal judgment and integrity",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "9d",
        text: "Platform guidelines and policies",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "virtue", score: 15 }
        ]
      }
    ]
  },
  {
    id: 10,
    question: "[Ethics] Which statement best describes your view on ethical decision-making?",
    options: [
      {
        id: "10a",
        text: "There are universal moral rules we must follow",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "consequentialism", score: -10 }
        ]
      },
      {
        id: "10b",
        text: "The right action is what creates the most good",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -10 }
        ]
      },
      {
        id: "10c",
        text: "Good character leads to right actions",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: -10 }
        ]
      },
      {
        id: "10d",
        text: "Balance between rules and consequences",
        scoring: [
          { framework: "duty", score: 15 },
          { framework: "consequentialism", score: 15 }
        ]
      }
    ]
  }
];
