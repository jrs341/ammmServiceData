import { initializeApp } from 'firebase/app';
//import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyD_s3b2lqQFCZIk7LpH2QIENatq7oSQoj4",
  authDomain: "fair-catcher-150017.firebaseapp.com",
  databaseURL: "https://fair-catcher-150017-default-rtdb.firebaseio.com",
  projectId: "fair-catcher-150017",
  storageBucket: "fair-catcher-150017.appspot.com",
  messagingSenderId: "1014672001327",
  appId: "1:1014672001327:web:8728f01f7558611ff3f9da"
};

const app = initializeApp({firebaseConfig});
//const db = getFirestore(firebaseApp);