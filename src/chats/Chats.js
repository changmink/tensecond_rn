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
import MessageList from './MessageList';


const Chats = () => {
  return (
    <View style={styles.mainView}>
      <Header 
        style={styles.header}
        name={"채팅"}
      />
      <MessageList
        style={styles.messageList}
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
