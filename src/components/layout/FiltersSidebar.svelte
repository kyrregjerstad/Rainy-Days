<script>
  import "@fontsource/material-icons-outlined";
  import { state } from "@stores/stateManagement";
  import { filterOptions } from "@stores/searchFilters";

  $: sidebarHidden = $state.filtersSidebarHidden;

  let resetFilter = {
    sortBy: [],
    selectedSeasons: [],
    selectedColors: [],
    selectedSizes: [],
  };

  function resetFilters() {
    $filterOptions = resetFilter;
  }

  function saveFilters() {
    $state.filtersSidebarHidden = true;
  }
</script>

<div class="filters-sidebar" class:sidebarHidden>
  <button
    on:click={() => ($state.filtersSidebarHidden = true)}
    class="icon-button"
    ><span class="material-symbols-outlined"> close </span></button
  >
  <h2>Filters <span class="material-symbols-outlined"> sort </span></h2>
  <section>
    <h3>Price</h3>
    <div>
      <input
        type="radio"
        name="sort-by"
        id="price-ascending"
        value="lowToHigh"
        bind:group={$filterOptions.sortBy}
      />
      <label for="price-ascending">Low to High</label>
    </div>
    <div>
      <input
        type="radio"
        name="sort-by"
        id="price-descending"
        value="highToLow"
        bind:group={$filterOptions.sortBy}
      />
      <label for="price-descending">High to Low</label>
    </div>
  </section>
  <section>
    <h2>Season</h2>
    <div>
      <input
        type="checkbox"
        name="seasons"
        id="winter"
        value="winter"
        bind:group={$filterOptions.selectedSeasons}
      />
      <label for="winter">Winter</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="seasons"
        id="spring"
        value="spring"
        bind:group={$filterOptions.selectedSeasons}
      />
      <label for="spring">Spring</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="seasons"
        id="summer"
        value="summer"
        bind:group={$filterOptions.selectedSeasons}
      />
      <label for="summer">Summer</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="seasons"
        id="autumn"
        value="autumn"
        bind:group={$filterOptions.selectedSeasons}
      />
      <label for="autumn">Autumn</label>
    </div>
  </section>
  <section>
    <h3>Colour</h3>
    <div>
      <input
        type="checkbox"
        name="colour"
        id="red"
        value="red"
        bind:group={$filterOptions.selectedColors}
      />
      <label for="red">Red</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="colour"
        id="blue"
        value="blue"
        bind:group={$filterOptions.selectedColors}
      />
      <label for="blue">Blue</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="colour"
        id="green"
        value="green"
        bind:group={$filterOptions.selectedColors}
      />
      <label for="green">Green</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="colour"
        id="yellow"
        value="yellow"
        bind:group={$filterOptions.selectedColors}
      />
      <label for="yellow">Yellow</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="colour"
        id="orange"
        value="orange"
        bind:group={$filterOptions.selectedColors}
      />
      <label for="orange">Orange</label>
    </div>
    <div>
      <input
        type="checkbox"
        name="colour"
        id="purple"
        value="purple"
        bind:group={$filterOptions.selectedColors}
      />
      <label for="purple">Purple</label>
    </div>
  </section>
  <section>
    <div>
      <h3>Sizes</h3>

      <div>
        <input
          type="checkbox"
          name="size"
          id="XS"
          value="XS"
          bind:group={$filterOptions.selectedSizes}
        />
        <label for="XS">XS</label>
        <input
          type="checkbox"
          name="size"
          id="S"
          value="S"
          bind:group={$filterOptions.selectedSizes}
        />
        <label for="S">S</label>
        <input
          type="checkbox"
          name="size"
          id="M"
          value="M"
          bind:group={$filterOptions.selectedSizes}
        />
        <label for="M">M</label>
        <input
          type="checkbox"
          name="size"
          id="L"
          value="L"
          bind:group={$filterOptions.selectedSizes}
        />
        <label for="L">L</label>
        <input
          type="checkbox"
          name="size"
          id="XL"
          value="XL"
          bind:group={$filterOptions.selectedSizes}
        />
        <label for="XL">S</label>
        <input
          type="checkbox"
          name="size"
          id="XXL"
          value="XXL"
          bind:group={$filterOptions.selectedSizes}
        />
        <label for="XXL">XXL</label>
      </div>
    </div>
  </section>

  <div class="buttons">
    <button on:click={resetFilters} class="general-button">Clear </button>
    <button on:click={saveFilters} class="general-button">Save</button>
  </div>
</div>

<style>
  .filters-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 20rem;
    height: 100%;
    background-color: var(--clr-white);
    color: var(--clr-black);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    z-index: 100;
    transition: var(--transition-1);
  }

  .sidebarHidden {
    transform: translateX(-100%);
  }

  h2 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  section {
    margin-block: 1rem;
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }

  .icon-button {
    transform: translateX(-4px);
  }

  .buttons button {
    width: 100%;
  }
</style>
