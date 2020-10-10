import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text
} from 'react-native';
import Friend from './Friend';
isloading = true;
const FriendList = ({userId}) => {
  
  const [friends, setFriends] = useState([])
  const getFriends = (userId) => {
    fetch(`http://localhost:8080/friends/${userId}`, {
        method: 'GET',
    }).then((response) => response.json())
    .then((json) => {
      console.log('json', json)
      setFriends(json)
      console.log('friends', friends)
    })
    .catch((error) => {
      console.error(error);
    });
  }

  if (isloading) {
    getFriends(userId)
    isloading = false
  } 
  useEffect(()=>{
    getFriends(userId)
  },[userId])  

  
 
  return (
      <View>
          <Text>내 친구 목록({friends ? friends.length: 0})</Text>
          <Friend/>
          {friends ? friends.map((friend, idx) => {
            return <Friend key={idx} id={friend.id} name={friend.name} pic={friend.profileImage} message={friend.profileMessage}/>
          }) : null}
      </View>
  );
};

const styles = StyleSheet.create({
 mainView:{
    marginTop: 50,
  },
});

export default FriendList;