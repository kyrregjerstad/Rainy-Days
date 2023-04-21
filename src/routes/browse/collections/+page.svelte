<script lang="js">
  // @ts-nocheck

  import Product from "@components/elements/products/Product.svelte";
  import { inventory } from "@stores/inventory";
  import { sortInventory } from "@utils/sorting";
  import { filterOptions } from "@stores/searchFilters";
  import HeroImage from "@components/layout/images/HeroImage.svelte";

  export let data;
  $: ({ allProducts } = data);

  let sortedProducts = allProducts || [];

  $: $filterOptions,
    (sortedProducts = sortInventory(allProducts, $filterOptions, "Unisex"));
</script>

<svelte:head>
  <title>Rainy Days | Collections</title>
</svelte:head>

<HeroImage title={"Peak Performance"} src="/assets/images/hero/hero-13.webp" />

<div class="products-grid">
  {#each allProducts as product}
    {#if product.categories[2].slug === "men" || product.categories[2].slug === "unisex"}
      <Product {product} />
    {/if}
  {/each}
</div>

<HeroImage
  title={"Wanderlust Essentials"}
  src="/assets/images/hero/hero-1.webp"
  hasParallax={false}
/>

<div class="products-grid">
  {#each allProducts as product}
    {#if product.categories[2].slug === "women" || product.categories[2].slug === "unisex"}
      <Product {product} />
    {/if}
  {/each}
</div>

<!-- <div class="products-grid">
  {#each sortedInventory as product}
    {#if product.gender === "Men" || product.gender === "Unisex"}
      <Product
        productName={product.name}
        productPrice={product.price}
        productId={product.id}
      />
    {/if}
  {/each}
</div> -->
<style>
  .page {
    margin-top: 5rem;
    margin-inline: 1rem;
  }

  .products-grid {
    margin: 4rem 1rem 4rem 1rem;
  }
</style>
