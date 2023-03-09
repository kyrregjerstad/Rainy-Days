<script lang="js">
  // @ts-nocheck

  import Product from "@components/browse/Product.svelte";
  import { inventory } from "@stores/inventory";
  import { sortInventory } from "@utils/sorting";
  import FilterAndSortButton from "@components/browse/FilterAndSortButton.svelte";
  import { filterOptions } from "@stores/searchFilters";
  import HeroImage from "../../../components/HeroImage.svelte";
  import ActiveFilterLabel from "../../../components/browse/ActiveFilterLabel.svelte";

  let sortedInventory = inventory;

  $: $filterOptions, console.log($filterOptions);

  $: $filterOptions,
    (sortedInventory = sortInventory(inventory, $filterOptions));
</script>

<HeroImage
  title={"Prepare for Adventure"}
  src="/assets/images/hero/hero-29.webp"
  height={"medium"}
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
</style>
