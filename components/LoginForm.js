import React, { Component } from 'react';
import { Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Card, CardSection, Input, Spinner } from './common';
import { Actions } from 'react-native-router-flux'; // New code
import BackgroundImage from './BackgroundImage';
import Button from 'apsl-react-native-button';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false, username: '' };

  constructor(props) {
    super(props);
//    state = { email: '', password: '', error: '', loading: false, username: '' };
    console.log('this.props');
    console.log(props);
    console.log(this.props);
  }

  componentWillMount(){
    if (this.props.username) {
      console.log(this.props.userName);
      //this.state.setState({username: this.props.userName});
    }
  }

  componentWillMount(){
    if (this.props.userName) {
      console.log(this.props.userName);
      //this.state.setState({username: this.props.userName});
    }
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        console.log('trying to create user');
        console.log(email);
        console.log(password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((error) => {
            console.log(error);
            this.onLoginFail.bind(this);
          });
      });
  }

  onButtonPressD() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword('denisicun@gmail.com', '123456')
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        console.log('trying to create user');
        console.log(email);
        console.log(password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch((error) => {
            console.log(error);
            this.onLoginFail.bind(this);
          });
      });
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
        <Button onPress={this.onButtonPressD.bind(this)}>
          Log in D
        </Button>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.transbg}>
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

            {this.renderButton()}
        </Card>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  transbg:{
    backgroundColor:'transparent'
  }
};

export default LoginForm;
