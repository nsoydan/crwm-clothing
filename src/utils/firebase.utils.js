// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  SignInWithPopup,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdIfG_5QRGL6PaFO8WdgHeVX0QV7vZV0w",
  authDomain: "crwm-clothing-44e61.firebaseapp.com",
  projectId: "crwm-clothing-44e61",
  storageBucket: "crwm-clothing-44e61.appspot.com",
  messagingSenderId: "1007415137115",
  appId: "1:1007415137115:web:0abba19d404e36503ec07e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt:"select_account",
});

export const auth=getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);