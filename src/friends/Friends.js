import React from 'react';
import {
  StyleSheet,
  View,
  Text, Image, ScrollView
} from 'react-native';
import Header from '../Header';
import FriendList from './FriendList';
import profile from '../../assets/images/profile.png';

const Friends = () => {
  return (
      <View style={styles.mainView}>
            <Header name={'친구목록'}/>
            <ScrollView >
                <View style={styles.subView}>
                    <Image style={styles.profile} source={profile}/>
                    <Text style={{fontSize: 18}}>Changmin</Text>
                    <Text style={{fontSize: 16}}> I like pizza</Text>
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