import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import MyMessage from './MyMessage';

const MyMessageList = () => {
    const messagesList = {
        time: '오후 4:39',
        messages: [
            {
                    length: '0:04'
            },
            {
                    length: '0:04'
            }
        ]
    }
    const printMessage = (messages) => {
        return messages.map((message, idx)=>(
            <MyMessage key={idx} length={message.length}/>
        ))
    }
  return (
    <View style={styles.main}>
        <View>
        {printMessage(messagesList.messages)}
        </View>
        <Text style={styles.time}>{messagesList.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row-reverse'
    },
    time: {
        color: '#888888',
        fontSize: 10,
        alignSelf: 'flex-end'
    }
});

export default MyMessageList;