import SignUpForm from '../../components/sign-up-form/sign-up.component';
import {signInWithGooglePopup,createUserDocumentFromAuth} from '../../utils/firebase.utils'

const SignIn=()=>{
    
    const logGoogleUser=async ()=>{
        const {user}=await signInWithGooglePopup();
        console.log(user);

        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };   

    return(
        <div>
            <h1>
                Sign in page
            </h1>
            <button onClick={logGoogleUser}> Sign in with Google
            </button>
            <SignUpForm/> 
       </div>
    )
}
export default SignIn