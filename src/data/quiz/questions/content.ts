
import { QuizQuestionSet } from "@/types/ethics";

export const contentQuestions: QuizQuestionSet = [
  {
    id: 4,
    question: "What type of content do you most frequently share?",
    options: [
      {
        id: "4a",
        text: "Personal achievements and milestones",
        scoring: [
          { framework: "consequentialism", score: 20 }
        ],
        considerations: "Sharing personal achievements can help maintain a strong online presence and can be useful for building relationships with others.",
        positiveAspect: "Helps maintain a strong online presence and can be useful for building relationships with others."
      },
      {
        id: "4b",
        text: "Educational/informative content",
        scoring: [
          { framework: "virtue", score: 30 }
        ],
        considerations: "Educational/informative content can be useful for building a reputation as a knowledgeable and helpful individual.",
        positiveAspect: "Educational/informative content can be useful for building a reputation as a knowledgeable and helpful individual."
      },
      {
        id: "4c",
        text: "Entertainment and humor",
        scoring: [
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "Entertainment and humor can be useful for maintaining a positive online presence, but may not be appropriate for all situations.",
        positiveAspect: "Entertainment and humor can be useful for maintaining a positive online presence, but may not be appropriate for all situations."
      },
      {
        id: "4d",
        text: "Social/political commentary",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ],
        considerations: "Social/political commentary can be useful for building a reputation as a thoughtful and engaged individual.",
        positiveAspect: "Social/political commentary can be useful for building a reputation as a thoughtful and engaged individual."
      }
    ]
  }
];
