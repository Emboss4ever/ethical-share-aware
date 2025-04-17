
import { QuizQuestionSet } from "@/types/ethics";
import { frequencyQuestions } from "./frequency";
import { privacyQuestions } from "./privacy";
import { connectionQuestions } from "./connections";
import { contentQuestions } from "./content";
import { sharingQuestions } from "./sharing";
import { metadataQuestions } from "./metadata";
import { metadataAwarenessQuestions } from "./metadata-awareness";
// Removed: securityAwarenessQuestions, visualPrivacyQuestions, digitalFootprintQuestions

export const socialMediaQuestions: QuizQuestionSet = [
  ...frequencyQuestions,
  ...privacyQuestions,
  ...connectionQuestions,
  ...contentQuestions,
  ...sharingQuestions,
  ...metadataQuestions,
  ...metadataAwarenessQuestions,
];
