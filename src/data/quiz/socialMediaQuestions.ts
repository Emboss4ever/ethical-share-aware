
import { QuizQuestionSet } from "@/types/ethics";
import { frequencyQuestions } from './questions/frequency';
import { privacyQuestions } from './questions/privacy';
import { connectionQuestions } from './questions/connections';
import { contentQuestions } from './questions/content';
import { visualPrivacyQuestions } from './questions/visual-privacy';

export const socialMediaQuestions: QuizQuestionSet = [
  ...frequencyQuestions,
  ...privacyQuestions,
  ...connectionQuestions,
  ...contentQuestions,
  ...visualPrivacyQuestions
];

