import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name must contain at least 3 characters'),

    email: z
      .string()
      .email({
        message: 'Invalid email format',
      }),

    password: z
      .string()
      .min(8, {
        message:
          'Password must be at least 8 characters',
      })
      .regex(/[A-Z]/, {
        message:
          'Password must contain at least one uppercase letter',
      })
      .regex(/[a-z]/, {
        message:
          'Password must contain at least one lowercase letter',
      })
      .regex(/[0-9]/, {
        message:
          'Password must contain at least one number',
      })
      .regex(/[@$!%*?&]/, {
        message:
          'Password must contain at least one special character',
      }),


    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type RegisterSchemaType = z.infer<typeof registerSchema>;