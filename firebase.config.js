// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu9guPxB0YmGDYU4W54BQDyqTYcZ4ukws",
  authDomain: "winter-donation-23a1c.firebaseapp.com",
  projectId: "winter-donation-23a1c",
  storageBucket: "winter-donation-23a1c.firebasestorage.app",
  messagingSenderId: "181296057022",
  appId: "1:181296057022:web:c3b99639b6ad04a1072cef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;      

