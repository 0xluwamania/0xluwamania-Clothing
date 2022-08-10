import {AuthenticationContainer} from "./authentication.styles.jsx"

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
    <AuthenticationContainer>
     
      
   
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
