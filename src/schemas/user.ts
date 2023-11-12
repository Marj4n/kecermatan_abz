import { z } from "zod";

export const userSchema = z.object({
  name: z.string().optional(),
  email: z.string().email(),
  password: z.string(),
  role: z.enum(["user", "admin"]).default("user"),
  dateOfBirth: z.string().optional(),
  gender: z.enum(["Male", "Female"]).optional(),
  department: z.string().optional(),
});
