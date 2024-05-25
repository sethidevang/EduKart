import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_XkHSMsv0wnifVY8MdJvGeIMNB83GsDc",
    authDomain: "educart-6c6ee.firebaseapp.com",
    projectId: "educart-6c6ee",
    storageBucket: "educart-6c6ee.appspot.com",
    messagingSenderId: "4903671752",
    appId: "1:4903671752:web:18314b62a6e491e5a152fd",
    measurementId: "G-3GWXBSV901"
  };

console.log(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();

export { auth, provider };
export default db;