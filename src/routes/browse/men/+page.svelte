<script lang="js">
  // @ts-nocheck

  import Product from "@components/browse/Product.svelte";
  import { inventory } from "@stores/inventory";
  import {
    sortByPriceAscending,
    sortByPriceDescending,
    sortByColor,
    sortBySize,
    sortBySeason,
  } from "@utils/sorting";
  import FilterAndSortButton from "@components/browse/FilterAndSortButton.svelte";
  import { filterOptions } from "@stores/searchFilters";
  import HeroImage from "../../../components/HeroImage.svelte";

  let sortedInventory = inventory;

  $: $filterOptions, sortInventory(inventory, $filterOptions);

  function sortInventory(inventory, filterOptions) {
    sortedInventory = inventory;
    if (filterOptions.selectedSeasons.length) {
      sortedInventory = sortBySeason(inventory, filterOptions.selectedSeasons);
    }
    if (filterOptions.selectedColors.length) {
      sortedInventory = sortByColor(inventory, filterOptions.selectedColors);
    }
    if (filterOptions.selectedSizes.length) {
      sortedInventory = sortBySize(inventory, filterOptions.selectedSizes);
    }
    if (filterOptions.sortBy === "lowToHigh") {
      sortedInventory = sortByPriceAscending(inventory);
    }
    if (filterOptions.sortBy === "highToLow") {
      sortedInventory = sortByPriceDescending(inventory);
    }
  }
</script>

<HeroImage
  title={"Prepare for Adventure"}
  imgSrc="/assets/images/hero/hero-29.webp"
/>

<div class="page">
  <FilterAndSortButton />
  <div class="products-grid">
    {#each sortedInventory as product}
      {#if product.gender === "Men" || product.gender === "Unisex"}
        <Product
          productName={product.name}
          productPrice={product.price}
          productId={product.id}
        />
      {/if}
    {/each}
  </div>
</div>

<style>
  .page {
    margin-top: 5rem;
    margin-inline: 1rem;
  }
  .products-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
</style>
