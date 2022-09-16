import { useState } from "react";
import {
  signInWithGooglePopup,
  
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";
// import { UserContext } from "../../context/user.context";
import { setCurrentUser } from '../../store/user/user.action';

import { useDispatch } from "react-redux";



const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignInForm = () => {

  const dispatch=useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //const {setCurrentUser} = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
     await signInWithGooglePopup();
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(email, password);
          dispatch(setCurrentUser(user));

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Incorrect password !!!");
          break;

        case "auth/wrong-password":
          alert("User not found!!!");
          break;
        default:
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account</h2>
      <span>Sign in with you email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <CustomButton buttonType="inverted" type="submit">
            Sign in
          </CustomButton>
          <CustomButton buttonType="google" type="button" onClick={signInWithGoogle}>
            Google Sign in
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
