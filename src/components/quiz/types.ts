
export interface ResultScore {
  frameworkId: string;
  score: number;
  percentage: number;
}

export interface ScoringRule {
  type: 'primary' | 'secondary' | 'neutral' | 'conflict';
  points: number;
}

export const scoringRules: Record<string, number> = {
  primary: 20,
  secondary: 10,
  neutral: 0,
  conflict: -20
};
