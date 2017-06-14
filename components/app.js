import React, { Component } from 'react';
import { View } from 'react-native';
import * as firebase from 'firebase';
import LoginSignup from './loginSignup';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { Router, Scene } from 'react-native-router-flux';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBYJm2EKnXN4A3ja5v0yefdVRm_VoTYit8',
      authDomain: 'just-5-minutes.firebaseapp.com',
      databaseURL: 'https://just-5-minutes.firebaseio.com',
      projectId: 'just-5-minutes',
      storageBucket: 'just-5-minutes.appspot.com',
      messagingSenderId: '147791624423'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <Router>
       <Scene key="root">
          <View>
            <Header headerText="Just 5 Minutes!" />
          </View>
          <Scene
            
          />
        </Scene>
      </Router>
    );
  }
}

export default App;
