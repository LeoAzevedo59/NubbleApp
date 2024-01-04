import React from 'react';

import {Screen} from '../../../components/Screen/Screen';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {useReactNavigationSuccess} from '../../../hooks/useReactNavigationSuccess';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {ForgotPasswordType, forgotPassword} from './forgotPasswordValidation';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({}: ScreenProps) {
  const {reset} = useReactNavigationSuccess();

  function submitForm() {
    console.log('submit');

    reset({
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
        size: 48,
      },
    });
  }

  const {control, formState, handleSubmit} = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPassword),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });

  return (
    <Screen canGoBack>
      <Text preset="headingLarge">Esqueci minha senha</Text>
      <Text marginTop="s16" preset="paragraphLarge">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginTop: 's16'}}
      />
      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Recuperar senha"
      />
    </Screen>
  );
}
