import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import IC_Play from '../../assets/images/ic_voice_play.svg';

const MyMessage = ({length}) => {
  return (
     <View style={styles.main}>
        <IC_Play style={styles.play}/>
        <Text style={styles.length}>
            {length}</Text>
     </View>
  );
};

const styles = StyleSheet.create({
    main:{
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#0fe1a3',
        justifyContent: 'center'
    }, 
    play: {
        backgroundColor:'#40a390',
        color:'#ffffff'
    },
    length: {
        paddingLeft: 5,
        width: 80,
        color:'#ffffff',
        fontSize: 15,
        fontWeight: '600',
        alignSelf: 'center'
    }
});

export default MyMessage;