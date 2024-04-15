/* Schema för validering med Zod */
import { z } from "zod";

export const TodoSchema = z
  .object({
    id: z.string(),
    title: z.string(),
    details: z.string().optional() /* Valfritt */,
  })
  .strict(); /* Strict om man inte vill kunna lägga till extra saker. */

export const TodoCreateSchema = TodoSchema.omit({ id: true });

export type Todo = z.infer<typeof TodoSchema>;
export type TodoCreate = z.infer<typeof TodoCreateSchema>;
