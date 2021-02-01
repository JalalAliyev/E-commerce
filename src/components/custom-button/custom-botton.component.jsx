import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ children, isGoogleSignIn, inverted, ...rest }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-signIn" : ""
      } custom-button`}
      {...rest}>
      {children}
    </button>
  );
};

export default CustomButton;
