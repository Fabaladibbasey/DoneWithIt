// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIqzdfWYxF1WoWbG0UYNV9wx2K35d_Su4",
  authDomain: "donewithit-adf6d.firebaseapp.com",
  projectId: "donewithit-adf6d",
  storageBucket: "donewithit-adf6d.appspot.com",
  messagingSenderId: "475174081323",
  appId: "1:475174081323:web:1e352e70e99921d3d16b6e",
  measurementId: "G-TBGJF3FEDW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
