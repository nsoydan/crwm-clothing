import SignUpForm from "../../components/sign-up-form/sign-up.component";
import "./authentication.styles.scss";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <div className="form-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
export default Authentication;
