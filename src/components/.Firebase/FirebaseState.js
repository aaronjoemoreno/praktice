// import React, { useReducer } from 'react';
// import FirebaseContext from './context';
// import FirebaseReducer from './firebaseReducer';

// import { SIGN_IN_USER, KEEP_USER } from './types';

// const FirebaseState = props => {
//     const initialState = {
//         user: false,
//         userName: null,
//     }
//     const [state, dispatch] = useReducer(FirebaseReducer, initialState);

//     const signInUser = (arg) => {
//         dispatch({
//             type: SIGN_IN_USER,
//             payload: true,
//         })
//     };

//     const keepUser = (arg) => {
//         dispatch({
//             type: KEEP_USER,
//             payload: arg
//         })
//     }

//     return (
//         <FirebaseContext.Provider
//         value={{
//                 user: state.user,
//                 userName: state.userName,
//                 signInUser,
//                 keepUser
//         }}>
//             {props.children}
//         </FirebaseContext.Provider>
//     )
// }

// export default FirebaseState;