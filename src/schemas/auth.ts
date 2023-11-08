import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  password: z.string().min(8).max(255),
  dateOfBirth: z.date().optional().optional(),
  role: z.enum(["Admin", "User"]).optional(),
  gender: z.enum(["Male", "Female"]),
  department: z.string().min(3).max(255).optional(),
});
export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(255),
});
