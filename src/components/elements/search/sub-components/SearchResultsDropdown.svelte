<script>
  import SearchResult from "@components/elements/search/sub-components/SearchResult.svelte";

  export let searchResults = [];
</script>

{#if searchResults.length > 0}
  <div class="search-results-dropdown">
    <ul>
      {#each searchResults as product}
        <li>
          <SearchResult {product} />
        </li>
      {/each}
    </ul>
    <div class="search-items-amount">
      {searchResults.length}
      {#if searchResults.length === 1}
        item found
      {:else}
        items found
      {/if}
    </div>
  </div>
{/if}

<style>
  .search-results-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: var(--clr-white);
    z-index: 1;
    max-height: 350px;
    width: calc(100% + 2px);
    transform: translateX(1px);
    overflow: scroll;

    border: 1px solid var(--clr-light-grey);
    border-top: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    gap: 1.5rem;
    padding: 1rem;
  }

  .wrapper {
    position: relative;
  }

  .search-items-amount {
    position: sticky;
    bottom: 0;
    background-color: var(--clr-white);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
  }
</style>
