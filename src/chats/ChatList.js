import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Chat from './Chat';
import profile from '../../assets/images/profile.png'

const ChatList = ({userId}) => {
    const [messages, setMessages] = useState([])
    const getMessages = (userId) => {
        fetch(`http://localhost:8080/users/${userId}/chats`, {
            method: 'GET',
        }).then((response) => response.json())
        .then((json) => {
            setMessages(json)
        }).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getMessages(userId)
    }, [])

    const printMessage = () => {
        return messages.map((message, idx)=>(
            <Chat 
                profile={profile}
                name={message.name}
                length={message.count > 0 ? "읽지 않은 메시지가 있습니다.": " "}
                time={message.modified}
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

export default ChatList;