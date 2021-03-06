import { useInsertionEffect} from 'react'
import { getRedirectResult } from 'firebase/auth'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component'


import {signInGooglePopup,createUserDocumentFromAuth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
const SignIn = () => { 

    
 const logGoogleUser = async () => {
     const {user} = await signInGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
 }
 
    return (
        <div>
            <h1> Sign In page</h1>
           <button onClick={logGoogleUser}>Sign in with Google Prompt</button>
           <SignUpForm/>
        </div>
    )
}

export default SignIn