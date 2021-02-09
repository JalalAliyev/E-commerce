import React, { useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-botton.component";
import { signUpStart } from "../../redux/user/user-actions";
import "./sign-up.style.scss";

const SignUp = ({ signUpStart }) => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Password didn't match");
      return;
    }

    signUpStart({ displayName, password, email });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2>Sign up with your email and password</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {/* {error && (
            <span
              style={{ color: "red", paddingTop: "15px", fontWeight: "590" }}>
              {error}
            </span>
          )} */}
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton signup style={{ margin: "0 auto" }} type="submit">
          Sign Up
        </CustomButton>
      </form>
      <span className="sign-up-footer">
        Already have an account{" "}
        <NavLink
          style={{
            color: "blue",
            marginLeft: "10px",
            borderBottom: "1px solid blue",
          }}
          to="/signIn">
          Sign In
        </NavLink>
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
