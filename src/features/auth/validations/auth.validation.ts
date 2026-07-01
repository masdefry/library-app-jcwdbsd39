import { z } from 'zod';

export const authLoginValidation = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required field' })
    .email({ message: 'Invalid email format' }),
  password: z.string().min(1, { message: 'Password is required field' }),
});

export type AuthLoginInput = z.infer<typeof authLoginValidation>