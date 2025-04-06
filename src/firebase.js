// src/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-sZZP6Hp9o5sXOWCDBgkmqXW0kRGuvpg",
  authDomain: "aashishportfolio-default-rtdb.firebaseapp.com",
  databaseURL: "https://aashishportfolio-default-rtdb.firebaseio.com",
  projectId: "aashishportfolio",
  storageBucket: "aashishportfolio.appspot.com",
  messagingSenderId: "732823080844",
  appId: "1:732823080844:web:e96d80d882b8ea9c845d44"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, push, onValue };

