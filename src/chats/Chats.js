/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import Header from '../Header'
import ChatList from './ChatList';


const Chats = ({navigation, route}) => {
  console.log(route.params.profile.id)
  return (
    <View style={styles.mainView}>
      <Header 
        style={styles.header}
        name={"채팅"}
      />
      <ChatList
        style={styles.messageList}
        userId={route.params.profile.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainView:{
    marginTop: 50,
  },
  messageList: {
    height: '100%'
  },
  header: {
    
  }
});

export default Chats;
