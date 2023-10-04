import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAILk27TQTw37qroBdO1AAk2FsCcRYCqZc",
  authDomain: "login-try-81800.firebaseapp.com",
  projectId: "login-try-81800",
  storageBucket: "login-try-81800.appspot.com",
  messagingSenderId: "984515059787",
  appId: "1:984515059787:web:3bbe4ee22f7d7399c22dce"

};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);


export { app, firestore };