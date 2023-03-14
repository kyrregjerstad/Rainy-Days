<script>
  import "@fontsource/material-icons-outlined";
  export let searchIsHidden = true;
</script>

<button class="icon-button" on:click={() => (searchIsHidden = !searchIsHidden)}
  ><span class="material-symbols-outlined"> search </span></button
>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
