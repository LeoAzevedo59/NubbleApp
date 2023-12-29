import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';
import {Button} from './src/components/Button/Button';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from './src/theme/theme';
import {Box} from './src/components/Box/Box';

export default function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Box paddingHorizontal="s12">
          <Text preset="headingLarge">Coff Stack</Text>
          <Button
            disabled
            preset="outline"
            title="Created"
            marginBottom="s24"
          />
          <Button loading title="Created" />
        </Box>
      </SafeAreaView>
    </ThemeProvider>
  );
}
