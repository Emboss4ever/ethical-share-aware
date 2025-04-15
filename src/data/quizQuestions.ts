
import { QuizQuestionSet } from "@/types/ethics";
import { socialMediaQuestions } from "./quiz/socialMediaQuestions";
import { ethicalQuestions } from "./quiz/ethicalQuestions";
import { generalEthicsQuestions } from "./quiz/generalEthicsQuestions";

// Main social media quiz
export const socialMediaQuiz: QuizQuestionSet = [
  ...socialMediaQuestions,
  ...ethicalQuestions
];

// Optional general ethics quiz
export const generalEthicsQuiz: QuizQuestionSet = generalEthicsQuestions;

// Default quiz (for backwards compatibility)
export const quizQuestions = socialMediaQuiz;
