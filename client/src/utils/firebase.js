
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interview-agent-3c954.firebaseapp.com",
  projectId: "interview-agent-3c954",
  storageBucket: "interview-agent-3c954.firebasestorage.app",
  messagingSenderId: "712208675922",
  appId: "1:712208675922:web:2589a8bfce612dd5819b8b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}