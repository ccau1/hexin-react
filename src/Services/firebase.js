import firebase from "firebase";
require("firebase/firestore");

// TODO:: should be set from env instead
let config = {
  apiKey: "AIzaSyAwot8aaP7wgKRyaw1LcGMZjLKGVzN0KSg",
  authDomain: "reacttemplate-d92a7.firebaseapp.com",
  databaseURL: "https://reacttemplate-d92a7.firebaseio.com",
  projectId: "reacttemplate-d92a7",
  storageBucket: "reacttemplate-d92a7.appspot.com",
  messagingSenderId: "166168134240"
};

firebase.initializeApp(config);

//bottom of the file
export const db = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
