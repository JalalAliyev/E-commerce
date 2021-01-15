import React from "react";
import { NavLink } from "react-router-dom"; /* 
import { ReactComponent as Logo } from "../../assets/crown.svg"; */
import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <span className="logo">LOGO</span>
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/shop">
          CONTACT
        </NavLink>
        <NavLink className="option" to="/shop">
          LOG IN
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
