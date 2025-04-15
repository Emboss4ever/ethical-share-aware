
export interface EthicalFramework {
  id: string;
  name: string;
  description: string;
  principles: string[];
  socialMediaExample: string;
}

export const ethicalFrameworks: EthicalFramework[] = [
  {
    id: "consent",
    name: "Consent Ethics",
    description: "Focuses on obtaining explicit permission before actions that affect others.",
    principles: [
      "Always seek informed consent",
      "Respect others' right to choose",
      "Be transparent about intentions",
      "Accept refusal gracefully"
    ],
    socialMediaExample: "Getting permission before tagging someone in photos or sharing their personal information."
  },
  {
    id: "consequentialism",
    name: "Consequentialism",
    description: "Evaluates actions based on their outcomes rather than intentions.",
    principles: [
      "Consider the full impact of your posts",
      "Weigh potential benefits against harms",
      "Think about long-term consequences",
      "Prioritize actions that benefit many"
    ],
    socialMediaExample: "Deciding not to share a controversial joke because it might harm relationships or offend others, despite your innocent intentions."
  },
  {
    id: "virtue",
    name: "Virtue Ethics",
    description: "Emphasizes developing good character traits that guide ethical behavior.",
    principles: [
      "Act with honesty and integrity",
      "Practice empathy and compassion",
      "Demonstrate courage in standing for truth",
      "Show moderation in self-promotion"
    ],
    socialMediaExample: "Being honest about your experiences rather than creating a false impression to gain followers."
  },
  {
    id: "duty",
    name: "Duty Ethics (Deontology)",
    description: "Focuses on following moral rules and obligations regardless of outcomes.",
    principles: [
      "Uphold universal principles",
      "Act as you would want everyone to act",
      "Treat people as ends, not means",
      "Follow ethical rules consistently"
    ],
    socialMediaExample: "Not sharing fake news even if it would benefit your cause, because spreading misinformation is wrong in principle."
  },
  {
    id: "care",
    name: "Ethics of Care",
    description: "Emphasizes relationships and responding to the needs of others with compassion.",
    principles: [
      "Prioritize caring relationships",
      "Consider emotional impacts",
      "Act with empathy and compassion",
      "Recognize interdependence"
    ],
    socialMediaExample: "Checking in privately with a friend who seems to be struggling based on their posts, rather than publicly commenting."
  },
  {
    id: "social_contract",
    name: "Social Contract Ethics",
    description: "Based on implicit agreements that maintain social harmony and community standards.",
    principles: [
      "Follow platform community guidelines",
      "Respect cultural and social norms",
      "Contribute positively to communities",
      "Balance individual freedom with collective well-being"
    ],
    socialMediaExample: "Adhering to the unwritten rules of different platforms (e.g., professional content on LinkedIn versus casual posts on Instagram)."
  },
  {
    id: "libertarian",
    name: "Digital Libertarianism",
    description: "Emphasizes freedom of expression and minimal restrictions online.",
    principles: [
      "Maximize free expression",
      "Take personal responsibility",
      "Minimize censorship",
      "Value privacy and autonomy"
    ],
    socialMediaExample: "Sharing your unfiltered opinions while accepting that others may criticize or disagree with you."
  }
];
