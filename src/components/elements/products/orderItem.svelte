<script>
  import { inventory } from "@stores/inventory";
  import { removeFromShoppingBag, updateQuantity } from "@stores/shopping-cart";
  import { fly } from "svelte/transition";
  import { sineInOut } from "svelte/easing";
  import AddToFavorites from "../buttons/AddToFavorites.svelte";

  export let allProducts;
  export let item;
  export let type = "cart";

  const { id, quantity, size, color, cartItemId } = item;

  let quantityString = quantity.toString();
  const inventoryProduct = allProducts.find((item) => item.id === id);
  const src = inventoryProduct.images[0].src;
  export const price = inventoryProduct.price;
</script>

<div
  class="order-item"
  out:fly|local={{ x: -700, duration: 650, easing: sineInOut }}
>
  <div class="order-item-image">
    <a href="/browse/{inventoryProduct.name}">
      <img {src} alt="{inventoryProduct.name} Rain Jacket from Rainy Days" />
    </a>
  </div>
  <div class="order-item-info">
    <div class="size-color">
      <h3>{inventoryProduct.name}</h3>
      <p>Size: {size}</p>
      <p>Colour: {color}</p>
      {#if type === "cart"}
        <div class="buttons">
          <button
            class="remove-from-cart-button"
            on:click={() => removeFromShoppingBag(cartItemId)}
            ><span class="material-symbols-outlined"> delete </span></button
          >
          <div class="pipe-separator">|</div>
          <AddToFavorites {id} />
        </div>
      {/if}
    </div>
    <div class="quantity-price">
      {#if type === "cart"}
        <label class="quantity-label" for="quantity">
          Quantity:
          <select
            name="quantity"
            id="quantity"
            bind:value={quantityString}
            on:change={() => updateQuantity(cartItemId, quantityString)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </label>
      {/if}
      {#if type === "checkout"}
        <p>{quantity}</p>
      {/if}
      <p>€{(inventoryProduct.price * quantityString).toFixed(2)}</p>
    </div>
  </div>
</div>

<style>
  .order-item {
    display: flex;
    background-color: white;
    color: black;
  }

  .order-item-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  .order-item-image img {
    object-fit: cover;
  }

  .order-item-info {
    display: flex;
    justify-content: space-between;
    flex: 2;
    padding: 2rem;
    gap: 0.5rem;
  }

  .size-color {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .quantity-label {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: flex-end;
    align-items: center;
  }

  .quantity-price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
  }

  .pipe-separator {
    color: lightgray;
    pointer-events: none;
    user-select: none;
  }

  .buttons {
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  .remove-from-cart-button {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    background-color: transparent;
  }

  select {
    padding: 0.2rem;
  }

  select:focus {
    outline: solid 1px var(--clr-primary-dark);
    border-radius: 5%;
  }

  @media (max-width: 800px) {
    .order-item-info {
      padding: 1rem;
    }
  }
</style>
