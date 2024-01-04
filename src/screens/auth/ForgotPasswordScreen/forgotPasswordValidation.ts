import {z} from 'zod';

export const forgotPassword = z.object({
  email: z.string().trim().email('e-mail inválido'),
});

export type ForgotPasswordType = z.infer<typeof forgotPassword>;
