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
        ],
        considerations: "Frequent posting may lead to oversharing personal information and could impact your digital footprint. Consider the long-term implications of maintaining such an active online presence.",
        positiveAspect: "Helps maintain strong social connections and regular engagement with your community."
      },
      {
        id: "1b",
        text: "Once daily",
        scoring: [
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "Daily updates still require careful content curation and awareness of your audience's preferences.",
        positiveAspect: "Provides consistent engagement while maintaining a balanced approach to social media use."
      },
      {
        id: "1c",
        text: "A few times per week",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "Even less frequent posting requires attention to privacy settings and content appropriateness.",
        positiveAspect: "Allows for more thoughtful and meaningful content sharing."
      },
      {
        id: "1d",
        text: "Only when something significant happens",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "Important to maintain privacy awareness even with occasional posts, as significant events might involve sensitive information.",
        positiveAspect: "Focuses on quality over quantity and maintains authenticity in online presence."
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
        ],
        considerations: "Public posts can expose personal information to a wider audience, which may not be appropriate for all situations.",
        positiveAspect: "Allows for easy sharing of content and can be useful for reaching a broad audience."
      },
      {
        id: "2b",
        text: "Friends only",
        scoring: [
          { framework: "duty", score: 20 }
        ],
        considerations: "Friends-only posts provide a more controlled environment for sharing content, but may limit visibility.",
        positiveAspect: "Maintains privacy and control over who can see your posts."
      },
      {
        id: "2c",
        text: "Custom lists based on content type",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "Custom lists allow for more targeted sharing of content, but may require careful consideration of who to include.",
        positiveAspect: "Balances privacy and control over who can see your posts."
      },
      {
        id: "2d",
        text: "Mostly private with occasional public posts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "A mix of private and public posts allows for a balance between privacy and visibility, but requires careful consideration of who to share with.",
        positiveAspect: "Maintains privacy while still allowing for some public sharing."
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
        ],
        considerations: "Accepting everyone can lead to a large number of followers, which may not be appropriate for all situations.",
        positiveAspect: "Maintains a large following and can be useful for reaching a broad audience."
      },
      {
        id: "3b",
        text: "Only people I know in real life",
        scoring: [
          { framework: "duty", score: 30 }
        ],
        considerations: "Only accepting people you know in real life can limit your network and make it harder to connect with others.",
        positiveAspect: "Maintains privacy and control over who can see your posts."
      },
      {
        id: "3c",
        text: "Based on mutual connections and profile review",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "Based on mutual connections and profile review can help maintain a balanced network of followers.",
        positiveAspect: "Balances privacy and control over who can see your posts."
      },
      {
        id: "3d",
        text: "Strict verification process",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "virtue", score: 10 }
        ],
        considerations: "A strict verification process can help maintain a balanced network of followers and ensure that only appropriate people are connected.",
        positiveAspect: "Balances privacy and control over who can see your posts."
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
