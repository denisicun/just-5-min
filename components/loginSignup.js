import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
//import firebase from '../utils/fireBaseUtil';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux'; // New code

class LoginSignup extends Component {
  state = { loggedIn: null };

  constructor(props){
    super(props);
  }

  componentWillMount() {
    // firebase.initializeApp({
    //   apiKey: 'AIzaSyBYJm2EKnXN4A3ja5v0yefdVRm_VoTYit8',
    //   authDomain: 'just-5-minutes.firebaseapp.com',
    //   databaseURL: 'https://just-5-minutes.firebaseio.com',
    //   projectId: 'just-5-minutes',
    //   storageBucket: 'just-5-minutes.appspot.com',
    //   messagingSenderId: '147791624423'
    // });
    //
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View>
            <Button
            onPress={() => Actions.workout({userName: 'Denis'})}
            >
              Workout!!
            </Button>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default LoginSignup;
