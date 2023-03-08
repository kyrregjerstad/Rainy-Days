<script>
  import { cart } from "@stores/shopping-cart";
  import AddToCart from "./AddToCart.svelte";
  import AddToFavorites from "./AddToFavorites.svelte";
  export let productId = 123;
  export let productName = "Product Name";
  export let productDescription = "Product Description";
  export let productPrice = "€420";
  export let productImage = "/assets/images/jacket1.png";

  export let isFeatured = false;

  function addToCart() {
    if ($cart.find((item) => item.id === productId)) {
      $cart = $cart.map((item) => {
        if (item.id === productId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
    } else {
      $cart = [...$cart, { id: productId, quantity: 1 }];
    }
  }
</script>

<div class="product-container">
  {#if !isFeatured}
    <div class="buttons">
      <AddToFavorites bind:productId />
    </div>
  {/if}
  {#if isFeatured}
    <div class="featured-title">{productName}</div>
  {/if}

  <div class="product-image">
    <a href="/browse/{productName}">
      <img
        src="/assets/images/products/{productId}.webp"
        alt="{productName} - {productDescription}"
      />
    </a>
  </div>
  {#if !isFeatured}
    <div class="product-info">
      <h3>{productName}</h3>
      <p>€ {productPrice}</p>
    </div>
  {/if}
</div>

<style>
  .product-container {
    position: relative;
  }

  .product-container img {
    transition: transform 0.3s ease-in-out;
  }

  .product-container:hover img {
    transform: scale(1.02);
    z-index: 0;
  }

  .product-image {
    aspect-ratio: 1 / 1;
    overflow: hidden;
  }

  .buttons {
    position: absolute;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    width: 100%;
  }

  .featured-title {
    word-spacing: 100vw;
    z-index: 10;
    position: absolute;
    margin: 1rem;
    color: var(--clr-black);
    font-weight: 500;
  }
</style>
