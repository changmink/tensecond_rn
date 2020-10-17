import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

const Chat = ({profile, name, length, time, count}) => {
  return (
    <View style={styles.main}>
        <Image
            style={styles.profile}
            source={profile}
        />
        <View style={styles.mid}>
            <Text>{name}</Text>
            <Text style={styles.lengthText}>{length}</Text>
        </View>
        <View style={styles.right}>
            <Text style={styles.timeText}>{time}</Text>
            <View style={styles.count}>
                <Text style={styles.countText}>{count}</Text>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    profile:{
        width: 48,
        height: 48,
        marginRight: 8,
        borderRadius:1,
    },
    main:{
        flexDirection: 'row',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
    },
    mid:{
        justifyContent: 'flex-end'
    },
    right:{
        alignItems: 'flex-end',
        flex: 1,
    },
    lengthText:{
        fontSize: 12,
        color: '#888888'
    },
    timeText:{
        fontSize: 11,
        color: '#888888'
    },
    count: {
        backgroundColor: '#0fe1a3',
        marginTop: 10,
        borderRadius: 50,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    countText: {
        color: '#ffffff',
    }
});

export default Chat;