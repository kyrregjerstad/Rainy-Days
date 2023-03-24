<script>
  import FiltersSidebar from "@components/layout/FiltersSidebar.svelte";
</script>

<FiltersSidebar />

<div class="browse-page">
  <slot />
</div>

<style>
  :global(.products-grid) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 1rem;
    margin-bottom: 5rem;
  }

  :global(.page) {
    margin-top: 5rem;
    margin-inline: 1rem;
  }

  @media (min-width: 1200px) {
    :global(.products-grid) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
  @media (max-width: 600px) {
    :global(.products-grid) {
      grid-template-columns: repeat(2, 1fr);
    }

    :global(.page) {
      margin-top: unset;
      margin-inline: 1rem;
    }
  }
</style>
