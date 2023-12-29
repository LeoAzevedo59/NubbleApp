import React from 'react';

import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSize, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
  const {colors} = useAppTheme();
  return (
    <Box>
      <Text mb="s4">{label}</Text>
      <Box {...$textInputContainer}>
        <RNTextInput
          placeholderTextColor={colors.gray2}
          style={$textInput}
          {...rnTextInputProps}
        />
      </Box>
    </Box>
  );
}

const $textInput: TextStyle = {
  borderWidth: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSize.paragraphMedium,
};

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  padding: 's16',
  borderColor: 'gray4',
  borderRadius: 's12',
};
