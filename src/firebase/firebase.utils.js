import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC0rgVLk2W9k5qH65nb9-g4R8j3jSAV9oM",
    authDomain: "crwn-db-cddec.firebaseapp.com",
    databaseURL: "https://crwn-db-cddec.firebaseio.com",
    projectId: "crwn-db-cddec",
    storageBucket: "crwn-db-cddec.appspot.com",
    messagingSenderId: "15149523587",
    appId: "1:15149523587:web:a339a4dfa336da17fe31b6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;