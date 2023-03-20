<script>
  import { cart } from "@stores/shopping-cart";

  let totalQuantity = 0;
  let animate = false;

  let hidden = true;

  $: if (totalQuantity > 0) {
    hidden = false;
  } else {
    hidden = true;
  }

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
  <div class="shopping-bag-amount" class:animate class:hidden>
    {totalQuantity}
  </div>
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
    font-size: 0.75rem;
    top: -0.6rem;
    right: -0.6rem;
    width: 1.2rem;
    height: 1.2rem;
    text-align: center;
    background-color: var(--clr-primary-light);
    color: var(--clr-white);
    opacity: 0.8;
    border-radius: 100%;
    transition: all 0.2s ease-in-out;
  }

  .animate {
    transform: scale3d(1.2, 1.2, 1.2);
  }
  span {
    font-size: 1.5rem;
  }

  .hidden {
    display: none;
  }
</style>
