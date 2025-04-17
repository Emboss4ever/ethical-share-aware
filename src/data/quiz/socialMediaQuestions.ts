
import { QuizQuestionSet } from "@/types/ethics";
import { frequencyQuestions } from './questions/frequency';
import { privacyQuestions } from './questions/privacy';
import { connectionQuestions } from './questions/connections';
import { contentQuestions } from './questions/content';
import { sharingQuestions } from './questions/sharing';
import { metadataQuestions } from './questions/metadata';
import { metadataAwarenessQuestions } from './questions/metadata-awareness';

export const socialMediaQuestions: QuizQuestionSet = [
  ...frequencyQuestions,
  ...privacyQuestions,
  ...connectionQuestions,
  ...contentQuestions,
  ...sharingQuestions,
  ...metadataQuestions,
  ...metadataAwarenessQuestions
];
