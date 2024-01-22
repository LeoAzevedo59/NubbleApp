import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {Box, TouchableOpacityBox, Icon, Text, BoxProps} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';

interface ScreenProps extends BoxProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  canGoBack = false,
  scrollable = false,
  children,
  style,
  ...boxProps
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  function goBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={$style}>
      <Container backgroundColor={colors.background}>
        <Box
          paddingHorizontal="s24"
          style={[{paddingTop: top, paddingBottom: bottom}, style]}
          {...boxProps}>
          {canGoBack && (
            <TouchableOpacityBox
              onPress={goBack}
              mb="s24"
              flexDirection="row"
              alignItems="center">
              <Icon name="arrowLeft" color="primary" />
              <Text ml="s8">Voltar</Text>
            </TouchableOpacityBox>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

const $style = {
  flex: 1,
};
