
export interface EthicalFramework {
  id: string;
  name: string;
  description: string;
  principles: string[];
  socialMediaExample: string;
}

export interface QuizScoring {
  questionId: number;
  options: {
    id: string;
    text: string;
    framework: string;
    explanation: string;
  }[];
}
