import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import OnBoardingStack from './app/routes/OnBoardingStack';
import HomeStack from './app/routes/HomeStack';
import TabMenuBar from './app/common/TabMenuBar';

const Stack = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Screen name={'Test'} component={TabMenuBar} /> */}
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name={'Welcome'} component={OnBoardingStack} options={{ headerShown: false }} />
        <Stack.Screen name={'Home'} component={HomeStack} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
