import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors} from '../../themes';
import Home from './Home';
import Notification from './Notification';

const Tab = createBottomTabNavigator();

export default function Dashboard(props) {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.divider,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      })}>
      <Tab.Screen name={'Home'} component={Home} />
      <Tab.Screen name={'Notification'} component={Notification} />
    </Tab.Navigator>
  );
}
