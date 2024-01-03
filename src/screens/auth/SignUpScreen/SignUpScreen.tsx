import React from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {Button} from '../../../components/Button/Button';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../routes/Routes';
import {useReactNavigationSuccess} from '../../../hooks/useReactNavigationSuccess';
import {useForm, Controller} from 'react-hook-form';

type SignUpFormType = {
  userName: string;
  fullName: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({}: ScreenProps) {
  const {reset} = useReactNavigationSuccess();

  const {control, formState, handleSubmit} = useForm<SignUpFormType>({
    defaultValues: {
      userName: '',
      fullName: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function submitForm(formValues: SignUpFormType) {
    console.log(formValues);
    // reset({
    //   title: 'Sua conta foi criada com sucesso!',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //     size: 48,
    //   },
    // });
  }

  return (
    <Screen canGoBack scrollable>
      <Text bold preset="headingLarge">
        Criar uma conta
      </Text>
      <Controller
        control={control}
        name="userName"
        rules={{
          required: 'User name é obrigatório.',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Seu username"
            placeholder="@"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{marginTop: 's32'}}
          />
        )}
      />
      <Controller
        control={control}
        name="fullName"
        rules={{
          required: 'Nome é obrigatório.',
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="Nome completo"
            placeholder="Digite seu nome completo"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{marginTop: 's16'}}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório.',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{marginTop: 's16'}}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatório',
          minLength: {
            value: 8,
            message: 'Senha deve ter no mínimo 8 caracteres',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            placeholder="Digite sua senha"
            label="Senha"
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            boxProps={{marginTop: 's16'}}
          />
        )}
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
