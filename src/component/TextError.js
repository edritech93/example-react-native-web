import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors, Metrics} from '../themes';
import {Text} from './Text';

export default function TextError(props) {
  const {isError = false, message, style} = props;
  if (isError) {
    return <Text style={[styles.txtStyle, style]}>{message}</Text>;
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  txtStyle: {
    fontSize: Metrics.scaleSize(10),
    lineHeight: Metrics.scaleSize(14),
    color: Colors.red,
  },
});
