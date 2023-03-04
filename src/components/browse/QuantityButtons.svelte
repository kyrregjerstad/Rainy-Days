<script>
  import "@fontsource/material-icons-outlined";

  export let quantity = 0;
  export let isInCart = false;

  function incrementQuantity() {
    quantity < 10 ? quantity++ : "";
    isInCart = true;
  }

  function decreaseQuantity() {
    quantity > 0 ? quantity-- : "";
  }
</script>

<div>
  <button on:click={decreaseQuantity} class="icon-button">
    <span class="material-symbols-outlined"> remove </span>
  </button>
  <input type="number" bind:value={quantity} min="0" max="10" />
  <button on:click={incrementQuantity} class="icon-button">
    <span class="material-symbols-outlined"> add </span>
  </button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    width: 2.5rem;
    padding: 0.1rem;
    text-align: center;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
</style>
