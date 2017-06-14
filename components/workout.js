import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import * as firebase from 'firebase';
//import firebase from '../utils/fireBaseUtil';
import { Header, Button, Spinner } from './common';
import LoginForm from './LoginForm';
import { Actions } from 'react-native-router-flux'; // New code

class Workout extends Component {
  state = { userName: '', currWorkout: {}, curIndex: 0 };

  constructor(props){
    super(props);

    let url = 'https://aqueous-wave-24345.herokuapp.com/exerciesForName/' + this.props.userName;

    console.log(url);

    fetch(url)
    .then((response) => response.text())
      .then((responseText) => {
          console.log(responseText);
          console.log(this.state);
          this.setState({currWorkout: JSON.parse(responseText)});
          console.log(this.state.currWorkout);
        })
        .catch((error) => {
          console.warn(error);
        });

  }

  componentWillMount() {

  }

  renderWorkout(){

    if(!this.state.currWorkout.exercises){
      return(
        <Text>Hey</Text>
      );
    } else {

      //console.log(this.state.currWorkout.userName[0]);
      // this.state.currWorkout.exercises[0].forEach((somethis) => {
      //   console.log('fun');
      //   console.log(somethis);
      // });
      // http://d23dyxeqlo5psv.cloudfront.net/cat.gif
      //this.state.currWorkout.exercises[0][0].exercisePic
      //console.log(this.state.currWorkout.exercises[0][0].exercisePic);
      return(
        <Image style={{width: 250, height: 250, paddingLeft: 5, marginRight: 5}}
        source={{uri: this.state.currWorkout.exercises[0][this.state.curIndex].exercisePic}} />
      );
    }


    return(
      <Text>Hey</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.userName}</Text>
        {this.renderWorkout()}
        <Button
        onPress={() => {
          if (this.state.currWorkout.exercises) {
            if (this.state.currWorkout.exercises[0].length > this.state.curIndex) {
              if ((this.state.curIndex + 1) != this.state.currWorkout.exercises[0].length) {
                  this.setState({curIndex: this.state.curIndex + 1});
              } else {
                Actions.finish();
              }
            } else {
              // got to the end!!
              Actions.finish();
            }
          }
        }
      }
        >
        Next
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

export default Workout;
