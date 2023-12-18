
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM7b4AuVa12qQlNFSBOT8U72wLyDbEV6I",
  authDomain: "zipifly2.firebaseapp.com",
  projectId: "zipifly2",
  storageBucket: "zipifly2.appspot.com",
  messagingSenderId: "182997828818",
  appId: "1:182997828818:web:ea0b9002187eeafe8e990b"
};



// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const DB = getFirestore(FIREBASE_APP);
