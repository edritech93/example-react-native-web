import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';

export default function PaddedView(props) {
  const {children, style} = props;
  return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'web' ? '100vh' : '100%',
    flexDirection: 'column',
  },
});
