<script lang="js">
  // @ts-nocheck

  import Product from "@components/elements/products/Product.svelte";
  import { inventory } from "@stores/inventory";
  import { sortInventory } from "@utils/sorting";
  import FilterAndSortButton from "@components/elements/buttons/FilterAndSortButton.svelte";
  import { filterOptions } from "@stores/searchFilters";
  import HeroImage from "@components/layout/images/HeroImage.svelte";
  import FilterLabels from "@components/filters and sort/FilterLabels.svelte";

  let sortedInventory = inventory;

  $: $filterOptions,
    (sortedInventory = sortInventory(inventory, $filterOptions, "Men"));

  export let data;

  $: ({ allProducts } = data);
  $: console.log(allProducts);
</script>

<svelte:head>
  <title>Rainy Days | Men</title>
</svelte:head>

<HeroImage
  title={"Prepare for Adventure"}
  src="/assets/images/hero/hero-29.webp"
  height={"large"}
/>

<div class="page">
  <FilterAndSortButton />
  <div>
    {#if sortedInventory.length === 0}
      No items found
    {:else if sortedInventory.length === 1}
      1 item
    {:else}
      {sortedInventory.length} items
    {/if}
  </div>
  <div class="user-filters">
    <FilterLabels />
  </div>
  <div class="products-grid">
    {#each allProducts as product}
      <Product
        productName={product.name}
        productPrice={product.price}
        productId={product.id}
      />
    {/each}
    <!-- {#each sortedInventory as product}
      {#if product.gender === "Men" || product.gender === "Unisex"}
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
  .user-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
</style>
