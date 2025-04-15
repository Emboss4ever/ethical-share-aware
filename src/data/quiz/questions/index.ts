
import { QuizQuestionSet } from "@/types/ethics";
import { frequencyQuestions } from "./frequency";
import { privacyQuestions } from "./privacy";
import { connectionQuestions } from "./connections";
import { contentQuestions } from "./content";
import { sharingQuestions } from "./sharing";
import { metadataQuestions } from "./metadata";
import { metadataAwarenessQuestions } from "./metadata-awareness";
import { securityAwarenessQuestions } from "./security-awareness";
import { visualPrivacyQuestions } from "./visual-privacy";
import { digitalFootprintQuestions } from "./digital-footprint";

export const socialMediaQuestions: QuizQuestionSet = [
  ...frequencyQuestions,
  ...privacyQuestions,
  ...connectionQuestions,
  ...contentQuestions,
  ...sharingQuestions,
  ...metadataQuestions,
  ...metadataAwarenessQuestions,
  ...securityAwarenessQuestions,
  ...visualPrivacyQuestions,
  ...digitalFootprintQuestions
];
