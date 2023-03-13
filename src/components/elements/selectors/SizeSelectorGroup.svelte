<script>
  import SizeSelectButton from "../buttons/SizeSelectButton.svelte";

  export let availableSizes;

  export let selectedSize;
</script>

<div>
  <h2>Size</h2>
  <div class="sizes">
    {#each availableSizes as size}
      <SizeSelectButton {size} bind:selectedSize />
    {/each}
  </div>
</div>

<style>
  h2 {
    margin-bottom: 0.5rem;
  }

  .sizes {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }
</style>
