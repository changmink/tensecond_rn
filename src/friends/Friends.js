import React from 'react';
import {
  StyleSheet,
  View,
  Text, Image, ScrollView, 
  TouchableOpacity
} from 'react-native';
import Header from '../Header';
import FriendList from './FriendList';
import profile_img from '../../assets/images/profile.png';

const Friends = ({navigation, route}) => {
  const { profile } = route.params;
  const picture = profile? {uri: profile.profileImage} : profile_img;
  const name = profile ? profile.name : 'NoName';
  const message =  profile ? profile.profileMessage : "ㅅ";
  const id = profile? profile.id : -1
  console.log('profile', profile)
  
  return (
      <View style={styles.mainView}>
            <Header name={'친구목록'}/>
            <ScrollView >
                <View style={styles.subView} >
                    <TouchableOpacity style={styles.subView} onPress={()=> navigation.navigate("Profile", {picture: profile.profileImage, name: name, message: message, id: id})} >
                        <Image style={styles.profile} source={picture} />
                        <Text style={{fontSize: 18}}>{name}</Text>
                        <Text style={{fontSize: 16}}>{message}</Text>
                    </TouchableOpacity>
                    <FriendList userId={id}/>
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