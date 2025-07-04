import { z } from "zod";

export const authSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(4),
});

export type AuthSchemaType = z.infer<typeof authSchema>;
