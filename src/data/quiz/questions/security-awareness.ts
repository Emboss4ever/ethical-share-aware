
import { QuizQuestionSet } from "@/types/ethics";

export const securityAwarenessQuestions: QuizQuestionSet = [
  {
    id: 10,
    question: "When someone messages me claiming to be an old friend:",
    options: [
      {
        id: "10a",
        text: "I engage immediately if they seem familiar",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "virtue", score: -20 }
        ],
        considerations: "This approach significantly increases your vulnerability to <a href='/risks/identity-theft' class='underline'>identity theft</a> and social engineering attacks. Impersonation is a common tactic used to gather personal information."
      },
      {
        id: "10b",
        text: "I verify their identity through mutual connections",
        scoring: [
          { framework: "duty", score: 30 },
          { framework: "virtue", score: 20 }
        ],
        considerations: "This verification process is an excellent defense against <a href='/risks/identity-theft' class='underline'>identity theft attempts</a> and scams. Confirming identity through trusted channels is a strong security practice."
      },
      {
        id: "10c",
        text: "I ignore all unexpected connection attempts",
        scoring: [
          { framework: "virtue", score: 10 },
          { framework: "duty", score: 20 }
        ],
        considerations: "While this approach provides strong protection against <a href='/risks/identity-theft' class='underline'>identity theft</a>, it might occasionally miss legitimate connections. Still, it's generally a safer default position."
      },
      {
        id: "10d",
        text: "I share limited information while building trust",
        scoring: [
          { framework: "consequentialism", score: 10 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "This approach creates moderate <a href='/risks/osint' class='underline'>OSINT vulnerability</a> as even limited information can be exploited. Gradual information sharing is still risky without proper verification."
      }
    ]
  },
  {
    id: 11,
    question: "If I notice subtle changes in a friend's online behavior:",
    options: [
      {
        id: "11a",
        text: "I assume they're exploring new interests",
        scoring: [
          { framework: "consequentialism", score: -20 },
          { framework: "virtue", score: -10 }
        ],
        considerations: "This passive approach increases vulnerability to <a href='/risks/identity-theft' class='underline'>identity theft</a> by not recognizing potential account compromises. Behavioral changes can indicate hacked accounts being used for scams."
      },
      {
        id: "11b",
        text: "I privately verify their well-being",
        scoring: [
          { framework: "virtue", score: 30 },
          { framework: "duty", score: 20 }
        ],
        considerations: "This thoughtful approach helps protect your network from <a href='/risks/identity-theft' class='underline'>identity theft</a> and scams by detecting compromised accounts early through verification."
      },
      {
        id: "11c",
        text: "I report suspicious activity to platforms",
        scoring: [
          { framework: "duty", score: 20 },
          { framework: "consequentialism", score: 10 }
        ],
        considerations: "This responsible approach helps combat <a href='/risks/deepfakes' class='underline'>deepfake usage</a> and account compromises by alerting platforms to investigate potential security issues."
      },
      {
        id: "11d",
        text: "I publicly question the changes",
        scoring: [
          { framework: "consequentialism", score: -30 },
          { framework: "virtue", score: -20 }
        ],
        considerations: "This approach could actually assist attackers by providing public information about relationship dynamics that could be exploited for <a href='/risks/osint' class='underline'>OSINT attacks</a>."
      }
    ]
  }
];
