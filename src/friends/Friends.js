import React from 'react';
import {
  StyleSheet,
  View,
  Text, Image, ScrollView
} from 'react-native';
import Header from '../Header';
import FriendList from './FriendList';
import profile_img from '../../assets/images/profile.png';

const Friends = ({navigation, route}) => {
  const { profile } = route.params;
  console.log('profile', profile)
  return (
      <View style={styles.mainView}>
            <Header name={'친구목록'}/>
            <ScrollView >
                <View style={styles.subView}>
                    <Image style={styles.profile} source={profile? {uri: profile.profileImage} : profile_img}/>
                    <Text style={{fontSize: 18}}>{profile ? profile.name : 'NoName'}</Text>
                    <Text style={{fontSize: 16}}>{profile ? profile.profileMessage : "ㅅ"}</Text>
                    <FriendList/>
                </View>
            </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
    mainView:{
        marginTop: 50,
        
    },
    subView: {
        alignItems: 'center'
    },
    profile:{
        width: 96,
        height: 96,
        marginRight: 8,
        borderRadius:1,
    },
});

export default Friends;