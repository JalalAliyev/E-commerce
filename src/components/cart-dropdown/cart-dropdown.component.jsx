import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useHistory } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart-selectors";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-botton.component";
import { toggleButton } from "../../redux/cart/cart-actions";
import "./cart-dropdown.style.scss";

const CartDropdown = ({ cartItems, toggleButton}) => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/checkout");
    toggleButton();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleClick} inverted>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: () => dispatch(toggleButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
