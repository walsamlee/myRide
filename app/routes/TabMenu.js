import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import SearchRideScreen from '../screens/rideScreens/SearchRideScreen';
import SettingsHomeScreen from '../screens/settingsScreens/SettingsHomeScreen';

const Tab = createBottomTabNavigator();

function TabMenu(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen name={'ride'} component={SearchRideScreen} options={{ title: 'Search' }} />
      <Tab.Screen name={'settings'} component={SettingsHomeScreen} />
    </Tab.Navigator>
  );
}

export default TabMenu;