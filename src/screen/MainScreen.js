import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Friends from '../friends/Friends';
import Chats from '../chats/Chats';

const Tab = createBottomTabNavigator();

const MainScreen = ({route}) => {
  const {profileInfo,  accessToken} = route.params
  return (
      <Tab.Navigator>
        <Tab.Screen name="Friends" component={Friends} initialParams={{profile: profileInfo.json}}/>
        <Tab.Screen name="Chats" component={Chats} initialParams={{profile: profileInfo.json}}/>
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
 
});

export default MainScreen;