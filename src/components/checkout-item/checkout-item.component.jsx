import React from "react";
import { connect } from "react-redux";

import {
  removeItem,
  addItem,
  clearItemfromCart,
} from "../../redux/cart/cart-actions";
import AddIcon from "@material-ui/icons/Add";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import DeleteOutlineOutlinedIcon from "@material-ui/icons/DeleteOutlineOutlined";

import "./checkout-item.style.scss";

const CheckoutItem = ({ cartItem, removeItem, addItem, clearItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="checkout-arrow">
          <RemoveOutlinedIcon
            onClick={() => removeItem(cartItem)}
            style={{ fontSize: "12px" }}
          />
        </div>
        <span className="checkout-value">{quantity}</span>
        <div className="checkout-arrow">
          <AddIcon
            onClick={() => addItem(cartItem)}
            style={{ fontSize: "12px" }}
          />
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button">
        <DeleteOutlineOutlinedIcon onClick={() => clearItem(cartItem)} />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  clearItem: (item) => dispatch(clearItemfromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
