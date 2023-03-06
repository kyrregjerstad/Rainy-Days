<script>
  import { cart } from "@stores/shopping-cart";
  import "@fontsource/material-icons-outlined";
  import QuantityButtons from "./QuantityButtons.svelte";

  let quantity = 0;

  function removeItemFromCart(productId) {
    $cart = $cart.filter((item) => item.id !== productId);
    isInCart = false;
  }

  function setQuantity(productId, quantity) {
    $cart = $cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: (item.quantity = quantity) };
      }
      return item;
    });
  }

  function addToCart(productId) {
    $cart = [...$cart, { id: productId, quantity: 1 }];
    isInCart = true;
    quantity = 1;
  }

  function handleCart(productId, quantity) {
    if (quantity === 0) {
      removeItemFromCart(productId);
      return;
    }
    if (quantity) {
      setQuantity(productId, quantity);
    }
  }

  export let productId = 123;
  export let isInCart = false;

  $: isInCart = quantity >= 1;

  $: quantity > 0, handleCart(productId, quantity);
</script>

<div>
  {#if isInCart}
    <QuantityButtons bind:isInCart bind:quantity />
  {:else}
    <button on:click={() => addToCart(productId)} class="icon-button">
      <span class="material-symbols-outlined"> shopping_bag </span></button
    >
  {/if}
</div>

<style>
  div {
    z-index: 10;
  }
  button {
    font-size: 1.5rem;
  }

  span {
    color: var(--clr-button-icon);
  }

  @media (min-width: 600px) {
    button::after {
      content: "";
      opacity: 0;
      transition: opacity 350ms 350ms ease-in-out;
    }

    button:hover::before {
      content: "Add to cart";
      background-color: var(--clr-primary-dark);
      color: var(--clr-white);
      padding: 0.25rem;
      font-size: 1rem;
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    button {
      font-size: 2.5rem;
    }
  }
</style>
