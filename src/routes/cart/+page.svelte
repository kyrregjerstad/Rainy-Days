<script>
  import OrderItem from "@components/elements/products/orderItem.svelte";
  import FeaturedCollections from "@components/layout/FeaturedCollections.svelte";
  import { cart } from "../../stores/shopping-cart";

  let totalPrice = 0;
  let subtotal = 0;
  let delivery = 0;
  let totalQuantity = 0;
  let productPrice;

  $: totalQuantity = $cart.reduce((acc, item) => {
    return acc + parseInt(item.quantity, 10);
  }, 0);

  $: totalPrice = $cart.reduce((acc, item) => {
    return acc + parseInt(productPrice, 10) * parseInt(item.quantity, 10);
  }, 0);
</script>

<div class="shopping-bag">
  <section class="order-items">
    <h2>
      Your shopping bag
      {#if totalQuantity === 0}
        is empty
      {:else if totalQuantity === 1}
        - {totalQuantity} item
      {:else}
        - {totalQuantity} items
      {/if}
    </h2>
    {#each $cart as item (item.cartItemId)}
      <hr class="order-item-divider" />
      <OrderItem {item} bind:price={productPrice} />
    {/each}
  </section>
  <section class="summary">
    <h2>Total</h2>
    <div>
      <p>Subtotal</p>
      <p>€{totalPrice}</p>
    </div>
    <div>
      <p>Delivery</p>
      <p>€{delivery}</p>
    </div>
    <div class="order-total">
      <p>Total (VAT included)</p>
      <p>€{totalPrice}</p>
    </div>
    <hr />
    <a class="checkout-button general-button" href="/checkout/address">
      Checkout
    </a>
  </section>
</div>

<style>
  .shopping-bag {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1rem;
    padding: 1rem;
    margin-block: 1rem;
    color: black;
    background-color: lightgray;
    margin: 0 auto;

    max-width: 1200px;
  }

  .order-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    background-color: var(--clr-white);
  }

  .order-items hr:nth-of-type(1) {
    display: none;
  }

  .order-items hr {
    margin-block: 0;
  }

  .summary {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
    gap: 1rem;

    background-color: white;

    max-height: 20rem;
  }

  .summary > * {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .order-total {
    font-weight: 600;
  }

  hr {
    width: 100%;
    margin-block: 1rem;
    border-top: transparent;
  }

  .checkout-button {
    text-align: center;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 600;

    color: white;
  }
</style>
