// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqcaEFZpUgz02tgqi99gbheM_MFl89oEM",
  authDomain: "netflix-clone-3c115.firebaseapp.com",
  projectId: "netflix-clone-3c115",
  storageBucket: "netflix-clone-3c115.appspot.com",
  messagingSenderId: "430394114427",
  appId: "1:430394114427:web:2a43f8483d2e5c43fdbdde"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }