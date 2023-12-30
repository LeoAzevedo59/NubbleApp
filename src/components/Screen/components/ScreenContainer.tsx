import {ScrollView, View} from 'react-native';
import React from 'react';

interface ScreenContainerProps {
  children: React.ReactNode;
  backgroundColor: string;
}

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return <ScrollView style={{backgroundColor}}>{children}</ScrollView>;
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return <View style={{backgroundColor}}>{children}</View>;
}
