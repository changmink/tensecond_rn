import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import IC_Play from '../../assets/images/ic_voice_play.svg';

const YourMessage = ({length}) => {
  return (
     <View style={styles.main}>
       <Text style={styles.length}>{length}</Text>
       <IC_Play style={styles.play}/> 
     </View>
  );
};

const styles = StyleSheet.create({
    main:{
        margin: 5,
        flexDirection: 'row',
        backgroundColor: '#e5f7f2',
        width:80
    },
    play: {
        backgroundColor:'#90c0b7',
        color:'#ffffff'
    },
    length: {
        paddingLeft: 5,
        width: 80,
        fontSize: 15,
        alignSelf: 'center'
    },
})

export default YourMessage;