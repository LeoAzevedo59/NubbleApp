import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from 'react-native';
import {ButtonPreset, buttonPresets} from './buttonPresets';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset];

  return (
    <>
      <TouchableOpacityBox
        alignItems="center"
        justifyContent="center"
        height={50}
        borderRadius="s16"
        {...buttonPreset.container}
        {...touchableOpacityBoxProps}>
        {loading ? (
          <ActivityIndicator color={buttonPreset.content} />
        ) : (
          <Text bold color={buttonPreset.content}>
            {title}
          </Text>
        )}
      </TouchableOpacityBox>
    </>
  );
}
