import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import * as firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { Actions } from 'react-native-router-flux'; // New code

export default class Welcome extends Component{
  constructor(props){
    super();
  }

  render() {
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
