/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View, Text
} from 'react-native';

import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screen/LoginScreen';
import MainScreen from './screen/MainScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name="Main" component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
 
});

export default App;
