import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SearchRideScreen from '../screens/rideScreens/SearchRideScreen';
import SettingsHomeScreen from '../screens/settingsScreens/SettingsHomeScreen';

const Tab = createBottomTabNavigator();

function TabMenuBar(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'Car'} component={SearchRideScreen} />
      <Tab.Screen name={'Sett'} component={SettingsHomeScreen} />
    </Tab.Navigator>
  );
}

export default TabMenuBar;