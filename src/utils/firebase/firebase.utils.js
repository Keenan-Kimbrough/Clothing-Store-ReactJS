import {initializeApp} from 'firebase/app'
import {getAuth, signInWithRedirect, signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyClOJ7FNeZY4uYzYFqkBBVBO0Yv5L0A8mA",
    authDomain: "clothing-website-db-ed0d8.firebaseapp.com",
    projectId: "clothing-website-db-ed0d8",
    storageBucket: "clothing-website-db-ed0d8.appspot.com",
    messagingSenderId: "110355161938",
    appId: "1:110355161938:web:a5a7acd3b519432a03908b"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
      prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInGooglePopup = () => signInWithPopup(auth, provider)