import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMEVuBJJ_RhCh5oSz7m3XLEHoV16cHgiY",
  authDomain: "prooyecto-react-guidonfrydman.firebaseapp.com",
  projectId: "prooyecto-react-guidonfrydman",
  storageBucket: "prooyecto-react-guidonfrydman.firebasestorage.app",
  messagingSenderId: "844764319225",
  appId: "1:844764319225:web:ba49c7434bf41134ebc128"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db