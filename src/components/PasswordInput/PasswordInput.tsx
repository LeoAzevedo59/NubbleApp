import React, {useState} from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

export function PasswordInput(props: PasswordInputProps) {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

  //toggle -> padrão de nomenclatura para alteração
  function toggleSecurityTextEntry() {
    setIsSecureTextEntry(value => !value);
  }

  return (
    <TextInput
      secureTextEntry={isSecureTextEntry}
      {...props}
      RightComponent={
        <Icon
          onPress={toggleSecurityTextEntry}
          color="gray2"
          name={isSecureTextEntry ? 'eyeOff' : 'eyeOn'}
        />
      }
    />
  );
}
