import { getRedirectResult } from "firebase/auth";
import { useEffect,useState } from "react";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";



const Authentication = () => {
   

     
  // useEffect ( () => {
  // let redirect =  (async () => {
  //         const response = await getRedirectResult(auth);
  //         console.log(response)
  //         if(response) {
  //          const userDocRef   = await createUserDocumentFromAuth(response.user)
  //         }
  //     })()

  // }, [])
 

  // const logGoogleRedirectUser = async () => {
  //     const {user} = await signInWithGoogleRedirect();
  //     const userDocRef = await createUserDocumentFromAuth(user)
  // }

  return (
    <div>
      <h2>I already have an account</h2>
      <span>I already have an account</span>
      
   
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
