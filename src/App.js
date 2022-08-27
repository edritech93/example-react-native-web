import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Inputs, PrimaryButton} from './component';

export default function App() {
  return (
    <View style={styles.container}>
      <Inputs title={'Email'} keyboardType={'email-address'} />
      <View style={styles.wrapButton}>
        <PrimaryButton title={'Masuk'} />
        <PrimaryButton title={'Masuk'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 500,
    flexDirection: 'column',
    backgroundColor: 'red',
  },
  wrapButton: {
    flexDirection: 'row',
  },
});
