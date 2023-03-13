<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  const value = tweened(0, {
    duration: 1000,
    easing: cubicOut,
  });

  export let data;

  $: data, setProgressBar(data.pathname, value);

  function setProgressBar(page, value) {
    console.log(page);
    if (page === "/checkout/address") {
      value.set(25);
    } else if (page === "/checkout/payment") {
      value.set(50);
    } else if (page === "/checkout/confirm-order") {
      value.set(75);
    } else if (page === "/checkout/order-success") {
      value.set(100);
    } else {
      value.set(0);
    }
  }
</script>

<div class="progress-bar-wrapper">
  <progress id="checkout-progress" max="100" value={$value} />
</div>
<slot />

<style>
  .progress-bar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
  }

  #checkout-progress {
    width: 100%;
    height: 1.5rem;
    max-width: 600px;
    accent-color: var(--clr-progress-bar);
  }
</style>
