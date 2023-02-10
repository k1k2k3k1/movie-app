// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyClRYz_bgf9kbd9e7jyCDmm-PJUgQ-EkOY",
  authDomain: "filmyverse-acd39.firebaseapp.com",
  projectId: "filmyverse-acd39",
  storageBucket: "filmyverse-acd39.appspot.com",
  messagingSenderId: "129773113346",
  appId: "1:129773113346:web:b42ce101ec7bac7e77d71b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const moviesRef = collection(db, "movies");
 export const reviewsRef = collection(db, "reviews");
// export const usersRef = collection(db, "users");

export default app;