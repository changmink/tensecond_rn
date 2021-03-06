import React from 'react';
import {
  StyleSheet,
  View,
  Text, Image
} from 'react-native';
import IC_voice_new from '../../assets/images/ic_voice_new.svg';
import profile_img from '../../assets/images/profile.png';

const Friend = ({id, name, pic, message}) => {
  return (
      <View style={styles.mainView}>
        <Image
            style={styles.image}
            source={profile_img}
        />
        <View style={styles.profile}>
            <Text>
            {name? name : 'friend'}
            </Text>
            <Text>
                {message? message : 'How are you?'}
            </Text>
        </View>
       <View style={styles.new}>
          <IC_voice_new/>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    mainView:{
        flexDirection: 'row',
        marginLeft: 8,
        marginTop: 8,
    },
    image:{
        width: 48,
        height: 48,
        marginRight: 8,
        borderRadius:1,
    },  
    profile:{
        justifyContent: 'center',
    },
    new : {
        backgroundColor: '#0fe1a3', 
        borderRadius: 27,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginLeft: '40%'
    }
});

export default Friend;