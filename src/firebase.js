// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOCFyphtUP3zTiiWtsehY6LQrJtqyMlHY",
  authDomain: "simple-todo-4114e.firebaseapp.com",
  projectId: "simple-todo-4114e",
  storageBucket: "simple-todo-4114e.appspot.com",
  messagingSenderId: "558738332161",
  appId: "1:558738332161:web:62b1d21176804147817e00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage()