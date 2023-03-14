<script>
  import AddToFavorites from "@components/elements/buttons/AddToFavorites.svelte";

  export let product;
</script>

<a href="/browse/{product.name}">
  <div class="search-result-item">
    <img
      src="/assets/images/products/{product.id}.webp"
      alt="Rainy Days {product.name} jacket"
    />
    <div class="product-text">
      <h4>{product.name}</h4>
      <p>€{product.price}</p>
      <button>view</button>
    </div>
  </div>
</a>

<style>
  .search-result-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
    height: 80px;
  }

  .product-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  img {
    max-width: 80px;
  }

  button {
    padding: 0.25rem;
    opacity: 0;
    width: 4rem;
    transition: opacity 0.2s ease-in-out;
    background-color: var(--clr-primary-light);
    color: var(--clr-white);
  }

  .search-result-item:hover button {
    opacity: 1;
  }
</style>
