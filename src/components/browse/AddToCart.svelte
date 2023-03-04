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

  $cart, console.log($cart);
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
  button {
    font-size: 1.5rem;
  }

  span {
    color: var(--clr-button-icon);
  }
</style>
