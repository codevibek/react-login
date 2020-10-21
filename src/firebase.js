import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD4Ci1Q9joBmaUtpoilLTlGh67krISO7pY",
    authDomain: "login-eccf0.firebaseapp.com",
    databaseURL: "https://login-eccf0.firebaseio.com",
    projectId: "login-eccf0",
    storageBucket: "login-eccf0.appspot.com",
    messagingSenderId: "858550785783",
    appId: "1:858550785783:web:8afc0679f06a22543aa5f2",
    measurementId: "G-4KZ94PXSEV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig) 

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export {db, auth}