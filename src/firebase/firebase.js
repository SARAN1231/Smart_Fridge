import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBVXm-IfxC99Q5xXoCDCmHOTVxQoEQkyHM",
  authDomain: "smart-fridge-369.firebaseapp.com",
  databaseURL: "https://smart-fridge-369-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-fridge-369",
  storageBucket: "smart-fridge-369.appspot.com",
  messagingSenderId: "84239625927",
  appId: "1:84239625927:web:42fc4f2d57e686e92398e2",
  measurementId: "G-TRMNF5GF8S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
const auth = getAuth(app);


const database = getDatabase(app);

export { app, auth,  database, ref,onValue }; // Export Firestore as db
