<script lang="js">
  // @ts-nocheck

  import Product from "@components/browse/Product.svelte";
  import { inventory } from "@stores/inventory";
  import { sortInventory } from "@utils/sorting";
  import FilterAndSortButton from "@components/browse/FilterAndSortButton.svelte";
  import { filterOptions } from "@stores/searchFilters";
  import HeroImage from "../../../components/HeroImage.svelte";

  let sortedInventory = inventory;

  $: $filterOptions,
    (sortedInventory = sortInventory(inventory, $filterOptions));
</script>

<HeroImage title={"Peak Performance"} src="/assets/images/hero/hero-13.webp" />

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

<HeroImage
  title={"Wanderlust Essentials"}
  src="/assets/images/hero/hero-1.webp"
  hasParallax={false}
/>

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

<style>
  .page {
    margin-top: 5rem;
    margin-inline: 1rem;
  }

  .products-grid {
    margin: 4rem 1rem 4rem 1rem;
  }
</style>
