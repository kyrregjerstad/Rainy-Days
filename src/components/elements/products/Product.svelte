<script>
  import AddToFavorites from "../../elements/buttons/AddToFavorites.svelte";

  export let productId = 123;
  export let productName = "Product Name";
  export let productDescription = "Product Description";
  export let productPrice = "€420";
  export let isFeatured = false;
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
