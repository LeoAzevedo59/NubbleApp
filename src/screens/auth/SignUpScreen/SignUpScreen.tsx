import React from 'react';

import {RootStackParamList} from '@routes';
import {useReactNavigationSuccess} from '@hooks';
import {
  Screen,
  Text,
  Button,
  FormTextInput,
  FormPasswordInput,
} from '@components';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';
import {signUpValidation, SignUpValidationType} from './signUpValidation';
import {zodResolver} from '@hookform/resolvers/zod';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useReactNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpValidationType>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpValidationType) {
    console.log(formValues);

    reset({
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
      icon: {
        name: 'checkRound',
        color: 'success',
        size: 48,
      },
    });
  }

  return (
    <Screen canGoBack scrollable>
      <Text bold preset="headingLarge">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="userName"
        label="Seu username"
        placeholder="@"
        boxProps={{marginTop: 's32'}}
      />

      <FormTextInput
        control={control}
        name="fullName"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        autoCapitalize="words"
        boxProps={{marginTop: 's16'}}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{marginTop: 's16'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{marginTop: 's16'}}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Criar minha conta"
      />
    </Screen>
  );
}
