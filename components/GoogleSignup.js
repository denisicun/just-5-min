import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux'; // New code

class GoogleSignup extends Component {
  state = { email: '', password: '', error: '', loading: false, username: '' };

  constructor(props) {
    super(props);

  }

  onButtonPress() {
    const { email, password } = this.state;


    // // Using a redirect.
    // firebase.auth().getRedirectResult().then(function(result) {
    //   if (result.credential) {
    //     // This gives you a Google Access Token.
    //     var token = result.credential.accessToken;
    //   }
    //   var user = result.user;
    // })

    // var credential = firebase.auth.GoogleAuthProvider.credential(
    //       googleUser.getAuthResponse().id_token);
    //
    // firebase.auth().signInWithCredential(credential).then((result) => {
    //   console.log(result);
    // }).catch(function(error) {
    //     console.log(error);
    //   });

    // var provider = new firebase.auth.GoogleAuthProvider();
    //
    // console.log(provider);
    //
    // provider.addScope('profile');
    // provider.addScope('email');
    // console.log(provider);
    //
    // firebase.auth().signInWithPopup(provider).then(function(result) {
    //   console.log(result);
    //   // This gives you a Google Access Token.
    //   var token = result.credential.accessToken;
    //   // The signed-in user info.
    //   var user = result.user;
    // }).catch(function(err) {
    //   console.log(err);
    // });

    this.setState({ error: '', loading: true });

    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(() => {
    //     console.log('trying to create user');
    //     console.log(email);
    //     console.log(password);
    //     firebase.auth().createUserWithEmailAndPassword(email, password)
    //       .then(this.onLoginSuccess.bind(this))
    //       .catch((error) => {
    //         console.log(error);
    //         this.onLoginFail.bind(this);
    //       });
    //   });
  }


  onLoginFail() {
    this.setState({ error: 'Authentication Failed', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });

    // navigate to the set name
    Actions.signedUp();
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return (
      <View>
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      </View>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@gmail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default GoogleSignup;
