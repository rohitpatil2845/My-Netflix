// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEmcamwLaY7HlHdi-5prOtop-RiovTbx0",
  authDomain: "mynetflix-13692.firebaseapp.com",
  projectId: "mynetflix-13692",
  storageBucket: "mynetflix-13692.firebasestorage.app",
  messagingSenderId: "744236386040",
  appId: "1:744236386040:web:6d3ec130b401be5155dd0d",
  measurementId: "G-JPECJ5DWG8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();