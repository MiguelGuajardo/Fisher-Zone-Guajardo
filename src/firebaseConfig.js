// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRKCZFLzR_TE-LHEv6MW6peWQxCWr8Tso",
  authDomain: "fisher-zone.firebaseapp.com",
  projectId: "fisher-zone",
  storageBucket: "fisher-zone.appspot.com",
  messagingSenderId: "438547254524",
  appId: "1:438547254524:web:fe55aa9190de3851e91b79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
