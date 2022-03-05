// Import the functions you need from the SDKs you need
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
        'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return firebaseConfig;
    }
}
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3Zif6yn-Mahe9fhqyu9siT4mC8HCFRCI",
    authDomain: "tag-me-b82ca.firebaseapp.com",
    projectId: "tag-me-b82ca",
    storageBucket: "tag-me-b82ca.appspot.com",
    messagingSenderId: "109843199522",
    appId: "1:109843199522:web:5c5b0841436912769f3c7b"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
