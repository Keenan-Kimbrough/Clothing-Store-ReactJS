
import {signInGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils'
const SignIn = () => { 
    
 const logGoogleUser = async () => {
     const {user} = await signInGooglePopup()
     createUserDocumentFromAuth(user)
 }
 
    return (
        <div>
            <h1> Sign In page</h1>
           <button onClick={logGoogleUser}>Sign in with Google Prompt</button>
        </div>
    )
}

export default SignIn