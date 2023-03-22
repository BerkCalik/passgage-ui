import React from 'react';
import { Text, TouchableOpacity, Alert } from 'react-native';

const Button = () => {
  return (
    <TouchableOpacity onPress={() => Alert.alert('Test!')}>
      <Text>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
