// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "@firebase/auth";
import {getStorage} from "firebase/storage";
import { initializeFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyAPdzdIh-AleY7oNF1l42OikoME4onx1ac",
  authDomain: "database-cca7e.firebaseapp.com",
  databaseURL: "https://database-cca7e-default-rtdb.firebaseio.com",
  projectId: "database-cca7e",
  storageBucket: "database-cca7e.appspot.com",
  messagingSenderId: "442569004571",
  appId: "1:442569004571:web:1df472ace03e98e54e4abe",
  measurementId: "G-HL3FT87EGW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app,{
    experimentalForceLongPolling: true,
});

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth,email,password);
}

export function signUp(email,password) {
    return createUserWithEmailAndPassword(auth,email,password);
}