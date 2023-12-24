import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text bold italic>
        Hello World
      </Text>
    </SafeAreaView>
  );
}
