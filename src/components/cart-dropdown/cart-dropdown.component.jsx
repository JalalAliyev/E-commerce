import React from "react";
import CustomButton from "../custom-button/custom-botton.component";
import "./cart-dropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton inverted>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
