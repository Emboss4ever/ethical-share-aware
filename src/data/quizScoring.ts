import { QuizScoring } from "@/types/ethics";

export const quizScoring: QuizScoring[] = [
  {
    questionId: 1,
    options: [
      {
        id: "1a",
        text: "Post it immediately if it looks good",
        framework: "consequentialism",
        explanation: "Prioritizes outcomes (social engagement) over consent"
      },
      {
        id: "1b",
        text: "Ask everyone in the photo for permission first",
        framework: "duty",
        explanation: "Follows the moral rule of respecting others' autonomy"
      },
      {
        id: "1c",
        text: "Only ask close friends, assume others are fine with it",
        framework: "virtue",
        explanation: "Relies on personal judgment and relationships"
      },
      {
        id: "1d",
        text: "Consider what's appropriate based on your platform's community norms",
        framework: "consequentialism",
        explanation: "Focuses on social outcomes and community impact"
      }
    ]
  },
  {
    questionId: 2,
    options: [
      {
        id: "2a",
        text: "Share your opinions freely – social media is for self-expression",
        framework: "consequentialism",
        explanation: "Prioritizes personal benefit over potential harm"
      },
      {
        id: "2b",
        text: "Consider how your words might impact different groups of people",
        framework: "consequentialism",
        explanation: "Evaluates actions based on their consequences"
      },
      {
        id: "2c",
        text: "Research thoroughly to ensure accuracy before posting",
        framework: "virtue",
        explanation: "Demonstrates intellectual virtue and responsibility"
      },
      {
        id: "2d",
        text: "Think about whether sharing will lead to a productive conversation",
        framework: "consequentialism",
        explanation: "Focuses on outcomes of the communication"
      }
    ]
  },
  {
    questionId: 3,
    options: [
      {
        id: "3a",
        text: "Share quickly to be the first - you can always delete if it's wrong",
        framework: "consequentialism",
        explanation: "Prioritizes immediate benefits over accuracy"
      },
      {
        id: "3b",
        text: "Check multiple reliable sources before sharing",
        framework: "virtue",
        explanation: "Shows diligence and commitment to truth"
      },
      {
        id: "3c",
        text: "Share only from official or well-known sources",
        framework: "duty",
        explanation: "Follows rule-based approach to information sharing"
      },
      {
        id: "3d",
        text: "Add your own disclaimer about potential accuracy issues",
        framework: "virtue",
        explanation: "Demonstrates honesty and transparency"
      }
    ]
  },
  {
    questionId: 4,
    options: [
      {
        id: "4a",
        text: "Everything is public - you have nothing to hide",
        framework: "consequentialism",
        explanation: "Values openness over privacy concerns"
      },
      {
        id: "4b",
        text: "You carefully customize settings for different types of content",
        framework: "duty",
        explanation: "Takes systematic approach to privacy protection"
      },
      {
        id: "4c",
        text: "Your accounts are mostly private, with exceptions for specific content",
        framework: "virtue",
        explanation: "Shows prudence in managing privacy"
      },
      {
        id: "4d",
        text: "You use defaults and adjust when there's a specific reason to",
        framework: "consequentialism",
        explanation: "Pragmatic approach based on specific situations"
      }
    ]
  },
  {
    questionId: 5,
    options: [
      {
        id: "5a",
        text: "Ignore it - people can believe what they want",
        framework: "consequentialism",
        explanation: "Avoids conflict but neglects responsibility"
      },
      {
        id: "5b",
        text: "Politely comment with corrected information and sources",
        framework: "duty",
        explanation: "Fulfills duty to promote truth"
      },
      {
        id: "5c",
        text: "Report the content to the platform",
        framework: "duty",
        explanation: "Follows established procedures for handling misinformation"
      },
      {
        id: "5d",
        text: "Consider the poster's intent before deciding how to respond",
        framework: "virtue",
        explanation: "Uses practical wisdom to choose appropriate response"
      }
    ]
  }
];
