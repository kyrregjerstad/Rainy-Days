<script>
  import Product from "@components/elements/products/Product.svelte";
  import { inventory } from "@stores/inventory";

  export let currentProductId;
</script>

<section>
  <h2>Similar Items</h2>
  <div class="similar-items-grid">
    {#each inventory as product, i}
      {#if i < 6 && product.id !== currentProductId}
        <Product
          productName={product.name}
          productPrice={product.price}
          productId={product.id}
        />
      {/if}
    {/each}
  </div>
</section>

<style>
  section {
    margin: 2rem;
    margin-top: 4rem;
  }

  h2 {
    font-size: 2rem;
    margin-block: 2rem;
  }
  .similar-items-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    /* padding-inline: 2rem; */
  }
</style>
