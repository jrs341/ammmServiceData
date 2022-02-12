import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, getDocs, collection, setDoc, addDoc } from 'firebase/firestore/lite';
import { logData, text } from './firestore.js';
import { login } from './login.js';

const firebaseApp = initializeApp({ 
  projectId: "fair-catcher-150017",
  apiKey: "AIzaSyD_s3b2lqQFCZIk7LpH2QIENatq7oSQoj4",
  databaseURL: "https://fair-catcher-150017-default-rtdb.firebaseio.com",
  authDomain: "fair-catcher-150017.firebaseapp.com",
  storageBucket: "fair-catcher-150017.appspot.com",
  messagingSenderId: "1014672001327",
  appId: "1:1014672001327:web:8728f01f7558611ff3f9da"});

const db = getFirestore();

const customerCollection = collection(db, 'Customer Info');

const load = () => {
  console.log("load event detected!", login);
}
window.onload = load;