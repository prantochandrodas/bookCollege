// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtmCwBMRPwKEageJBYQfPPZrxWLvTY_9k",
  authDomain: "bookcollege-3e24b.firebaseapp.com",
  projectId: "bookcollege-3e24b",
  storageBucket: "bookcollege-3e24b.appspot.com",
  messagingSenderId: "948477785883",
  appId: "1:948477785883:web:fb3429e1134827cff085be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app