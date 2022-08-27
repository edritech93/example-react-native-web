import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Loader, PaddedView, Text} from '../../component';

export default function Splash(props) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 1000);
  }, [props]);

  return (
    <PaddedView>
      <Loader />
    </PaddedView>
  );
}
