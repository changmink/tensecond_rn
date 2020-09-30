import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TextInput
} from 'react-native';
import SubHeader from '../SubHeader';
import profile from '../../assets/images/profile.png'
import IC_pencil from '../../assets/images/ic_pencil.svg'
import IC_Camera from '../../assets/images/ic_camera_change.svg'

const Profile = () => {
  return (
      <View style={styles.mainView} >
        <SubHeader name={'프로필 관리'} icon={false} msg={'완료'}/>
        <Image style={styles.profileImage} source={profile}/>
        <View  style={styles.name}>
            <TextInput style={styles.nameText}>Pizza Kim</TextInput>
            <IC_pencil/>
        </View>
        <View style={styles.status}>
            <TextInput >I love pizza. Guys</TextInput>
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