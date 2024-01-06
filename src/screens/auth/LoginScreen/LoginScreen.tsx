import React from 'react';
import {Alert} from 'react-native';

import {zodResolver} from '@hookform/resolvers/zod';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  Screen,
  FormPasswordInput,
  FormTextInput,
} from '@components';
import {AuthStackParamList} from '@routes';

import {loginValidation, LoginValidationType} from './loginValidation';

type ScreenProps = NativeStackScreenProps<AuthStackParamList, 'LoginScreen'>;

export function LoginScreen({navigation}: ScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigationToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  const {control, formState, handleSubmit} = useForm<LoginValidationType>({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm({email, password}: LoginValidationType) {
    Alert.alert(email, password);
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text marginBottom="s40" preset="paragraphLarge">
        Digite seu e-mail e senha para entrar
      </Text>

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

      <Text
        onPress={navigationToForgotPasswordScreen}
        preset="paragraphSmall"
        bold
        color="greenPrimary">
        Esqueci minha senha
      </Text>

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        marginTop="s48"
        title="Entrar"
      />
      <Button
        onPress={navigateToSignUpScreen}
        marginTop="s12"
        preset="outline"
        title="Criar uma conta"
      />
    </Screen>
  );
}
