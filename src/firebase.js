// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDda9iNTf0hwpRhihs46R_Mr4qoXULovzw",
  authDomain: "todo-73e4e.firebaseapp.com",
  projectId: "todo-73e4e",
  storageBucket: "todo-73e4e.appspot.com",
  messagingSenderId: "227977856875",
  appId: "1:227977856875:web:8e25fc23ad795ac5fcee2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage()