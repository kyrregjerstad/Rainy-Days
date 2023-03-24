<script>
  import { inventory } from "@stores/inventory";
  export let productImage = "/assets/images/products/product-16.webp";
  export let productName = "Product Name";
  export let productQuantity = 0;
  export let productPrice;

  export let productId;

  productName = inventory.find((item) => item.id === productId).name;
  productPrice = inventory.find((item) => item.id === productId).price;
</script>

<div class="cart-item">
  <img src={productImage} alt="" />
  <div class="cart-text">
    <h5>{productName}</h5>
    <div class="quantity-and-price">
      <div>{productQuantity}</div>
      <div>€{productPrice * productQuantity}</div>
    </div>
  </div>
</div>

<style>
  .cart-item {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
    width: 100%;
  }

  img {
    max-width: 100px;
  }

  .cart-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    gap: 1rem;
    width: 100%;
  }

  .quantity-and-price {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
</style>
