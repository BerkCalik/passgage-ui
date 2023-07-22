import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import useThemedStyles from '../Theme/useThemedStyles';
import { ThemeType } from '../Theme/ThemeProvider';

export interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = (props: ButtonProps): JSX.Element => {
  const style = useThemedStyles(styles);

  return (
    <TouchableOpacity onPress={props.onPress} style={[style.button]}>
      <Text>{props.text || 'Button'}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (theme: ThemeType) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.primaryColor,
      padding: 15,
    },
  });
