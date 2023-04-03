import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDGLSAiMhls6NB0O7rTCRmw1OeDU405YNM",
    authDomain: "loginmern-39dad.firebaseapp.com",
    projectId: "loginmern-39dad",
    storageBucket: "loginmern-39dad.appspot.com",
    messagingSenderId: "124903357531",
    appId: "1:124903357531:web:08b003b90dd9383b9c537e"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const googleAuthProvider = new  firebase.auth.GoogleAuthProvider();