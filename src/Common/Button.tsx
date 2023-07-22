import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export type ButtonProps = {
  text: string;
  onPress: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text>{props.text || 'Button'}</Text>
    </TouchableOpacity>
  );
};

export default Button;
