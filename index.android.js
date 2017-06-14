// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  * @flow
//  */
//  'use strict';
//  import {
//    AppRegistry,
//    StyleSheet,
//    Text,
//    View,
//    Button,
//    TextInput
//  } from 'react-native';
//  // import PopupDialog, { SlideAnimation } from 'react-native-popup-dialog';
//  import { DialogComponent, SlideAnimation, DialogTitle } from 'react-native-dialog-component';
// import React, { Component } from 'react';
//
// import firebase from './utils/fireBaseUtil';
// import SingUp from './components/SingUp';
//
//
// export default class puhsNotTest extends Component {
//
//   const state = {
//     showDialog: false
//   };
//
//   SingIn() {
//     console.log('something happens');
//
//     firebase.auth().createUserWithEmailAndPassword('email@gmail.com', 'password').then((user) => {
//       console.log(user);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       //var errorCode = error.code;
//       const errorMessage = error.message;
//
//       console.log(errorMessage);
//   });
// }
//
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to Just 5 Minutes!
//         </Text>
//         <Text style={styles.instructions}>
//           The best workout app using only your name!!
//         </Text>
//         <Button
//         title='Sing in'
//         onPress={() => {
//           this.setState((showDialog, ture));
//         }}
//         />
//         <SingUp
//         show={this.state.showDialog}
//         />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   singInForm: {
//     textAlign: 'center',
//   },
// });
//
// AppRegistry.registerComponent('puhsNotTest', () => puhsNotTest);
'use strict';
import { AppRegistry } from 'react-native';
import App from './components/app';

 AppRegistry.registerComponent('puhsNotTest', () => App);
