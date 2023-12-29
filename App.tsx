import React from 'react';

import {SafeAreaView, View} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {Box} from './src/components/Box/Box';
import {Button} from './src/components/Button/Button';
import {TextInput} from './src/components/TextInput/TextInput';

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
          <Box marginBottom="s20">
            <TextInput label="E-mail" placeholder="Digite seu e-mail" />
          </Box>
          <Box marginBottom="s20">
            <TextInput label="Senha" placeholder="Digite sua senha" />
          </Box>

          <Text
            marginTop="s8"
            preset="paragraphSmall"
            bold
            color="greenPrimary">
            Esqueci minha senha
          </Text>

          <Button marginTop="s48" title="Entrar" />
          <Button marginTop="s12" preset="outline" title="Criar uma conta" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
