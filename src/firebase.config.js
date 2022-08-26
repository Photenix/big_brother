// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import {getFirestore, collection, getDocs, addDoc, collectionGroup} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlS34SdT24OlXbQWb_i3J2rE7d_BFqlXo",
  authDomain: "weather-app-jm4p1r0.firebaseapp.com",
  projectId: "weather-app-jm4p1r0",
  storageBucket: "weather-app-jm4p1r0.appspot.com",
  messagingSenderId: "246982820823",
  appId: "1:246982820823:web:6c9c71fd0d7b31f5634192"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);


export const providerGoogle = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(authentication, providerGoogle)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("fotoPerfil", photoURL);
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};

const providerF = new FacebookAuthProvider();

export const signInWithFacebook = () => {
  signInWithPopup(authentication, providerF)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    console.log(result);
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);

    // ...
  });
}



export const db = getFirestore();