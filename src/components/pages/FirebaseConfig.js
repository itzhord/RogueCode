import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDF_fexnH9eYNkfR1el8LQhXtduv8k6xKc",
  authDomain: "react-http-1abfa.firebaseapp.com",
  databaseURL: "https://react-http-1abfa-default-rtdb.firebaseio.com",
  projectId: "react-http-1abfa",
  storageBucket: "react-http-1abfa.appspot.com",
  messagingSenderId: "600187558989",
  appId: "1:600187558989:web:a1ac756e4e76b2e51c5004"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)