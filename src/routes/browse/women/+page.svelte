<script lang="js">
  // @ts-nocheck

  import Product from "@components/elements/products/Product.svelte";
  import { sortInventory } from "@utils/sorting";
  import FilterAndSortButton from "@components/elements/buttons/FilterAndSortButton.svelte";
  import { filterOptions } from "@stores/searchFilters";
  import HeroImage from "@components/layout/images/HeroImage.svelte";
  import FilterLabels from "@components/filters and sort/FilterLabels.svelte";
  import { inventory } from "@stores/inventory.js";

  $: allProducts = inventory;

  let sortedProducts = allProducts || [];

  $: $filterOptions,
    (sortedProducts = sortInventory(allProducts, $filterOptions, "Women"));
</script>

<svelte:head>
  <title>Rainy Days | Women</title>
</svelte:head>

<HeroImage
  title={"Adventure Awaits"}
  subtitle={"Designed to keep you comfortable in all weather"}
  src="/assets/images/hero/hero-22.webp"
  height={"large"}
/>

<div class="page">
  <FilterAndSortButton />
  <div>
    {#if sortedProducts.length === 0}
      No items found
    {:else if sortedProducts.length === 1}
      1 item
    {:else}
      {sortedProducts.length} items
    {/if}
  </div>
  <div class="user-filters">
    <FilterLabels />
  </div>
  <div class="products-grid">
    {#each allProducts as product}
      {#if product.gender === "Women" || product.gender === "Unisex"}
        <Product {product} />
      {/if}
    {/each}
    <!-- {#each sortedInventory as product}
      {#if product.gender === "Women" || product.gender === "Unisex"}
        <Product
          productName={product.name}
          productPrice={product.price}
          productId={product.id}
        />
      {/if}
    {/each} -->
  </div>
</div>

<style>
</style>
