import React, { useState } from 'react';
import {
  StyleSheet, Button,
  View,
  Image,
  TextInput
} from 'react-native';

import IC_pencil from '../../assets/images/ic_pencil.svg'
import IC_Camera from '../../assets/images/ic_camera_change.svg'

const Profile = ({navigation, route}) => {
  const {picture, name, message, id } = route.params
  const [ profileName, setProfileName] = useState(name)
  const [ profileImage, setProfileImage] = useState(picture)
  const [ profileMessage, setProfileMessage] = useState(message)
 
  const  updateUserProfile = (id, name, profileImage, profileMessage) => {
    fetch('http://localhost:8080/users/' + id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        profileImage: profileImage,
        profileMessage: profileMessage
      })
    }).then((response) => response.ok)
    .catch((error) => {
      console.error(error)
    })
  }

  React.useLayoutEffect(() => {
      navigation.setOptions({
        title: '프로필 관리',
        headerBackTitle: ' ',
        
        headerRight: () => {
          
          return <Button
            title="완료"
            onPress={() => {  
              //remove uri:
              img = profileImage.uri ? profileImage.uri : profileImage
              const profile = {
                profileImage: img, name: name, profileMessage: message, id: id
              };
              updateUserProfile(id, profileName, img, profileMessage)
              navigation.navigate("Main",{profile})
            }}
          />
        }
      })
  }, [navigation, profileName, profileMessage, profileImage]);

  return (
      <View style={styles.mainView} >
        <Image style={styles.profileImage} source={{uri:picture}}/>
        <View  style={styles.name}>
        <TextInput onChangeText={(el) => {setProfileName(el); console.log()}} style={styles.nameText}>{profileName}</TextInput>
            <IC_pencil/>
        </View>
        <View style={styles.status}>
            <TextInput onChangeText={(el) => {setProfileMessage(el)}} value={profileMessage}/>
            <IC_pencil/>
        </View>
        <View style={styles.camera}>
           <IC_Camera/> 
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    mainView: {
        marginTop: 50,
        alignItems: 'center'
    },
    profileImage:{
        height: 276, 
        width: 276, 
    },
    name: {
        flexDirection: 'row', 
        marginTop: 30,
    },
    nameText: {
        fontSize: 24
    },
    status: {
        flexDirection: 'row', 
        marginTop: 20
    },
    camera: {
        backgroundColor: '#0fe1a3',
        position: 'absolute', 
        left: '80%',
        top: '20%'
    }
});

export default Profile;