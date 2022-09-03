import {useState} from "react";
import { createAuthUser, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    console.log(formFields);

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
            console.log(user);
            await createUserDocumentFromAuth(user,{displayName});
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
      <div>
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
          <button type="submit">Sign up</button>
        </form>
      </div>
    );
}

export default SignUpForm;
