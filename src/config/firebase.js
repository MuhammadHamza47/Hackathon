// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqIJ-HARKX8_pwgaoG3p7RuJ2kWf2ZRNQ",
  authDomain: "student-management-syste-d2e63.firebaseapp.com",
  projectId: "student-management-syste-d2e63",
  storageBucket: "student-management-syste-d2e63.appspot.com",
  messagingSenderId: "225730252966",
  appId: "1:225730252966:web:2d7402d3e83a7f71d62467"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const firestore = getFirestore(app);
export { auth, firestore };