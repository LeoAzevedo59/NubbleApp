import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function SignUpScreen({}: ScreenProps) {
  function onSubmit() {}

  return (
    <Screen canGoBack scrollable>
      <Text bold preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput
        placeholder="@"
        label="Seu username"
        boxProps={{marginTop: 's32'}}
      />
      <TextInput
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{marginTop: 's16'}}
      />
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{marginTop: 's16'}}
      />
      <PasswordInput
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{marginTop: 's16'}}
      />
      <Button onPress={onSubmit} marginTop="s48" title="Criar minha conta" />
    </Screen>
  );
}
