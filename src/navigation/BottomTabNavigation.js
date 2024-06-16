import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Home from '../screens/Home/Home';
import Favorite from '../screens/Favorite/Favorite';
import {Colors} from '../constants/Styles';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          right: 10,
          left: 10,
          elevation: 10,
          borderRadius: 15,
          borderTopWidth: 0,
          height: 70,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View
              style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: focused ? Colors.primary : Colors.background,
              }}>
              <Icon
                name="home"
                color={!focused ? Colors.primary : Colors.background}
                size={size}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused, size}) => (
            <View
              style={{
                padding: 10,
                borderRadius: 50,
                backgroundColor: focused ? Colors.primary : Colors.background,
              }}>
              <Icon
                name="star"
                color={!focused ? Colors.primary : Colors.background}
                size={size}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({});
