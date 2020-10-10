import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StyleSheet,
  View, Text
} from 'react-native';

import {
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  } from 'react-native-fbsdk';

const LoginScreen = (props) => {
  const [state, setState] = useState({
    myInformation: {
    }
  });
  const [profile, setProfile] = useState({})
  const LoginRequest = (firstName, image) => {
    fetch('http://localhost:8080/auth', {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 2342,
        name: firstName,
        auth:"facebook",
        profileImage: image
      })
    }).then((response) => response.json())
    .then((json) => {
      setProfile({json})
    })
    .catch((error) => {
      console.error(error);
    });
  }

  const GetInfomationFromToken = (accessToken) => {
    const parameters = {
      fields: {
        string: 'id, first_name, last_name, picture',
      },
    };
    const profileRequest = new GraphRequest(
      '/me',
      {accessToken, parameters: parameters},
      (error, profileInfoResult) => {
        if (error) {
          console.log('login info has error: ' + error);
        } else {
          setState({myInformation: profileInfoResult});
          console.log('result:', profileInfoResult);
          LoginRequest(profileInfoResult.first_name, profileInfoResult.picture.data.url);
          props.navigation.navigate("Main", {profileInfo: profile, accessToken: accessToken})
        }
      },
    );
    new GraphRequestManager().addRequest(profileRequest).start();
};
  
  return (
    <View style={{marginTop: '90%', alignItems: 'center'}}>
      <LoginButton
        onLoginFinished={(error, result) =>{
          if (error) {
            console.log('login has error: ' + error);
          } else if (result.isCancelled) {
            console.log('login is cancelled.')
          } else {
            AccessToken.getCurrentAccessToken().then(myData => {
              const accessToken = myData.accessToken.toString();
              GetInfomationFromToken(accessToken);
            });
            console.log(state.myInformation)
            
          }
        }}
        onLogoutFinished={()=> setState({myInformation:{}})}
      />
    </View>
  );
};

const styles = StyleSheet.create({
 
});

export default LoginScreen;