import React from 'react';
import { ScrollView } from 'react-native';
import Message from './Message';
import profile from '../../assets/images/profile.png'

const MessageList = () => {
    const message = {
        profile: profile,
        name: 'pizza guy',
        length: '0:08 sec',
        time: '오후 7:07',
        count: 5
    }
    const messages = [
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,
        message,

    ]
    const printMessage = () => {
        return messages.map((message, idx)=>(
            <Message 
                profile={message.profile}
                name={message.name}
                length={message.length}
                time={message.time}
                count={message.count}
                key={idx}
            />
        ))
    }
    return (
        <ScrollView style={{height:'100%'}}>
          {printMessage()} 
        </ScrollView>
    );
}

export default MessageList;