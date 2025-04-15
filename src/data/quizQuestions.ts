
import { QuizQuestionSet } from "@/types/ethics";
import { socialMediaQuestions } from "./quiz/socialMediaQuestions";
import { ethicalQuestions } from "./quiz/ethicalQuestions";

export const quizQuestions: QuizQuestionSet = [
  ...socialMediaQuestions,
  ...ethicalQuestions
];
