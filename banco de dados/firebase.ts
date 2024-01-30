// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import * as firestore from  'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6iDCoPBTbxJKWN22qd5bG0tbl-WsPefw",
  authDomain: "teste-b006e.firebaseapp.com",
  projectId: "teste-b006e",
  storageBucket: "teste-b006e.appspot.com",
  messagingSenderId: "822779795723",
  appId: "1:822779795723:web:39e4fbbe8bb18df21bea0e",
  measurementId: "G-WWVYQQVNK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = firestore.getFirestore(app)
export {firestore}

