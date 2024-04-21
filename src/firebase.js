
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage} from "firebase/storage";
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDU5Of2IvsAe4B-bgKVHlMEmGa6yiwNee4",
  authDomain: "chatapp-849aa.firebaseapp.com",
  projectId: "chatapp-849aa",
  storageBucket: "chatapp-849aa.appspot.com",
  messagingSenderId: "452953241268",
  appId: "1:452953241268:web:e8fc646078662e706bc9e1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();