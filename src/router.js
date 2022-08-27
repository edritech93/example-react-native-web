import React, {useRef, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from './screens/dashboard';
import Splash from './screens/auth/Splash';
import Login from './screens/auth/Login';

const Stack = createStackNavigator();

const defaultStyle = {
  headerStyle: {
    borderBottomWidth: 0, //for ios
    shadowOpacity: 0, //for ios
    elevation: 0, //for android
  },
  shadowColor: 'transparent',
  borderBottomWidth: 0,
  headerBackTitle: ' ',
  headerTitleAlign: 'center',
};

export default function StackNavigation(props) {
  const REF_NAV = useRef();

  useEffect(() => {
    if (REF_NAV && REF_NAV.current) {
      props.stackRef(REF_NAV);
    }
  }, [REF_NAV, props]);

  return (
    <NavigationContainer ref={REF_NAV}>
      <Stack.Navigator
        initialRouteName={'Splash'}
        screenOptions={({navigation}) => ({
          ...defaultStyle,
        })}>
        <Stack.Screen
          name={'Splash'}
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Login'}
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Dashboard'}
          component={Dashboard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
