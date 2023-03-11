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
    <span class="material-symbols-outlined remove-filter__label">
      label_off
    </span>
    {filterName}</button
  >
</div>

<style>
  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
  }

  .remove-filter__label {
    display: none;
  }

  button span {
    font-size: 1.2rem;
    padding: 0.2rem;
  }

  button:hover span:first-child {
    display: none;
  }

  button:hover .remove-filter__label {
    display: inline-block;
  }
</style>
