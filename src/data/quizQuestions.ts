
export interface QuizQuestion {
  id: number;
  question: string;
  options: Array<{
    id: string;
    text: string;
    framework: string;
    score: number;
  }>;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Before posting a photo of friends, you typically:",
    options: [
      {
        id: "1a",
        text: "Post it immediately if it looks good",
        framework: "consequentialism",
        score: 1
      },
      {
        id: "1b",
        text: "Ask everyone in the photo for permission first",
        framework: "consent",
        score: 3
      },
      {
        id: "1c",
        text: "Only ask close friends, assume others are fine with it",
        framework: "virtue",
        score: 2
      },
      {
        id: "1d",
        text: "Consider what's appropriate based on your platform's community norms",
        framework: "social_contract",
        score: 2
      }
    ]
  },
  {
    id: 2,
    question: "When sharing content about a controversial topic, you:",
    options: [
      {
        id: "2a",
        text: "Share your opinions freely – social media is for self-expression",
        framework: "libertarian",
        score: 1
      },
      {
        id: "2b",
        text: "Consider how your words might impact different groups of people",
        framework: "care",
        score: 3
      },
      {
        id: "2c",
        text: "Research thoroughly to ensure accuracy before posting",
        framework: "virtue",
        score: 3
      },
      {
        id: "2d",
        text: "Think about whether sharing will lead to a productive conversation",
        framework: "consequentialism",
        score: 2
      }
    ]
  },
  {
    id: 3,
    question: "If you're going to share news or information, you typically:",
    options: [
      {
        id: "3a",
        text: "Share quickly to be the first - you can always delete if it's wrong",
        framework: "consequentialism",
        score: 1
      },
      {
        id: "3b",
        text: "Check multiple reliable sources before sharing",
        framework: "virtue",
        score: 3
      },
      {
        id: "3c",
        text: "Share only from official or well-known sources",
        framework: "duty",
        score: 2
      },
      {
        id: "3d",
        text: "Add your own disclaimer about potential accuracy issues",
        framework: "social_contract",
        score: 2
      }
    ]
  },
  {
    id: 4,
    question: "When it comes to privacy settings on your accounts:",
    options: [
      {
        id: "4a",
        text: "Everything is public - you have nothing to hide",
        framework: "libertarian",
        score: 1
      },
      {
        id: "4b",
        text: "You carefully customize settings for different types of content",
        framework: "consent",
        score: 3
      },
      {
        id: "4c",
        text: "Your accounts are mostly private, with exceptions for specific content",
        framework: "care",
        score: 2
      },
      {
        id: "4d",
        text: "You use defaults and adjust when there's a specific reason to",
        framework: "social_contract",
        score: 2
      }
    ]
  },
  {
    id: 5,
    question: "When you see misinformation in your feed, you usually:",
    options: [
      {
        id: "5a",
        text: "Ignore it - people can believe what they want",
        framework: "libertarian",
        score: 1
      },
      {
        id: "5b",
        text: "Politely comment with corrected information and sources",
        framework: "duty",
        score: 3
      },
      {
        id: "5c",
        text: "Report the content to the platform",
        framework: "social_contract",
        score: 2
      },
      {
        id: "5d",
        text: "Consider the poster's intent before deciding how to respond",
        framework: "virtue",
        score: 2
      }
    ]
  }
];
