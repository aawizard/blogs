// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyA22VEjrxiAoyf2SRKzwMB-empKef0T8FM",
    authDomain: "blogs-4734a.firebaseapp.com",
    projectId: "blogs-4734a",
    storageBucket: "blogs-4734a.appspot.com",
    messagingSenderId: "865265197908",
    appId: "1:865265197908:web:b0ad08dab5c313e5a3dec1",
    measurementId: "G-FYM704BT5V"
  };

  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore().collection('blogs');
export default db;