// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCtJeYVuhKu-D-4gGrPVtnLLmtwDhnd_U",
  authDomain: "expense-tracker-de1b0.firebaseapp.com",
  projectId: "expense-tracker-de1b0",
  storageBucket: "expense-tracker-de1b0.appspot.com",
  messagingSenderId: "67586664751",
  appId: "1:67586664751:web:d4ac629066b72d81d4d9da",
  measurementId: "G-2ZPQPLMXWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db =getFirestore(app)

//firebase login
//firebase init
//firebase deploy