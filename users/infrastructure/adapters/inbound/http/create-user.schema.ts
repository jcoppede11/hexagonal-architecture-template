import { z } from "zod";

export const createUserSchema = z.object({
    firstName: z.string().trim().min(1),
    lastName: z.string().trim().min(1),
    email: z.email(),
});

export type CreateUserDto = z.infer<typeof createUserSchema>;
