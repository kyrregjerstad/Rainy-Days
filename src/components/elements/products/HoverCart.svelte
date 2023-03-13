<script>
  import { cart } from "@stores/shopping-cart";
  import HoverCartItem from "./HoverCartItem.svelte";

  export let cartIsHidden = true;
</script>

<div class="hover-cart-wrapper" class:cartIsHidden>
  {#each $cart as cartItem}
    <HoverCartItem
      productId={cartItem.id}
      productQuantity={cartItem.quantity}
    />
  {/each}
  <p>Total: €1000</p>
</div>

<style>
  .cartIsHidden {
    display: none !important;
  }

  .hover-cart-wrapper {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    z-index: 1000;
    right: 2.5rem;
    top: 3rem;
    background-color: var(--clr-white);
    border: solid black 1px;
    color: black;
    padding: 1rem;
  }
</style>
