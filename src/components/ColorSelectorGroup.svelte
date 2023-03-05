<script>
  import ColorSelectorButtons from "./ColorSelectorButtons.svelte";

  export let availableColors = [];

  let selectedColor;
</script>

<div>
  <h2>Colour</h2>
  <div class="colors" on:click={() => console.log(selectedColor)}>
    {#each availableColors as color}
      <ColorSelectorButtons {color} selectedColor={color} />
    {/each}
  </div>
</div>

<style>
  .colors {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-block: 1rem;
    gap: 2rem;
  }
</style>
