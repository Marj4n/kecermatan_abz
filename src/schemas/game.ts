import { z } from "zod";
import { questionSchema } from "./questions";

export const gameCreationSchema = z.object({
  token: z.string().optional(),
  duration: z.number().int().positive().min(900).max(7200).optional(), // 15 menit (900 detik) hingga 2 jam (7200 detik)
  name: z.string().min(3).max(255),
  questions: z.array(questionSchema),
});
