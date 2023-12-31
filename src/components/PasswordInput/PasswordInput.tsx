import React, {useState} from 'react';
import {TextInput, TextInputProps} from '../TextInput/TextInput';
import {Icon} from '../Icon/Icon';

type PasswordInputProps = Omit<TextInputProps, 'RightComponent'>;

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
