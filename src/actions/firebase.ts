// npm install firebase

// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB_T7M4zm3c2RTgx90PZe9kmbz4MdhYuhs",
    authDomain: "gowedi.firebaseapp.com",
    projectId: "gowedi",
    storageBucket: "gowedi.appspot.com",
    messagingSenderId: "750057262296",
    appId: "1:750057262296:web:6b46ef3abb2b2720da1bad",
    measurementId: "G-S0L4F15XW6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);