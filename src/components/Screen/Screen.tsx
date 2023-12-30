import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';
import {KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
import {useAppTheme} from '../../hooks/useAppTheme';

interface ScreenProps {
  children: React.ReactNode;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  canGoBack = false,
  scrollable = false,
  children,
}: ScreenProps) {
  const {top, bottom} = useAppSafeArea();
  const {colors} = useAppTheme();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;

  return (
    <Container backgroundColor={colors.background}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView>
          <Box
            paddingHorizontal="s24"
            paddingBottom="s20"
            style={{marginTop: top, marginBottom: bottom}}>
            {canGoBack && (
              <Box mb="s24" flexDirection="row" alignItems="center">
                <Icon name="arrowLeft" color="primary" />
                <Text ml="s8">Voltar</Text>
              </Box>
            )}
            {children}
          </Box>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
}
