import {z} from 'zod';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;

export const signUpValidation = z.object({
  userName: z
    .string()
    .trim()
    .regex(userNameRegex, 'username inválido.')
    .toLowerCase(),
  fullName: z
    .string()
    .trim()
    .min(5, 'Necessário informar um nome maior que 5 caracteres')
    .max(50, 'Nome é necessário ser menor que 50 caracteres')
    .transform(value => {
      return value
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
    }),
  email: z.string().trim().email('e-mail inválido'),
  password: z
    .string()
    .trim()
    .min(8, 'Necessário informar uma senha maior que 8 caracteres'),
});

export type SignUpValidationType = z.infer<typeof signUpValidation>;
