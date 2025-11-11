
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFz_BVeiGGLqRiP-4NrQsMP3j8VpTMXWQ",
  authDomain: "megamart-b1619.firebaseapp.com",
  projectId: "megamart-b1619",
  storageBucket: "megamart-b1619.firebasestorage.app",
  messagingSenderId: "76237507109",
  appId: "1:76237507109:web:23916df9a9d9635b828dcc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
