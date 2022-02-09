import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore/lite';

const firebaseApp = initializeApp({ 
  projectId: "fair-catcher-150017",
  apiKey: "AIzaSyD_s3b2lqQFCZIk7LpH2QIENatq7oSQoj4",
  databaseURL: "https://fair-catcher-150017-default-rtdb.firebaseio.com",
  authDomain: "fair-catcher-150017.firebaseapp.com",
  storageBucket: "fair-catcher-150017.appspot.com",
  messagingSenderId: "1014672001327",
  appId: "1:1014672001327:web:8728f01f7558611ff3f9da"});

const db = getFirestore();

const collectionRef = collection(db, 'Customer Info');

getDocs(collectionRef)
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data())
    })
  });

/*const docRef = doc(db, 'boatRegistrationNumber', "TX-1234-AB");
const docSnap = getDoc(docRef);

docSnap.then(value => {console.log('data', value)})

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
};*/