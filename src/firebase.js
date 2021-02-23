import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD2o_ypc4RRLhXyEnEK9nLKbU2ZKnBTtl8",
    authDomain: "ig-reels-e1db4.firebaseapp.com",
    projectId: "ig-reels-e1db4",
    storageBucket: "ig-reels-e1db4.appspot.com",
    messagingSenderId: "320066230001",
    appId: "1:320066230001:web:1ea4402e6b56a107edfb50",
    measurementId: "G-QH1EREJRT5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db