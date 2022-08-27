import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Platform} from 'react-native';
import {Colors} from './themes';
import StackNavigation from './router';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <StackNavigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Platform.OS === 'web' ? '100vh' : '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.divider,
  },
});
