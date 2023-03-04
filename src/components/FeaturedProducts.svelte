<script>
  import { inventory } from "../stores/inventory";
  import Product from "./browse/Product.svelte";

  export let productId;
</script>

<section class="featured-products">
  {#each inventory as product}
    {#if product.isFeatured}
      <Product
        productId={product.id}
        productName={product.name}
        productDescription={product.description}
        productPrice={product.price}
        productImage={product.image}
        isFeatured={product.isFeatured}
      />
    {/if}
  {/each}
</section>

<style>
  .featured-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    padding: 0;
    margin: 1rem;
  }

  .product {
    background-color: var(--clr-white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .featured-product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .product-text {
    position: absolute;
    margin: 1rem;
  }
</style>
