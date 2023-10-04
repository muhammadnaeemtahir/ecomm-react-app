import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Store/Store';
import { Provider } from 'react-redux';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAILk27TQTw37qroBdO1AAk2FsCcRYCqZc",
  authDomain: "login-try-81800.firebaseapp.com",
  projectId: "login-try-81800",
  storageBucket: "login-try-81800.appspot.com",
  messagingSenderId: "984515059787",
  appId: "1:984515059787:web:3bbe4ee22f7d7399c22dce"
};

const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(store);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <App />
      </Provider>
    </BrowserRouter> 
  </React.StrictMode>
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
