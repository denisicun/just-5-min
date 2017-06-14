import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
// import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
import { DialogComponent, SlideAnimation, DialogTitle } from 'react-native-dialog-component';
import React, { Component } from 'react';
import firebase from '../utils/fireBaseUtil';

class EmailSingUp extends Component {
  render() {
    return (
      <DialogComponent
        ref={(dialogComponent) => { this.dialogComponent = dialogComponent; }}
        dialogAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
        width='80%'
        height='60%'
      >
        <DialogTitle title="Sing up!" />
        <View>
          <Text style={styles.instructions}>Hello</Text>
          <TextInput placeholder='E-mail' style={styles.singInForm} />
          <TextInput
          style={styles.singInForm}
          secureTextEntry={true}
          placeholder='Password'
          />
          <Button
          onPress={() => {
            this.SingIn();
          }}
          title='Complete sing in!'
          />
        </View>
      </DialogComponent>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  singInForm: {
    textAlign: 'center',
  },
});

export default EmailSingUp;
