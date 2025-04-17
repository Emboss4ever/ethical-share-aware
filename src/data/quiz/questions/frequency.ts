
import { QuizQuestionSet } from "@/types/ethics";

export const frequencyQuestions: QuizQuestionSet = [
  {
    id: 1,
    question: "How often do you post on social media?",
    options: [
      {
        id: "1a",
        text: "Multiple times per day",
        scoring: [
          { framework: "consequentialism", score: 30 },
          { framework: "virtue", score: -20 }
        ],
        considerations: "Frequent posting significantly increases your vulnerability to <a href='/risks/osint'>OSINT collection</a> by providing abundant data points for pattern analysis. This behavior also heightens risk of <a href='/risks/identity-theft'>identity theft</a> through timeline analysis and personal detail accumulation. Additionally, frequent updates provide more training data for <a href='/risks/deepfakes'>deepfake generation</a>."
      },
      {
        id: "1b",
        text: "A few times per week",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "This moderate frequency reduces your vulnerability to <a href='/risks/osint'>OSINT collection</a> and automated <a href='/risks/data-theft'>data harvesting</a>. The reduced frequency makes it harder for malicious actors to build accurate patterns of your behavior or daily routines."
      },
      {
        id: "1c",
        text: "Only when something significant happens",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: 10 }
        ],
        considerations: "This minimal approach significantly reduces risks of <a href='/risks/data-theft'>privacy breaches</a> and <a href='/risks/osint'>OSINT exploitation</a>. However, when sharing significant events, extra caution is needed as these posts often contain more sensitive personal information that could be valuable for <a href='/risks/identity-theft'>identity theft</a>."
      },
      {
        id: "1d",
        text: "Never",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "By choosing not to post, you completely eliminate risks associated with <a href='/risks/osint'>online information exposure</a>, <a href='/risks/identity-theft'>digital identity theft</a>, and <a href='/risks/data-theft'>personal data collection</a>. This approach maximizes privacy protection."
      }
    ]
  }
];
