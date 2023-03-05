<script>
  import OrderItem from "../../components/cart/orderItem.svelte";
  import FeaturedCollections from "../../components/FeaturedCollections.svelte";
  import { cart } from "../../stores/shopping-cart";

  let totalPrice = 0;

  let productPrice;

  $: totalPrice = $cart.reduce((acc, item) => {
    return acc + parseInt(productPrice, 10) * parseInt(item.quantity, 10);
  }, 0);
</script>

<div class="cart-page">
  <section>
    <h2>Other products you might like</h2>
    <FeaturedCollections />
  </section>
  <section class="cart-wrapper">
    <div class="cart">
      <div class="cart-header">
        <h2>Cart</h2>
        <hr />
      </div>
      <div class="order">
        {#each $cart as item}
          <OrderItem {item} bind:price={productPrice} />
        {/each}
      </div>
      <div class="cart-footer">
        {#if $cart.length === 0}
          <div class="empty-cart">
            <h3>Your cart is empty</h3>
          </div>
        {:else}
          <div class="order-total">
            <hr />
            <div>
              <h3 class="total-sum">Total</h3>
              <p class="total-sum">€{totalPrice}</p>
            </div>
          </div>
          <a href="/checkout/address"
            ><button class="checkout-button">Checkout</button></a
          >
        {/if}
      </div>
    </div>
  </section>
</div>

<style>
  .cart-page {
    display: grid;
    grid-template-columns: 1fr 600px;
  }

  hr {
    width: 100%;
  }

  h2 {
    top: 0;
    right: 0;
    margin: 1rem;
  }

  .cart-wrapper {
    position: fixed;
    height: 100%;
    right: 0;
    height: 100vh;
  }

  .cart {
    max-width: 600px;
    border-left: 1px solid var(--clr-white);
  }

  .order-total {
    position: sticky;
    bottom: 0;
    width: 100%;
    background-color: var(--clr-primary-dark);
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
    text-transform: uppercase;
    font-weight: 600;
    width: 100%;
    padding: 1rem;
  }

  .cart {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .order {
    flex-grow: 1;
    overflow-y: auto;
  }

  .cart-footer {
    height: 10rem;
  }
</style>
