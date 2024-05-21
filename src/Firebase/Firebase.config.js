// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBl8HUp6vgB4Br_lv_Z1INV7o7yx6Evb4U",
  authDomain: "coffee-auth-dda64.firebaseapp.com",
  projectId: "coffee-auth-dda64",
  storageBucket: "coffee-auth-dda64.appspot.com",
  messagingSenderId: "446726828824",
  appId: "1:446726828824:web:9cbf31921e24dd85ae246d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;