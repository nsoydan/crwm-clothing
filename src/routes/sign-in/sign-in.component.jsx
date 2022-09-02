import {signInWithGooglePopup} from '../../utils/firebase.utils'

const SignIn=()=>{
    
    const loginWithGoogle=async ()=>{
        const response=await signInWithGooglePopup();
        console.log(response);
    }    

    return(
        <div>
            <h1>
                Sign in page
            </h1>
            <button onClick={loginWithGoogle}> Sign in with Google
            </button> 
       </div>
    )
}
export default SignIn