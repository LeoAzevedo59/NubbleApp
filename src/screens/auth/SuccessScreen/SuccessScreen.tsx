import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@routes';

import {Screen, Icon, Text, Button} from '@components';

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SuccessScreen'>;

export function SuccessScreen({route, navigation}: ScreenProps) {
  function goBackToBegin() {
    navigation.goBack();
  }

  return (
    <Screen>
      <Icon {...route.params.icon} />
      <Text marginTop="s24" preset="headingLarge">
        {route.params.title}
      </Text>
      <Text marginTop="s16" preset="paragraphLarge">
        {route.params.description}
      </Text>
      <Button
        marginTop="s40"
        onPress={goBackToBegin}
        title="Voltar ao início"
      />
    </Screen>
  );
}
