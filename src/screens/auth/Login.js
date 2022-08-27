import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';
import {Inputs, PrimaryButton, SecondaryButton} from '../../component';

export default function Login() {
  return (
    <View style={styles.container}>
      <Card style={styles.wrapContent} mode={'elevated'}>
        <Inputs
          title={'Email'}
          keyboardType={'email-address'}
          style={styles.wrapInput}
        />
        <Inputs title={'Password'} isPassword={true} style={styles.wrapInput} />
        <View style={styles.wrapButton}>
          <SecondaryButton
            title={'Mendaftar'}
            onPress={() => {}}
            style={styles.btnRegister}
          />
          <PrimaryButton title={'Masuk'} onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
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
