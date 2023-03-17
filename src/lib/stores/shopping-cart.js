import { nanoid } from "nanoid";
import { writable, get } from "svelte/store";

/*  SAMPLE CART
  {
    id: "KWP1VF-zPtOO",
    quantity: 1,
    color: "red",
    size: "small",
    cartItemId: "1a",
  },
  {
    id: "7sY-NQbaGGKp",
    quantity: 2,
    color: "blue",
    size: "large",
    cartItemId: "2a",
  },
*/

export const cart = writable([]);

export function removeFromShoppingBag(cartItemId) {
  cart.update((cart) => cart.filter((item) => item.cartItemId !== cartItemId));
}

export function updateQuantity(cartItemId, quantity) {
  cart.update((cart) =>
    cart.map((item) =>
      item.cartItemId === cartItemId
        ? { ...item, quantity: parseInt(quantity) }
        : item
    )
  );
}

function productExistsInCart(cartItems, selectedProduct) {
  return cartItems.find(
    (item) =>
      item.id === selectedProduct.productId &&
      item.size === selectedProduct.selectedSize &&
      item.color === selectedProduct.selectedColor
  );
}

export function addToCart(productId, selectedSize, selectedColor) {
  try {
    const cartItems = get(cart);
    const selectedProduct = { productId, selectedSize, selectedColor };
    const existingCartItem = productExistsInCart(cartItems, selectedProduct);

    if (existingCartItem) {
      incrementQuantity(cart, existingCartItem.cartItemId);
    } else {
      addCartItem(cart, productId, selectedSize, selectedColor);
    }
  } catch (error) {
    console.error(error);
  }
}

function incrementQuantity(cart, cartItemId) {
  cart.update((cartItems) =>
    cartItems.map((item) =>
      item.cartItemId === cartItemId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
}

function addCartItem(cart, productId, selectedSize, selectedColor) {
  cart.update((cartItems) => [
    ...cartItems,
    {
      id: productId,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
      cartItemId: nanoid(8),
    },
  ]);
}
