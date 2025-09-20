// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-fusion-lab.firebaseapp.com",
  projectId: "ai-fusion-lab",
  storageBucket: "ai-fusion-lab.firebasestorage.app",
  messagingSenderId: "200558647382",
  appId: "1:200558647382:web:37f8c89ebef671028c03f7",
  measurementId: "G-BB7RLTTG92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app,'ai-fusion-lab');