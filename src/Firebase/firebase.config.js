// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYNXYsbANN3C3uDxZsa9xGea0eebU9gTg",
  authDomain: "craft-store-assignment.firebaseapp.com",
  projectId: "craft-store-assignment",
  storageBucket: "craft-store-assignment.appspot.com",
  messagingSenderId: "387134816017",
  appId: "1:387134816017:web:ecb9ceaebe2addd988d6b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
export default auth;
