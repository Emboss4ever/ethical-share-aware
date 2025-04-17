
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
    potentialVulnerabilities: "Rigid adherence to rules without considering context can lead to <a href='/risks/osint'>OSINT vulnerabilities</a>. For example, consistently using the same platforms and posting patterns creates predictable digital footprints that are easier to track and exploit."
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
    potentialVulnerabilities: "Focusing solely on engagement and reach can lead to <a href='/risks/identity-theft'>identity theft risks</a>. Sharing personal details for likes and comments might maximize short-term social outcomes but creates a rich dataset for malicious actors to exploit."
  },
  {
    id: "virtue",
    name: "Virtue Ethics",
    description: "Emphasizes developing good character traits that guide ethical behavior. Focuses on being a good person rather than following rules or calculating consequences.",
    principles: [
      "Cultivate moral character",
      "Practice wisdom and judgment",
      "Show integrity and honesty",
      "Demonstrate courage and compassion"
    ],
    potentialVulnerabilities: "Excessive authenticity without boundaries can increase vulnerability to <a href='/risks/deepfakes'>deepfake exploitation</a>. Sharing too many authentic photos and videos provides abundant training data for AI to create convincing synthetic media of you."
  }
];
