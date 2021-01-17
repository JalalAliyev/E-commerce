import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./signIn-and-signUp.style.scss";

const SigninAndSignUpPage = () => {
  return (
    <div className="signIn-and-signUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninAndSignUpPage;
