<script>
  import { cart } from "../../../stores/shopping-cart";
  import OrderItem from "@components/cart/orderItem.svelte";

  let totalPrice = 0;
  let productPrice;

  $: totalPrice = $cart.reduce((acc, item) => {
    return acc + parseInt(productPrice, 10) * parseInt(item.quantity, 10);
  }, 0);
</script>

<div class="wrapper">
  <section class="user-submitted-info">
    <div>
      <h2>Address</h2>
      <p>Alice Kelly</p>
      <p>23 Kirkgate</p>
      <p>Thirsk</p>
      <p>North Yorkshire</p>
      <p>YO7 1PL</p>
      <p>01845 524234</p>
      <p>UK</p>
    </div>
    <div class="payment-and-shipping">
      <div>
        <h2>Payment</h2>
        <p>PayPal</p>
      </div>
      <div>
        <h2>Shipping</h2>
        <p>Premium shipping</p>
      </div>
    </div>
  </section>
  <div class="order-items">
    {#each $cart as item}
      <OrderItem {item} bind:price={productPrice} type="checkout" />
    {/each}
  </div>
  {#if $cart.length === 0}
    <div class="empty-cart">
      <h3>Your cart is empty</h3>
    </div>
  {:else}
    <div class="order-total">
      <h3 class="total-sum">Total</h3>
      <p class="total-sum">€{totalPrice}</p>
    </div>
    <a href="./order-success"
      ><button class="checkout-button">Complete order</button></a
    >
  {/if}
</div>

<style>
  .user-submitted-info {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: space-between;
    gap: 1rem;
    padding: 1rem;
    margin-block: 1rem;
    background-color: var(--clr-white);
    color: var(--clr-black);
  }
  .payment-and-shipping {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .order-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    background-color: var(--clr-white);
  }

  .wrapper {
    margin: 0 auto;
    max-width: 600px;
  }

  .order-total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--clr-white);
    color: var(--clr-black);
    padding: 1rem;
    margin-block: 1rem;
  }

  .total-sum {
    font-weight: 700;
  }

  .checkout-button {
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 600;
    width: 100%;
    padding: 1rem;
  }
</style>
