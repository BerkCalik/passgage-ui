import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, ThemeProvider } from 'passgage-ui';

const theme1 = { primaryColor: 'red' };
//const theme2 = { primaryColor: 'blue' };

export default function App() {
  return (
    <ThemeProvider theme={theme1}>
      <View style={styles.container}>
        <Button text="Example app button" onPress={() => console.log('test')} />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
