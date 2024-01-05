import React from 'react';
import {ScrollView, View} from 'react-native';

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  const $style = {
    flex: 1,
    backgroundColor,
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled" style={$style}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  const $style = {
    flex: 1,
    backgroundColor,
  };

  return <View style={$style}>{children}</View>;
}
