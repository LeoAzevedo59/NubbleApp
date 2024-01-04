import {z} from 'zod';

export const loginValidation = z.object({
  email: z.string().trim().email('e-mail inválido'),
  password: z
    .string()
    .trim()
    .min(8, 'Necessário informar uma senha maior que 8 caracteres'),
});

export type LoginValidationType = z.infer<typeof loginValidation>;
