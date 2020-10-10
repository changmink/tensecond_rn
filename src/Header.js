/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strICt-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import IC_setting from '../assets/images/ic_setting.svg'
import IC_search from '../assets/images/ic_search.svg'
import IC_plus from '../assets/images/ic_plus.svg'

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  } from 'react-native-fbsdk'

const Header = ({name}) => {
  const FBLogout = (accessToken) => {
    let logout =
        new GraphRequest(
            "me/permissions/",
            {
                accessToken: accessToken,
                httpMethod: 'DELETE'
            },
            (error, result) => {
                if (error) {
                    console.log('Error fetching data: ' + error.toString());
                } else {
                    LoginManager.logOut();
                }
            });
    new GraphRequestManager().addRequest(logout).start();
  };
  return (
    <View style={styles.main}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.blank}></View>
      <View style={styles.icons}>
        <IC_setting/>
        <IC_search/>
        <IC_plus/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main:{
    flexDirection: 'row',
    marginLeft: 15,
  },
  title: {
    fontSize: 20,
    //fontFamily: 'NanumSquare',
    color: '#333333',
    alignSelf: 'flex-start',
    flex: 1,
  },
  blank:{
      flex:2
  },
  icons: {
      flex:1,
      flexDirection: 'row',
      marginRight: 15
  }
});

export default Header;