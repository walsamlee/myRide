import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import LoginScreen from '../screens/onBoardingScreens/LoginScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ForgotPasswordScreen from '../screens/onBoardingScreens/ForgotPasswordScreen';
import RegisterScreen from '../screens/onBoardingScreens/RegisterScreen';
import VerifyScreen from '../screens/onBoardingScreens/VerifyScreen';

const Stack = createNativeStackNavigator();

function OnBoardingStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoard" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name={'Login'} component={LoginScreen} options={'Login'} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{ title: 'Recover Password' }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Signup' }} />
        <Stack.Screen name="Verify" component={VerifyScreen} options={{ title: 'Verify' }} />
    </Stack.Navigator>
  );
}

export default OnBoardingStack;