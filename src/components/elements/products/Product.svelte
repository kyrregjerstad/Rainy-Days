<script>
  import AddToFavorites from "../../elements/buttons/AddToFavorites.svelte";

  export let product;

  let { id, name, description, price, featured, slug } = product;
  const src = product.images[0].src;
</script>

<div class="product-container">
  <div class="buttons">
    <AddToFavorites bind:id />
  </div>

  <a href="/browse/{slug}?id={id}">
    <div class="product-image">
      <img {src} alt="{name} - {description}" />
    </div>
    <div class="product-info">
      <h3>{name}</h3>
      <p>€ {price}</p>
    </div>
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
