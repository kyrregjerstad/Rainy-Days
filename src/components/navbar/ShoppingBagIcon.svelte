<script>
  import { cart } from "@stores/shopping-cart";

  let totalQuantity = 0;
  let animate = false;

  $: totalQuantity = $cart.reduce((acc, item) => {
    return acc + parseInt(item.quantity, 10);
  }, 0);

  $: totalQuantity, (animate = true);

  $: if (animate) {
    setTimeout(() => {
      animate = false;
    }, 150);
  }
</script>

<div class="shopping-bag-container">
  <div class="shopping-bag-amount" class:animate>{totalQuantity}</div>
  <span class="material-symbols-outlined"> shopping_bag </span>
</div>

<style>
  .shopping-bag-container {
    position: relative;
  }

  .shopping-bag-amount {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -1rem;
    right: -1rem;
    width: 1.5rem;
    height: 1.5rem;
    text-align: center;
    background-color: var(--clr-primary-light);
    opacity: 0.8;
    border-radius: 100%;
    transition: all 0.2s ease-in-out;
  }

  .animate {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  span {
    font-size: 1.2rem;
  }
</style>
