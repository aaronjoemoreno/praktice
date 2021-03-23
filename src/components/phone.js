// import React from 'react'
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// import { useEffect, useRef, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';

// const firebaseConfig = {
//     apiKey: "AIzaSyDlugTZpdnp81EXNlKoox7d-7qML8_cwfA",
//     authDomain: "praktice-74dd1.firebaseapp.com",
//     projectId: "praktice-74dd1",
//     storageBucket: "praktice-74dd1.appspot.com",
//     messagingSenderId: "641249849412",
//     appId: "1:641249849412:web:e51cbdb318a7b3403ccc11",
//     measurementId: "G-D0HKBJ1GMG"
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// const auth = firebase.auth();
// const firestore = firebase.firestore();

// const Phone = () => {
//   const [user] = useAuthState(auth);
//   return (
//     <div className="App">
//       <header className="App-header">{user ? <SignUp /> : <SignUp />}</header>
//     </div>
//   );
// }

// function SignUp() {
//   const [recaptcha, setRecaptcha] = useState(null);
//   const element = useRef(null);

//   useEffect(() => {
//     if (!recaptcha) {

//       const verifier = new firebase.auth.RecaptchaVerifier(element.current, {
//         size: 'invisible',
//       })

//       verifier.verify().then(() => setRecaptcha(verifier));

//     }
//   });

//   return (
//     <>
//       {recaptcha && <PhoneNumberVerification recaptcha={recaptcha} />}
//       <div ref={element}></div>
//     </>
//   );
// }

// function PhoneNumberVerification({ recaptcha }) {
//   const [digits, setDigits] = useState('');
//   const [invited, setInvited] = useState(false);
//   const [confirmationResult, setConfirmationResult] = useState(null);
//   const [code, setCode] = useState('');

//   const phoneNumber = `+1${digits}`;

//   // Step 1 - Verify Invite
//   useEffect(() => {
//     if (phoneNumber.length === 12) {
//       const ref = firestore.collection('invites').doc(phoneNumber);
//       console.log(ref);
//       ref.get().then(({ exists }) => {
//         setInvited(exists)
//       });
//     } else {
//       setInvited(false);
//     }
//   }, [phoneNumber]);

//   // Step 2 - Sign in
//   const signInWithPhoneNumber = async () => {
//     setConfirmationResult( await auth.signInWithPhoneNumber(phoneNumber, recaptcha) );
//   };

//   // Step 3 - Verify SMS code
//   const verifyCode = async () => {
//     const result = await confirmationResult.confirm(code);
//     console.log(result);
//   };

//   return (
//     <div>
//       <h1>Sign Up!</h1>
//       <fieldset>
//         <label>10 digit US phone number</label>
//         <br />
//         <input value={digits} onChange={(e) => setDigits(e.target.value)} />

//         <button className={!invited ? 'hide' : ''} onClick={signInWithPhoneNumber}>
//           Sign In
//         </button>

//         {invited ?
//           <p className="success">You are one of the cool kids! 👋</p> :
//           <p className="danger">This phone number is not cool 😞</p>

//         }
//       </fieldset>

//       {confirmationResult && (
//         <fieldset>
//           <label>Verify code</label>
//           <br />
//           <input value={code} onChange={(e) => setCode(e.target.value)} />

//           <button onClick={verifyCode}>Verify Code</button>
//         </fieldset>
//       )}
//     </div>
//   );
// }

// export default Phone