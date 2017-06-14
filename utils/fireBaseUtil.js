//import RNFirebase from 'react-native-firebase';
import * as firebase from 'firebase';

const configurationOptions = {
    apiKey: 'AIzaSyBYJm2EKnXN4A3ja5v0yefdVRm_VoTYit8',
    authDomain: 'just-5-minutes.firebaseapp.com',
    databaseURL: 'https://just-5-minutes.firebaseio.com',
    projectId: 'just-5-minutes',
    storageBucket: 'just-5-minutes.appspot.com',
    messagingSenderId: '147791624423'
};

firebase.initializeApp(configurationOptions);

export default firebase;
