import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import Friend from './Friend';

const FriendList = () => {
  return (
      <View>
          <Text>내 친구 목록(40)</Text>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
          <Friend/>
      </View>
  );
};

const styles = StyleSheet.create({
 mainView:{
    marginTop: 50,
  },
});

export default FriendList;