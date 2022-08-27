import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Card} from 'react-native-paper';
import {Inputs, PrimaryButton} from './component';
import {Colors} from './themes';

export default function App() {
  return (
    <View style={styles.container}>
      <Card style={styles.wrapContent} mode={'elevated'}>
        <Inputs
          title={'Email'}
          keyboardType={'email-address'}
          style={styles.wrapInput}
        />
        <Inputs title={'Password'} style={styles.wrapInput} />
        <View style={styles.wrapButton}>
          <PrimaryButton
            title={'Mendaftar'}
            onPress={() => {
              alert('hello');
            }}
            style={styles.btnRegister}
          />
          <PrimaryButton title={'Masuk'} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'web' ? '100vh' : '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.divider,
  },
  wrapContent: {
    width: '90%',
    maxWidth: 400,
    flexDirection: 'column',
    borderRadius: 8,
    padding: 16,
  },
  wrapInput: {
    marginBottom: 16,
  },
  wrapButton: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  btnRegister: {
    marginRight: 16,
  },
});
