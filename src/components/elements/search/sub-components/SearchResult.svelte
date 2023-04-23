<script>
  import AddToFavorites from "@components/elements/buttons/AddToFavorites.svelte";

  export let product;
  export let index;
  export let selectedIndex;
  let href = `/browse/${product.name}`;
  export let externalHref;

  $: if (selectedIndex === index) {
    externalHref = `/browse/${product.name}`;
  }
</script>

<a {href} class:selected={selectedIndex === index}>
  <div class="search-result-item">
    <img
      src="/assets/images/products/{product.id}.webp"
      alt="Rainy Days {product.name} jacket"
    />
    <div class="product-text">
      <h4>{product.name}</h4>
      <p>€{product.price}</p>
      <button tabindex="-1">view</button>
    </div>
  </div>
</a>

<style>
  .search-result-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
    height: 7rem;
    padding: 1rem;
  }

  .search-result-item:hover {
    background-color: var(--clr-light-grey);
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

  @media (max-width: 700px) {
    button {
      display: none;
    }

    .search-result-item {
      gap: 0;
      height: unset;
      padding: 0;
    }
  }

  .search-result-item:hover button {
    opacity: 1;
  }

  .selected .search-result-item {
    background-color: var(--clr-light-grey);
  }
</style>
