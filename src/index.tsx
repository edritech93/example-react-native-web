import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AppProps {}

const App = (props: AppProps) => {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {}
});
