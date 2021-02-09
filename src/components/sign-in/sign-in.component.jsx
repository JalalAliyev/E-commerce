import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-botton.component";
import FormInput from "../form-input/form-input.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user-actions";

import "./sign-in.style.scss";

const SignIn = ({ emailSignInStart, googleSignInStart, error }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  console.log("error>>>", error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>Sign in with your email and password</h2>
      <form className="form-group" onSubmit={handleSubmit}>
        {/*  {error && (
            <span
              style={{ color: "red", paddingTop: "15px", fontWeight: "590" }}>
              {error}
            </span>
          )} */}
        <FormInput
          type="email"
          name="email"
          value={email}
          label="Email"
          handleChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
      <span className="sign-in-footer">
        I don't have an account{" "}
        <NavLink
          style={{
            color: "blue",
            marginLeft: "10px",
            borderBottom: "1px solid blue",
          }}
          to="/signUp">
          Sign Up
        </NavLink>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
