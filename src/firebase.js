import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLYiWFd5NoG3oPgwAF99oW9Mo0scV8HKg",
  authDomain: "netflix-clone-ad85d.firebaseapp.com",
  projectId: "netflix-clone-ad85d",
  storageBucket: "netflix-clone-ad85d.appspot.com",
  messagingSenderId: "529999533294",
  appId: "1:529999533294:web:48e1a3b91a4e816889cfff",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
