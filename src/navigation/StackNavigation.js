import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Splash from '../screens/Splash/Splash';
import BottomTabNavigation from './BottomTabNavigation';
import Details from '../screens/Details/Details';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="BottomTab"
          component={BottomTabNavigation}
          options={{
            ...TransitionPresets.ScaleFromCenterAndroid,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            ...TransitionPresets.BottomSheetAndroid,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
