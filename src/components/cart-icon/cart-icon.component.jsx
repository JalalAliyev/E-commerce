import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleButton } from "../../redux/cart/cart-actions";
import "./cart-icon.style.scss";

const CartIcon = ({ toggleButton }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleButton} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleButton: () => dispatch(toggleButton()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
