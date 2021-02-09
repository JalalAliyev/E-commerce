import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart-selectors";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signOutStart } from "../../redux/shop/shop-actions";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div className="header">
      <NavLink to="/" className="logo-container">
        <Logo className="logo" />
      </NavLink>
      <div className="options">
        <NavLink className="option" to="/shop">
          SHOP
        </NavLink>
        <NavLink className="option" to="/shop">
          CONTACT
        </NavLink>
        {currentUser ? (
          <div className="option" onClick={signOutStart}>
            Sign Out
          </div>
        ) : (
          <NavLink className="option" to="/signIn">
            Sign in
          </NavLink>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
