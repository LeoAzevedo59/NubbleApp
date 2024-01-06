import React from 'react';

import {Screen, Icon, Text, Button} from '@components';
import {AuthScreenProps} from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthScreenProps<'SuccessScreen'>) {
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
