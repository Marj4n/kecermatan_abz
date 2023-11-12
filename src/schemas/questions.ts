import { z } from "zod";

export const getQuestionsSchema = z.object({
  topic: z.string(),
  amount: z.number().int().positive().min(1).max(10),
  type: z.enum(["mcq", "open_ended"]),
});

export const checkAnswerSchema = z.object({
  userInput: z.string(),
  questionId: z.string(),
});

export const endGameSchema = z.object({
  gameId: z.string(),
}); 

export const questionSchema = z.object({
  question: z.string(),
  answer: z.string(),
  options: z.array(z.string()).optional(),
  questionType: z.enum(["mcq", "open_ended"]),
});
