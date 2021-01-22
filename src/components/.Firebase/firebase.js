import firebase from 'firebase';

const config = {
    apiKey: process.env.GATSBY_FIREBASE_API_KEY,
    authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKE,
    messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.GATSBY_FIREBASE_APP_ID
};

const Firebase = firebase.initializeApp(config);

console.log(Firebase);

export default Firebase;