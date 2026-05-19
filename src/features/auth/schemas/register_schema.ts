import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must contain at least 3 characters'),

    email: z.email('Invalid email address'),

    password: z
      .string()
      .min(6, 'Password must contain at least 6 characters'),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;