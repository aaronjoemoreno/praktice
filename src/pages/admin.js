import React from 'react'
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useEffect } from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyDlugTZpdnp81EXNlKoox7d-7qML8_cwfA",
    authDomain: "praktice-74dd1.firebaseapp.com",
    projectId: "praktice-74dd1",
    storageBucket: "praktice-74dd1.appspot.com",
    messagingSenderId: "641249849412",
    appId: "1:641249849412:web:e51cbdb318a7b3403ccc11",
    measurementId: "G-D0HKBJ1GMG"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

const Admin = () => {

    useEffect(() => {
        console.log('building...')
        // const ref = firestore.collection('members').doc('Oo151mHioYBlViWGisuS');
        // // ref.onSnapshot(data => {
        // //     console.log(data.data())
        // // })
        // ref.get().then(data => {
        //     console.log(data.data())
        // })

    },[])

    return (
        <div>
            <h1>Admin</h1>
        </div>
    )
}

export default Admin