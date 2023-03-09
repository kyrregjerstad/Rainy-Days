<script>
  import { inventory } from "../../stores/inventory";
  import AddToFavorites from "../browse/AddToFavorites.svelte";
  import { cart } from "../../stores/shopping-cart";
  import { blur, fly } from "svelte/transition";
  import { cubicOut, sineInOut } from "svelte/easing";

  export let item;
  let { id, quantity, size, color } = item;

  let quantityString = quantity.toString();

  let inventoryProduct = inventory.find((item) => item.id === id);

  function removeFromShoppingBag(id) {
    cart.update((cart) => {
      return cart.filter((item) => item.id !== id);
    });
  }

  function updateQuantity() {
    cart.update((cart) => {
      return cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: parseInt(quantityString) };
        }
        return item;
      });
    });
  }

  export const price = inventoryProduct.price;
</script>

<div
  class="order-item"
  out:fly|local={{ x: -700, duration: 650, easing: sineInOut }}
>
  <div class="order-item-image">
    <img src="/assets/images/products/{id}.webp" alt="Jacket 1" />
  </div>
  <div class="order-item-info">
    <div class="size-color">
      <h3>{inventoryProduct.name}</h3>
      <p>Size: {size}</p>
      <p>Colour: {color}</p>
      <div class="buttons">
        <button
          class="remove-from-cart-button"
          on:click={() => removeFromShoppingBag(id)}
          ><span class="material-symbols-outlined"> delete </span></button
        >
        <div>|</div>
        <AddToFavorites />
      </div>
    </div>
    <div class="quantity-price">
      <select
        name="quantity"
        id=""
        bind:value={quantityString}
        on:change={() => updateQuantity()}
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
      <p>€{inventoryProduct.price * quantityString}</p>
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
    flex: 1;
  }

  .order-item-image img {
    height: 100%;
    object-fit: cover;
  }

  .order-item-info {
    display: flex;
    justify-content: space-between;
    flex: 2;
    padding: 2rem;
  }

  .size-color {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }

  .quantity-price {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
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
