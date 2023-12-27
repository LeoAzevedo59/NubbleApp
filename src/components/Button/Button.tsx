import React from 'react';
import {Text} from '../Text/Text';
import {TouchableOpacityBox} from '../Box/Box';
import {ActivityIndicator} from 'react-native';

interface ButtonProps {
  title: string;
  loading?: boolean;
}

export function Button({title, loading}: ButtonProps) {
  return (
    <>
      <TouchableOpacityBox
        alignItems="center"
        justifyContent="center"
        height={50}
        backgroundColor="primary"
        borderRadius="s16">
        {loading ? (
          <ActivityIndicator color={'#fff'} />
        ) : (
          <Text bold style={{color: '#fff'}}>
            {title}
          </Text>
        )}
      </TouchableOpacityBox>
    </>
  );
}
