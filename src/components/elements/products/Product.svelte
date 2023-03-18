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

  <a href="/browse/{productName}">
    <div class="product-image">
      <img
        src="/assets/images/products/{productId}.webp"
        alt="{productName} - {productDescription}"
      />
    </div>
    {#if !isFeatured}
      <div class="product-info">
        <h3>{productName}</h3>
        <p>€ {productPrice}</p>
      </div>
    {/if}
  </a>
</div>

<style>
  .product-container {
    position: relative;
    background-color: var(--clr-white);
    color: var(--clr-black);
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
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
