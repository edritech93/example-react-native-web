import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import TextError from './TextError';

export default function Inputs(props) {
  const {
    title,
    error = false,
    message = `${title} Dibutuhkan`,
    isPassword = false,
    containerStyle,
    ...restProps
  } = props;

  const [hidePassword, setHidePassword] = useState(false);

  useEffect(() => {
    setHidePassword(isPassword);
  }, [isPassword]);

  return (
    <View style={containerStyle}>
      <TextInput
        label={title}
        mode={'outlined'}
        placeholder={`Type ${title}`}
        error={error}
        secureTextEntry={hidePassword}
        {...restProps}
      />
      <TextError isError={error} message={message} />
    </View>
  );
}

const styles = StyleSheet.create({});
