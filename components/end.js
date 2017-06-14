import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
//import * as firebase from 'firebase';
//import firebase from '../utils/fireBaseUtil';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';

class End extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => consloe.log('fuuu')}>
        Share on Facebook
        </Button>
        <Text style={styles.welcome}>You are Done!</Text>
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
    marginTop: 50,
    color: '#ffffff',
  },
});

export default End;
