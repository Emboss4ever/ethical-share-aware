
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
          { framework: "consequentialism", score: 20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "Frequent posting helps maintain strong social connections but significantly increases your digital footprint. This frequency makes you more vulnerable to <a href='/risks#osint'>OSINT attacks</a> through pattern analysis and can provide substantial data for potential <a href='/risks#identity-theft'>identity theft</a>."
      },
      {
        id: "1b",
        text: "Once daily",
        scoring: [
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "Daily updates provide consistent engagement while requiring careful content curation. Consider that regular posting still creates a significant dataset for <a href='/risks#data-theft'>data collection and analysis</a>."
      },
      {
        id: "1c",
        text: "A few times per week",
        scoring: [
          { framework: "duty", score: 10 }
        ],
        considerations: "This moderate frequency allows for more thoughtful content sharing while reducing your vulnerability to <a href='/risks#osint'>OSINT collection</a> and automated data harvesting."
      },
      {
        id: "1d",
        text: "Only when something significant happens",
        scoring: [
          { framework: "virtue", score: 20 }
        ],
        considerations: "This approach minimizes your digital footprint and reduces exposure to <a href='/risks#data-theft'>privacy breaches</a>, though important events might still need careful consideration regarding personal information disclosure."
      }
    ]
  }
];
