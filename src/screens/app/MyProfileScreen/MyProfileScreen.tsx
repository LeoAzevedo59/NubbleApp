import React from 'react';
import {View, Text} from 'react-native';

import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function MyProfileScreen(props: AppTabScreenProps<'MyProfileScreen'>) {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
}
