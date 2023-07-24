export function removeItemFromCart(productId, cart) {
  cart = cart.filter((item) => item.id !== productId);
  isInCart = false;
}

export function setQuantity(productId, quantity, cart) {
  cart = cart.map((item) => {
    if (item.id === productId) {
      return { ...item, quantity: (item.quantity = quantity) };
    }
    return item;
  });
}

export function addToCart(productId, cart) {
  cart = [...cart, { id: productId, quantity: 1 }];
  isInCart = true;
  quantity = 1;
}

export function handleCart(productId, quantity, cart) {
  if (quantity === 0) {
    removeItemFromCart(productId, cart);
    return;
  }
  if (quantity) {
    setQuantity(productId, quantity, cart);
  }
}
