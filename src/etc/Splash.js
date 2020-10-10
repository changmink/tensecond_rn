import React from 'react';
import {
  StyleSheet,
  View,
  Text, Image
} from 'react-native';
import SplashImage from '../../assets/images/splash.svg'

const Splash = () => {
  return (
      <View style={styles.mainView}>
        <SplashImage/>
      </View>
  );
};

const styles = StyleSheet.create({
   mainView: {
      width: '100%'
   }
});

export default Splash;