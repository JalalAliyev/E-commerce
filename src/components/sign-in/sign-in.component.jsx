import React, { useState } from "react";
import CustomButton from "../custom-button/custom-botton.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.style.scss";

const SignIn = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      email: "",
      password: "",
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ [name]: value });
  };

  return (
    <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
      <form className="form-group" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={data.email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={data.password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Submit Form</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
