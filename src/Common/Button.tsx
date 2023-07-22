import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { BaseThemeType, withTheme } from '../Theme';

export interface ButtonProps extends BaseThemeType {
  text: string;
  onPress: () => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  console.log('Button theme: ', props.theme);

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{ padding: 15, backgroundColor: props.theme.primaryColor }}
    >
      <Text>{props.text || 'Button'}</Text>
    </TouchableOpacity>
  );
};

export default withTheme(Button);
