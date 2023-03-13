<script>
  import ActiveFilterLabel from "@components/elements/buttons/ActiveFilterLabel.svelte";
  import { filterOptions } from "@stores/searchFilters";

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

<div class="filter-labels">
  {#each Object.values($filterOptions) as filter}
    {#if filter && filter.length === 1}
      <ActiveFilterLabel
        filterName={filter}
        on:removeFilter={handleRemoveFilter}
      />
    {/if}
    {#if filter && filter.length > 1}
      {#if typeof filter !== "string"}
        {#each filter as subFilter}
          <ActiveFilterLabel
            filterName={subFilter}
            on:removeFilter={handleRemoveFilter}
          />
        {/each}
      {/if}
    {/if}
  {/each}
</div>

<style>
  .filter-labels {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-block: 1rem;
  }
</style>
