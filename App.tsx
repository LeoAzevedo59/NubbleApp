import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';
import {Icon} from './src/components/Icon/Icon';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text marginBottom="s40" preset="paragraphLarge">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon name="eyeOn" color="gray2" />}
            boxProps={{mb: 's8'}}
          />

          <Text preset="paragraphSmall" bold color="greenPrimary">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button marginTop="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
