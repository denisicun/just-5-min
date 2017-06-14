import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import * as firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { Actions } from 'react-native-router-flux'; // New code

export default class Welcome extends Component{
  constructor(props){
    super();
  }

  render() {
    // <Image style={{width: 50, height: 50, paddingLeft: 5, marginRight: 5}}
    // source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} />
    return (
      <View style={styles.container}>
        <Text>
          Welcome!
        </Text>
        <Button onPress={() => Actions.login()}>        
          Sign in with E-mail
        </Button>
        <Button onPress={() => Actions.login()}>
          Sign in with Google
        </Button>
        <Button onPress={() => Actions.login()}>
          New here?
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
//    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },
});
