import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
  function navigationToSettings() {
    navigation.navigate('SettingsScreen');
  }

  return (
    <Screen>
      <Text preset="headingLarge">Home screen</Text>
      <Button onPress={navigationToSettings} title="Settings" />
    </Screen>
  );
}
