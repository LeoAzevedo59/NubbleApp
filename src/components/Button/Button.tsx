import React from 'react';

import {ButtonPreset, buttonPresets} from './buttonPresets';

import {
  Text,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
  ActivityIndicator,
} from '@components';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <>
      <TouchableOpacityBox
        disabled={disabled || loading}
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
