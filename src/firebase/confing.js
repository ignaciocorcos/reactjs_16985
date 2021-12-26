// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd1NdijjtxavIhNQrM0wjOEW4C5wiuiZc",
  authDomain: "reactjs-16985.firebaseapp.com",
  projectId: "reactjs-16985",
  storageBucket: "reactjs-16985.appspot.com",
  messagingSenderId: "352752279734",
  appId: "1:352752279734:web:d6170f08a0559e98970617"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)