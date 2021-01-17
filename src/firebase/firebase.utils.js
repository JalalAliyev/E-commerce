import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPep42Uzxe5lAe0dE2WJRCSgSeaPHtQAs",
  authDomain: "crwn-db-7e0c2.firebaseapp.com",
  projectId: "crwn-db-7e0c2",
  storageBucket: "crwn-db-7e0c2.appspot.com",
  messagingSenderId: "398468072951",
  appId: "1:398468072951:web:8bf37db3c1c962ab56daf2",
  measurementId: "G-ZQ6HMF76MG",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;