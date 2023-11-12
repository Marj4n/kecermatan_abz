import { z } from "zod";

export const quizCreationSchema = z.object({
  token: z.string().optional(),
});
