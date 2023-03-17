<script>
  import SearchInput from "@components/elements/search/sub-components/SearchInput.svelte";
  import SearchResultsDropdown from "@components/elements/search/sub-components/SearchResultsDropdown.svelte";
  import SearchButton from "@components/elements/search/sub-components/SearchButton.svelte";
  import { createSearchStore, searchHandler } from "@stores/search";
  import { inventory } from "@stores/inventory";
  import { onDestroy } from "svelte";

  const searchProducts = inventory.map((product) => ({
    ...product,
    searchTerms: `${product.name} ${
      product.description
    } ${product.features.join(" ")}`,
  }));

  const searchStore = createSearchStore(searchProducts);
  const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

  onDestroy(() => {
    unsubscribe();
  });

  export let searchIsHidden = true;

  export let searchInput;

  let searchValue = "";

  let border = "none";
  let width = "300px";

  $: if (searchValue.length > 0) {
    border = "none";
  } else {
    border = "1px solid var(--clr-light-grey)";
  }

  $: if (searchIsHidden) {
    $searchStore.search = "";
    width = "";
    border = "none";
  } else {
    width = "300px";
    border = "1px solid var(--clr-light-grey)";
  }
</script>

<svelte:window on:click={() => (searchIsHidden = true)} />

<div class="search-container" style="border: {border}; ">
  <SearchInput
    bind:searchIsHidden
    bind:searchValue={$searchStore.search}
    bind:searchInput
  />
  {#if $searchStore.search.length > 0}
    <SearchResultsDropdown bind:searchResults={$searchStore.filtered} />
  {/if}
  <SearchButton bind:searchIsHidden bind:searchInput />
</div>

<style>
  .search-container {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    border: 1px solid var(--clr-light-grey);
  }
</style>
