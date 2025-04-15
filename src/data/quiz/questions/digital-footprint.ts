
import { QuizQuestionSet } from "@/types/ethics";

export const digitalFootprintQuestions: QuizQuestionSet = [
  {
    id: 13,
    question: "Regarding my personal information visible online:",
    options: [
      {
        id: "13a",
        text: "I regularly search and audit my digital presence",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "This proactive approach significantly reduces <a href='/risks/osint' class='underline'>OSINT vulnerability</a> by allowing you to identify and address information leaks before they can be exploited."
      },
      {
        id: "13b",
        text: "I only worry when something happens",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "This reactive approach substantially increases risks of <a href='/risks/identity-theft' class='underline'>identity theft</a> as personal information may be exposed and exploited long before you become aware."
      },
      {
        id: "13c",
        text: "I maintain multiple separate online identities",
        scoring: [
          { framework: "virtue", score: 20 },
          { framework: "duty", score: 10 }
        ],
        considerations: "This compartmentalization approach reduces <a href='/risks/data-theft' class='underline'>data theft risks</a> by limiting the connections between your different spheres of activity, making comprehensive profiling more difficult."
      },
      {
        id: "13d",
        text: "I share everything openly for transparency",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "duty", score: -20 }
        ],
        considerations: "This approach creates extremely high <a href='/risks/osint' class='underline'>OSINT vulnerability</a> and significantly increases risks of <a href='/risks/identity-theft' class='underline'>identity theft</a>. Complete transparency provides attackers with abundant exploitable information."
      }
    ]
  }
];
