import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBpQhErkJJeHC8G2w_yN-ydjWcn7u9qgEE",
  authDomain: "fir-login-fac65.firebaseapp.com",
  projectId: "fir-login-fac65",
  storageBucket: "fir-login-fac65.appspot.com",
  messagingSenderId: "441926321845",
  appId: "1:441926321845:web:4cdc27c2b6c27b1f51a0fc",
  measurementId: "G-H29572W067"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;