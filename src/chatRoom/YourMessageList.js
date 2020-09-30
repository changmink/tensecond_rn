import React from 'react';
import {
    Image,
  StyleSheet, Text, View,
} from 'react-native';
import IC_Play from '../../assets/images/ic_voice_play.svg';
import YourMessage from './YourMessage';
import profile from '../../assets/images/profile.png'

const YourMessageList = () => {
    const messageList = {
        profile: profile,
        time: '오후 5:50',
    }
    return (
        <View style={styles.main}>
            <Image style={styles.profile} source={messageList.profile}/>
            <View>
                <Text>Pizza Guy</Text>
                <YourMessage length={'0:04'}/>
                <YourMessage length={'0:04'}/>
                <YourMessage length={'0:04'}/>
                <YourMessage length={'0:04'}/>
                <YourMessage length={'0:04'}/>
                <YourMessage length={'0:04'}/>
            </View>
            <Text style={styles.time}>{messageList.time}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row'
    }, 
    profile:{
        width: 48,
        height: 48,
        marginRight: 8,
        borderRadius:1,
    },
    time: {
        color: '#888888',
        fontSize: 10,
        alignSelf: 'flex-end',
        paddingLeft: 30
    }
})

export default YourMessageList;