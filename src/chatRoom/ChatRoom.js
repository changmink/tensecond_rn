import React from 'react';
import {
  ScrollView,
  StyleSheet, Text, View,
} from 'react-native';
import Header from './Header';
import MyMessageList from './MyMessageList';
import YourMessageList from './YourMessageList';
import IC_voice_new from '../../assets/images/ic_voice_new.svg';
const ChatRoom = () => {
  return (
    <View style={styles.main}>
        <Header style={styles.header} name={'Pizza guy'}/>
        <ScrollView style={{height: '80%'}}>
          <MyMessageList/>
          <YourMessageList />
        </ScrollView>
        <View style={styles.new}>
          <IC_voice_new/>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    marginTop: 50
  },
  new : {
   backgroundColor: '#0fe1a3', 
   borderRadius: 27,
   width: 54,
   height: 54,
   justifyContent: 'center',
   alignItems: 'center',
   alignSelf: 'center',
  }
});

export default ChatRoom;