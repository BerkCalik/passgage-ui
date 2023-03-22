import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';

const Button = () => {
  const onPress = () => {
    Alert.alert('Test!');
  };

  return (
    <TouchableOpacity onPress={() => onPress()}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
