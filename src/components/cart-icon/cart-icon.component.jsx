import React from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = ({ handleClick }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={handleClick} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
