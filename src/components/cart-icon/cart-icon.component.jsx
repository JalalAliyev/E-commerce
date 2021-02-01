import React from "react";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleButton } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import "./cart-icon.style.scss";

const CartIcon = ({ toggleButton, itemCount }) => {
  return (
    <div className="cart-icon">
      <ShoppingIcon onClick={toggleButton} className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleButton: () => dispatch(toggleButton()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
