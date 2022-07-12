// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider} from "firebase/auth"

    import {
        getFirestore,
        doc,
        getDoc,
        setDoc
    } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDWwn3Q4EtZqxSu3f2ksFHE3aD_6Mxxstg",
  authDomain: "xluwamania-clothiers.firebaseapp.com",
  projectId: "xluwamania-clothiers",
  storageBucket: "xluwamania-clothiers.appspot.com",
  messagingSenderId: "356796444660",
  appId: "1:356796444660:web:f74789cb9e7886c43113a1",
  measurementId: "G-TWVN9ZP094"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);


    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

}