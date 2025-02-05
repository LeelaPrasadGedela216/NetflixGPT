// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1zrTp_admGGsRAm-5e95u5ypFRlqNr9Q",
  authDomain: "netflixgpt-12c62.firebaseapp.com",
  projectId: "netflixgpt-12c62",
  storageBucket: "netflixgpt-12c62.firebasestorage.app",
  messagingSenderId: "518425730339",
  appId: "1:518425730339:web:8f76959716103720ac8096",
  measurementId: "G-DSDNG7QGG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();// here we can also call this getAuth in every component but from here I am creating only once then reusing it wherever I require by importing.