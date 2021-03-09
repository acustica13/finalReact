  import firebase from 'firebase/app'
  import 'firebase/firestore'
  import 'firebase/auth'

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBVmix11arsY1iRodKZrB-q-FBv6lok0Po",
    authDomain: "react-paula.firebaseapp.com",
    projectId: "react-paula",
    storageBucket: "react-paula.appspot.com",
    messagingSenderId: "790361122394",
    appId: "1:790361122394:web:9369472a77590c9ebc9a63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const auth = firebase.auth()

  export {db,auth}