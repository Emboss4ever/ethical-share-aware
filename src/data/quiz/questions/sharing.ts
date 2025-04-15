
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
        considerations: "Adding disclaimers shows responsibility while allowing important discussions. This balanced approach helps manage risk while enabling meaningful dialogue on significant issues."
      },
      {
        id: "5b",
        text: "Avoid sharing entirely",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "This cautious approach minimizes risk and maintains professional relationships. While it may limit engagement with important issues, it helps preserve reputation and avoid potential conflicts."
      },
      {
        id: "5c",
        text: "Share only in private groups",
        scoring: [
          { framework: "consequentialism", score: 20 }
        ],
        considerations: "Sharing in private groups allows for more nuanced discussion while limiting exposure. This approach balances engagement with controversial topics against broader reputational concerns."
      },
      {
        id: "5d",
        text: "Evaluate each case individually",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "This thoughtful approach allows for nuanced decision-making based on context. It requires more effort but leads to more responsible content sharing."
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
        considerations: "This approach demonstrates strong respect for privacy and consent. While it may delay sharing time-sensitive content, it ensures everyone's comfort and rights are protected."
      },
      {
        id: "8b",
        text: "Share and remove if someone objects",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "duty", score: -10 }
        ],
        considerations: "This approach prioritizes quick sharing but risks violating privacy rights. While efficient, it may damage relationships if someone is uncomfortable with shared content."
      },
      {
        id: "8c",
        text: "Only share in private groups based on moral principles",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "This balanced approach protects privacy while enabling sharing within trusted circles. It respects relationships while maintaining the ability to share memories with relevant groups."
      },
      {
        id: "8d",
        text: "Tag everyone to maximize utility",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -20 }
        ],
        considerations: "While this maximizes engagement and visibility, it may violate privacy preferences. Consider that not everyone wants to be tagged or have their presence broadcast widely."
      }
    ]
  }
];
