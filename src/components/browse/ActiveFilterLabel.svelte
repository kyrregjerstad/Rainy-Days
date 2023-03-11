<script>
  import { createEventDispatcher } from "svelte";
  import "@fontsource/material-icons-outlined";

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("removeFilter", { filterName });
  }

  export let filterName;
</script>

<div>
  <button on:click={handleClick}>
    <span class="material-symbols-outlined"> label </span>
    X {filterName}</button
  >
</div>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.2rem;
  }
</style>
