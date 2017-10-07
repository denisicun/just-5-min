import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import LoginSignup from './loginSignup';
import SingedUp from './loginSuccess';
import Welcome from './welcome';
import Workout from './workout';
import End from './end';
import { Button, Card, CardSection, Input, Spinner, Header } from './common';
import { Router, Scene } from 'react-native-router-flux';
import BackgroundImage from './BackgroundImage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }

  componentWillMount() {
    if(!firebase.apps.length){
      // init firebase
      firebase.initializeApp({
      apiKey: 'AIzaSyBYJm2EKnXN4A3ja5v0yefdVRm_VoTYit8',
      authDomain: 'just-5-minutes.firebaseapp.com',
      databaseURL: 'https://just-5-minutes.firebaseio.com',
      projectId: 'just-5-minutes',
      storageBucket: 'just-5-minutes.appspot.com',
      messagingSenderId: '147791624423'
     });
    }
  }

  componentDidMount(){
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
      <BackgroundImage style={{backgroundColor:'transparent'}}>
        <Router sceneStyle={{backgroundColor:'transparent'}} hideNavBar>
          <Scene key="root">
            <Scene
              key="welcome"
              component={Welcome}
              title="Welcome"
              initial={() => {!this.state.loggedIn ? true : true}}
            />
             <Scene
               key="login"
               component={LoginSignup}
               title="Sign up"
               initial={() => {this.state.loggedIn ? true : false}}
             />
             <Scene
               key="signedUp"
               component={SingedUp}
               title="Set your name"
             />
             <Scene
               key="workout"
               component={Workout}
               title="Just do it!"
             />
             <Scene
               key="finish"
               component={End}
               title="You are done"
             />
            </Scene>
        </Router>
      </BackgroundImage>
    );
  }
}

const styles = StyleSheet.create({
    transBG: {
      flex: 1,
      backgroundColor: 'transparent',
    },
});


export default App;
