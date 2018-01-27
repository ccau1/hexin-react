import firebase from "firebase";
require("firebase/firestore");

let config = {
  apiKey: "AIzaSyAQh6k-3RtovjVdrDEofnhLggltyw3h8NU",
  authDomain: "kazpad-69db6.firebaseapp.com",
  databaseURL: "https://kazpad-69db6.firebaseio.com",
  projectId: "kazpad-69db6",
  storageBucket: "kazpad-69db6.appspot.com",
  messagingSenderId: "950034229852"
};

firebase.initializeApp(config);

//bottom of the file
export const db = firebase.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
