// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOzlDQbDLju5yINtFJt0YdO_Hchs4hpDc",
    authDomain: "notes-8475d.firebaseapp.com",
    projectId: "notes-8475d",
    storageBucket: "notes-8475d.firebasestorage.app",
    messagingSenderId: "614769646704",
    appId: "1:614769646704:web:5ef018731ae2968c9a28b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;