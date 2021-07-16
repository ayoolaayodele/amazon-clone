import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlXKTE1_aO4FP39V82giODe2kevapK5O0",
  authDomain: "clone-18388.firebaseapp.com",
  projectId: "clone-18388",
  storageBucket: "clone-18388.appspot.com",
  messagingSenderId: "843561738323",
  appId: "1:843561738323:web:90d0b7ca301680676466a6",
  measurementId: "G-K117FS56K2",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
