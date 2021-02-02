export const addItemToCart = (cartItems, addItem) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addItem.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...addItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  if (removeItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === removeItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
