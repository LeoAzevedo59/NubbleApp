import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';

export function SignUpScreen() {
  function onSubmit() {}

  return (
    <Screen>
      <Text bold preset="headingLarge">
        Criar uma conta
      </Text>
      <TextInput
        placeholder="@"
        label="Seu username"
        boxProps={{marginTop: 's32'}}
        errorMessage="Digite um username válido"
      />
      <TextInput
        placeholder="Digite seu nome completo"
        label="Nome completo"
        boxProps={{marginTop: 's16'}}
        errorMessage="Digite um nome válido"
      />
      <TextInput
        placeholder="Digite seu e-mail"
        label="E-mail"
        boxProps={{marginTop: 's16'}}
        errorMessage="Digite um e-mail válido"
      />
      <TextInput
        placeholder="Digite sua senha"
        label="Senha"
        boxProps={{marginTop: 's16'}}
        errorMessage="Digite uma senha válida"
      />
      <Button onPress={onSubmit} marginTop="s48" title="Criar minha conta" />
    </Screen>
  );
}
