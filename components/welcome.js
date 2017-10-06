import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import * as firebase from 'firebase';
import { Card, CardSection, Input, Spinner, Header } from './common';
import { Actions } from 'react-native-router-flux'; // New code
import FacebookButton from './FacebookButton';
import { LoginManager, AccessToken, LoginButton} from 'react-native-fbsdk';
import BackgroundImage from './BackgroundImage';
import Button from 'apsl-react-native-button';

export default class Welcome extends Component{

  state = { loggedIn: null };

  constructor(props){
    super();
  }

  login(){

    const provider = new firebase.auth().FacebookAuthProvider;
    console.log(provider);
    console.log(LoginManager);
    LoginManager.logInWithReadPermissions(['public_profile'])
      .then(loginResult => {
          if (loginResult.isCancelled) {
              console.log('user canceled');
              return;
          }
          AccessToken.getCurrentAccessToken()
          .then(accessTokenData => {
              const credential = provider.credential(accessTokenData.accessToken);
              return firebae.auth().signInWithCredential(credential);
          })
          .then(credData => {
              console.log(credData);
          })
          .catch(err => {
              console.log(err);
          });
      });

  }

  // authenticate = (token) => {
  //     console.log('firebase kicks in');
  //     const provider = firebase.auth.FacebookAuthProvider
  //     const credential = provider.credential(token)
  //     return firebase.auth().signInWithCredential(credential)
  // }
  //
  // login = async () => {
  //   const ADD_ID = '321076714972391'
  //   const options = {
  //     permissions: ['public_profile', 'email'],
  //   }
  //
  //   console.log('facebook login started');
  //
  //   const {type, token} = await Expo.Facebook.logInWithReadPermissionsAsync(ADD_ID, options);
  //   if (type === 'success') {
  //     console.log('another thiong happens');
  //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
  //     console.log(await response.json());
  //     this.authenticate(token);
  //   }}

  render() {
    // <Image style={{width: 50, height: 50, paddingLeft: 5, marginRight: 5}}
    // source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
    return (
      <BackgroundImage>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome!
          </Text>
          <Button onPress={() => Actions.login()}>
            Sign in with E-mail
          </Button>
          <View style={styles.container}>
            <LoginButton
            publishPermissions={["publish_actions"]}
            onLoginFinished={
              (error, result) => {
                if (error) {
                  alert("login has error: " + result.error);
                } else if (result.isCancelled) {
                  alert("login is cancelled.");
                } else {
                  AccessToken.getCurrentAccessToken().then(
                    (data) => {
                      alert(data.accessToken.toString())
                    }
                  )
                }
              }
            }
            onLogoutFinished={() => alert("logout.")} />
          </View>
        </View>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: 'transparent',
  },
  welcome: {
    flex: 1,
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
