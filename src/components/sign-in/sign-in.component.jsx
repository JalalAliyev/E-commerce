import React, { useState } from "react";
import CustomButton from "../custom-button/custom-botton.component";
import FormInput from "../form-input/form-input.component";
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
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <CustomButton type="submit" children="Submit Form" />
      </form>
    </div>
  );
};

export default SignIn;
