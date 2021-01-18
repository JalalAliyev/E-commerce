import React from "react";
import { NavLink } from "react-router-dom"; /* 
import { ReactComponent as Logo } from "../../assets/crown.svg"; */
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import "./header.style.scss";

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <NavLink className="option" to="/sign">
            Sign in
          </NavLink>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
