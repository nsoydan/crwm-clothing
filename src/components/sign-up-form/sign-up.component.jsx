import {useState,useContext} from "react";
import { UserContext } from "../../context/user.context";
import { createAuthUser, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    
    const {setCurrentUser}=useContext(UserContext);

    const resetFormFields=()=>{
        setFormFields(defaultFormFields);
    }


    const handleSubmit=async (event)=>{
       event.preventDefault();
       if(password !== confirmPassword){
        alert("Şifreler ayni değil");
        return; 
       }
       try {
            const user=await createAuthUser(email,password);
            
            await createUserDocumentFromAuth(user,{displayName});

            setCurrentUser(user);    /// set currentUser as user which signed up
            resetFormFields();
       } catch (error) {
            console.log("User creation encountered an error:",error)
       }

    }

    const handleChange=(event)=>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value});

    }    

    return (
      <div className="sign-up-container">
        <h2>Don't have an acoount</h2>
        <span>Sign up with you email and password</span>
        <form onSubmit={handleSubmit}>
          
          <FormInput
            label="Display Name"
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Email"
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            required
          />

          <FormInput
            label="Password"
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <CustomButton type="submit">Sign up</CustomButton>
        </form>
      </div>
    );
}

export default SignUpForm;
