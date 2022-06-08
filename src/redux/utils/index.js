export const addItem = (cartItems, cartItemToAdd) => {
  const { title, picture, price } = cartItemToAdd.item;
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.title === title
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.title === title
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { title, picture, price, quantity: 1 }];
};

export const removeItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.title === cartItemToRemove.title
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem.title !== cartItemToRemove.title
    );
  }
  return cartItems.map((cartItem) =>
    cartItem.title === cartItemToRemove.title
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};
