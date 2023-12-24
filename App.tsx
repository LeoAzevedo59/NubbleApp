import React from 'react';

import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text/Text';

export default function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text style={{fontFamily: 'Satoshi-BoldItalic'}}>Hello World</Text>
    </SafeAreaView>
  );
}
