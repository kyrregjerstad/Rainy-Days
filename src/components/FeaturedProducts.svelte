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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
    padding: 0;
    margin-block: 5rem;
    margin-inline: 2rem;
  }

  @media (max-width: 1300px) {
    .featured-products {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
      margin-block: 3rem;
    }
  }

  @media (max-width: 700px) {
    .featured-products {
      grid-template-columns: repeat(1, 1fr);
      margin-inline: 1rem;
    }
  }
</style>
