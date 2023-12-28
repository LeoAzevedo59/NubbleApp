import React from 'react';

import {Text} from '../Text/Text';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
}

export function Button({
  title,
  loading,
  ...touchableOpacityBoxProps
}: ButtonProps) {
  return (
    <>
      <TouchableOpacityBox
        alignItems="center"
        justifyContent="center"
        height={50}
        backgroundColor="primary"
        borderRadius="s16"
        {...touchableOpacityBoxProps}>
        {loading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text bold color="primaryContrast">
            {title}
          </Text>
        )}
      </TouchableOpacityBox>
    </>
  );
}
