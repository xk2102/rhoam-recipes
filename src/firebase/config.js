import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBx-dPpY3M0HEj1YvkDjfIbVG8hKTCf9-Y",
  authDomain: "rhoam-recipes-59c26.firebaseapp.com",
  projectId: "rhoam-recipes-59c26",
  storageBucket: "rhoam-recipes-59c26.appspot.com",
  messagingSenderId: "381080186181",
  appId: "1:381080186181:web:5e1203b7744668c5fe222c",
};

// initialize app
initializeApp(firebaseConfig);
// initialize firestore
const db = getFirestore();
// initialize firebase auth
const auth = getAuth();

export { db, auth };
