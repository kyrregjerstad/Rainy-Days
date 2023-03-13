<script>
  import ColorSelectorButtons from "../buttons/ColorSelectorButtons.svelte";

  export let availableColors = [];

  export let selectedColor;
</script>

<div>
  <h2>Colour</h2>
  <div class="colors">
    {#each availableColors as color}
      <ColorSelectorButtons {color} bind:selectedColor />
    {/each}
  </div>
</div>

<style>
  h2 {
    margin-bottom: 0.5rem;
  }
  .colors {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
  }
</style>
