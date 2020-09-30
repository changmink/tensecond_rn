import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

import IC_back from '../../assets/images/ic_back.svg'
import IC_hamburger from '../../assets/images/ic_hamburger.svg'


const Header = ({name}) => {
  return (
    <View style={styles.main}>
        <IC_back style={styles.back}/>
        <Text style={styles.name}>{name}</Text>
        <IC_hamburger/>
    </View>
  );
};

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        marginBottom: 14
    },
    back: {marginLeft: 10},
    name: {flex: 1, fontSize:20}
});

export default Header;