import React, { Component } from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import * as firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { Actions } from 'react-native-router-flux'; // New code

export default class SetName extends Component{
  state = { userName: '' };

  constructor(props){
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Please tell us your name:
        </Text>
        <Input
        placeholder="Your full name"
        label="Name"
        value={this.state.userName}
        onChangeText={userName => this.setState({ userName })}/>
        <Button onPress={() => Actions.workout({userName: this.state.userName})}>
          Lets start the insenety!!!!
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
