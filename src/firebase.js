// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC5AvABPHG_RmNFJmgNa0s1nG8fc_GBKss",

  authDomain: "styled-ecommerce-app.firebaseapp.com",

  projectId: "styled-ecommerce-app",

  storageBucket: "styled-ecommerce-app.appspot.com",

  messagingSenderId: "392792198493",

  appId: "1:392792198493:web:82c30dbb69487959fe2cb4",

  measurementId: "G-BVYSQB7ERB",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const analytics = getAnalytics(firebaseApp);
