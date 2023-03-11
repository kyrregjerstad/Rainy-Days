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

  $: $filterOptions,
    (sortedInventory = sortInventory(inventory, $filterOptions));

  // function handleRemoveFilter(event) {
  //   const filterValue = event.detail.filterName;
  //   Object.keys($filterOptions).forEach((key) => {
  //     if ($filterOptions[key].includes(filterValue)) {
  //       $filterOptions[key] = $filterOptions[key].filter(
  //         (item) => item !== filterValue
  //       );
  //     } else if ($filterOptions[key] === filterValue) {
  //       $filterOptions[key] = "";
  //     }
  //   });
  // }

  function handleRemoveFilter(event) {
    const filterValue = event.detail.filterName;
    Object.keys($filterOptions).forEach((key) => {
      if ($filterOptions[key].includes(filterValue)) {
        $filterOptions[key] = $filterOptions[key].filter(
          (item) => item !== filterValue
        );
      } else if ($filterOptions[key] === filterValue) {
        $filterOptions[key] = "";
      }
    });
  }
</script>

<HeroImage
  title={"Prepare for Adventure"}
  src="/assets/images/hero/hero-29.webp"
  height={"medium"}
/>

<div class="page">
  <FilterAndSortButton />
  <div class="user-filters">
    {#each Object.values($filterOptions) as filter}
      {#if filter && filter.length == 1}
        <ActiveFilterLabel
          filterName={filter}
          on:removeFilter={handleRemoveFilter}
        />
      {/if}
      {#if filter && filter.length > 1}
        {#each filter as subFilter}
          <ActiveFilterLabel
            filterName={subFilter}
            on:removeFilter={handleRemoveFilter}
          />
        {/each}
      {/if}
    {/each}
  </div>
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
  .user-filters {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .page {
    margin-top: 5rem;
    margin-inline: 1rem;
  }
</style>
