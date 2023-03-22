<script>
  import SearchResult from "@components/elements/search/sub-components/SearchResult.svelte";
  import { keyEventSwitch } from "@scripts/handleSearchNavigation/handleSearchNavigation";
  import Lenis from "@studio-freight/lenis";
  import { onMount } from "svelte";

  export let searchResults = [];

  let selectedIndex = 0;
  let selectedItem;
  let href;

  onMount(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  function handleKeyDown(event) {
    [selectedIndex, selectedItem] = keyEventSwitch(
      event.key,
      selectedIndex,
      selectedItem,
      searchResults,
      href
    );
  }
</script>

<svelte:window on:keydown={handleKeyDown} />

{#if searchResults.length > 0}
  <div class="search-results-dropdown">
    <div class="results-container">
      <ul>
        {#each searchResults as product, index}
          <li>
            <SearchResult
              {product}
              {index}
              {selectedIndex}
              bind:externalHref={href}
            />
          </li>
        {/each}
      </ul>
    </div>

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
    gap: 0.5rem;
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
