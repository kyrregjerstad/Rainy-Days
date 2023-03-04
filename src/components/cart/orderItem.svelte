<script>
  import { inventory } from "../../stores/inventory";

  export let item;
  let { id, quantity, size, color } = item;

  let inventoryProduct = inventory.find((item) => item.id === id);
  export const price = inventoryProduct.price;

  console.log(price);
</script>

<div class="order-item">
  <div class="order-item-image">
    <img src="/assets/images/products/{id}.webp" alt="Jacket 1" />
  </div>
  <div class="order-item-info">
    <h3>{inventoryProduct.name}</h3>
    <p>Size: {size}</p>
    <p>Colour: {color}</p>
    <p>Quantity: {quantity}</p>
    <p>€{inventoryProduct.price}</p>
  </div>
</div>

<style>
  .order-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    margin: 1rem;
  }

  .order-item * {
    flex: 1;
  }

  .order-item-image {
    max-width: 15rem;
  }

  .order-item-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
