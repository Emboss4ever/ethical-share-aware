
import { EthicalFramework } from "@/types/ethics";

export const ethicalFrameworks: EthicalFramework[] = [
  {
    id: "duty",
    name: "Deontology (Duty Ethics)",
    description: "Focuses on following moral rules and obligations regardless of outcomes. Actions are judged by their inherent rightness or wrongness based on universal principles.",
    principles: [
      "Follow moral rules consistently",
      "Act according to universal principles",
      "Respect individual rights and dignity",
      "Fulfill your duties and obligations"
    ],
    socialMediaExample: "Not sharing fake news even if it would benefit your cause, because spreading misinformation violates the principle of truthfulness."
  },
  {
    id: "consequentialism",
    name: "Consequentialism",
    description: "Evaluates actions based on their outcomes rather than intentions. The right action is the one that produces the best overall consequences.",
    principles: [
      "Consider the full impact of actions",
      "Maximize beneficial outcomes",
      "Balance individual and collective good",
      "Think about long-term effects"
    ],
    socialMediaExample: "Deciding not to share a controversial joke because it might harm relationships or offend others, despite innocent intentions."
  },
  {
    id: "virtue ethics",
    name: "Virtue Ethics",
    description: "Emphasizes developing good character traits that guide ethical behavior. Focuses on being a good person rather than following rules or calculating consequences.",
    principles: [
      "Cultivate moral character",
      "Practice wisdom and judgment",
      "Show integrity and honesty",
      "Demonstrate courage and compassion"
    ],
    socialMediaExample: "Being authentic and honest about your experiences rather than creating a false impression to gain followers."
  }
];
