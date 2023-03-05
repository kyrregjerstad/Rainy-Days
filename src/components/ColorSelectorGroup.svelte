<script>
  import ColorSelectorButtons from "./ColorSelectorButtons.svelte";

  export let availableColors = [];

  let selectedColor;
</script>

<div>
  <h2>Colour</h2>
  <div class="colors">
    {#each availableColors as color}
      <ColorSelectorButtons {color} selectedColor={color} />
    {/each}
  </div>
</div>

<style>
  h2 {
    font-weight: 500;
  }
  .colors {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-block-start: 1rem;
    gap: 2rem;
  }
</style>
