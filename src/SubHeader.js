import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import IC_back from '../assets/images/ic_back.svg'
import IC_hamburger from '../assets/images/ic_hamburger.svg'


const SubHeader = ({name, icon, msg}) => {
  return (
    <View style={styles.main}>
        <IC_back style={styles.back}/>
        <Text style={styles.name}>{name}</Text>
        {icon ? <IC_hamburger/> : null }
        {msg ? <Text style={styles.msg}>{msg}</Text>: null }
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginBottom: 14,
        alignItems: 'center'
    },
    back: {marginLeft: 10},
    name: {flex: 1, fontSize:20},
    msg: {
      fontSize: 20,
      marginRight: 20,
      color: '#0fe1a3'
    }
});

export default SubHeader;