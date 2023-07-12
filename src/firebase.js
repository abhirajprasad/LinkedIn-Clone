import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdqYKAfGKjw31pB_46O2-BR3lohP4x2bA",
    authDomain: "linkedin-clone-d7335.firebaseapp.com",
    projectId: "linkedin-clone-d7335",
    storageBucket: "linkedin-clone-d7335.appspot.com",
    messagingSenderId: "226273881729",
    appId: "1:226273881729:web:423daf0f32cc5c3de42780"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };