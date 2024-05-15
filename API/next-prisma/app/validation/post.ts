import { z } from "zod";

export const PostCreateSchema = z.object({
  title: z.string().min(3).max(250),
  content: z.string().optional(),
});

export type PostCreate = z.infer<typeof PostCreateSchema>;
