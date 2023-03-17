<script>
  import "@fontsource/material-icons-outlined";
  export let searchIsHidden = true;
  export let searchInput;
</script>

<button
  class="icon-button"
  on:click|stopPropagation={() => (searchIsHidden = !searchIsHidden)}
  on:click|stopPropagation={() => searchInput.focus()}
  ><span class="material-symbols-outlined"> search </span></button
>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
