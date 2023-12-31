import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import {useAppTheme} from '../../hooks/useAppTheme';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSize, Text} from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  boxProps: BoxProps;
  RightComponent?: React.ReactElement;
}

export function TextInput({
  label,
  errorMessage,
  boxProps,
  RightComponent,
  ...rnTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();

  const $textInputContainer: BoxProps = {
    borderWidth: errorMessage ? 2 : 1,
    padding: 's16',
    borderColor: errorMessage ? 'error' : 'gray4',
    borderRadius: 's12',
    flexDirection: 'row',
    alignItems: 'center',
  };

  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text mb="s4">{label}</Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            autoCapitalize="none"
            style={$textInput}
            {...rnTextInputProps}
          />
          {RightComponent && <Box marginLeft="s16">{RightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text preset="paragraphSmall" bold color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInput: TextStyle = {
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSize.paragraphMedium,

  flexGrow: 1,
  flexShrink: 1,
};
