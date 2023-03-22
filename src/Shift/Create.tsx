import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface IProps {
  pubsub: PubSubJS.Base;
}

const Create: React.FC<IProps> = (props) => {
  const [form, setForm] = React.useState({ name: '', age: 20 });

  const submit = () => {
    console.log('submit from module: ', form);
    props.pubsub.publish('SHIFT_CREATED', form);
  };

  return (
    <View>
      <Text>Shift Create</Text>
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(name) => setForm({ ...form, name })}
      />
      <TextInput
        style={styles.input}
        value={form.name}
        onChangeText={(name) => setForm({ ...form, name })}
      />

      <TouchableOpacity onPress={submit}>
        <Text>SEND</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Create;

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
  },
});
