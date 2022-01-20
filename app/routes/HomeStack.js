import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AddCarScreen from '../screens/rideScreens/AddCarScreen';
import RideProfileScreen from '../screens/rideScreens/RideProfileScreen';
import RideSearchResult from '../screens/rideScreens/SearchRideResultScreen';
import SearchRideScreen from '../screens/rideScreens/SearchRideScreen';

const Stack = createNativeStackNavigator();

function HomeStack(params) {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'rideSearch'} component={SearchRideScreen} options={'Ride Search'} />
      <Stack.Screen name={'searchResult'} component={RideSearchResult} options={'Search Result'} />
      <Stack.Screen name={'myRide'} component={RideProfileScreen} options={'My Car'} />
      <Stack.Screen name={'addCar'} component={AddCarScreen} options={'Add Car'} />
    </Stack.Navigator>
  );
}

export default HomeStack;