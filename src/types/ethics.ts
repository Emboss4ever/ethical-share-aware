
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

export interface QuizOption {
  id: string;
  text: string;
  scoring: {
    framework: string;
    score: number;
  }[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

export type QuizQuestionSet = QuizQuestion[];

