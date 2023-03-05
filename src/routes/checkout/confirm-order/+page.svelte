<script>
  import { cart } from "../../../stores/shopping-cart";
  import OrderItem from "../../../components/cart/orderItem.svelte";

  let totalPrice = 0;
  let productPrice;

  $: totalPrice = $cart.reduce((acc, item) => {
    return acc + parseInt(productPrice, 10) * parseInt(item.quantity, 10);
  }, 0);
</script>

<div class="wrapper">
  <section class="address-section">
    <h2>Address</h2>
    <p>Your address info</p>
  </section>
  <section class="payment-section">
    <h2>Payment</h2>
    <p>Your payment info</p>
  </section>
  <div class="order">
    {#each $cart as item}
      <OrderItem {item} bind:price={productPrice} />
    {/each}
  </div>
  {#if $cart.length === 0}
    <div class="empty-cart">
      <h3>Your cart is empty</h3>
    </div>
  {:else}
    <div class="order-total">
      <hr />
      <h3 class="total-sum">Total</h3>
      <p class="total-sum">€{totalPrice}</p>
    </div>
    <a href="./order-success"
      ><button class="checkout-button">Complete order</button></a
    >
  {/if}
</div>

<style>
  .checkout-page {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 2rem;
    color: var(--clr-black);
    padding: 2rem;
  }

  .wrapper {
    max-width: 600px;
  }

  .order-total {
    width: 100%;
  }

  .total-sum {
    font-weight: 700;
    margin-block-end: 1rem;
  }

  .order-total div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    margin-inline: 2rem;
    margin-top: 1rem;
  }

  .checkout-button {
    display: flex;
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    padding: 1rem;
  }
</style>
