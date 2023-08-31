


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB6IoXd54xzNbzeKw7JM0_T9LNbrYxyecc",
  authDomain: "renllugss-website.firebaseapp.com",
  projectId: "renllugss-website",
  storageBucket: "renllugss-website.appspot.com",
  messagingSenderId: "669452409360",
  appId: "1:669452409360:web:21c309b3754c18b8298895",
  measurementId: "G-L6VH3TR7S6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;

