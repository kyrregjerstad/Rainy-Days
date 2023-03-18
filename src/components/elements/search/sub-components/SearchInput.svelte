<script>
  export let searchIsHidden = true;
  export let searchValue = "";
  export let searchInput;
</script>

<!-- svelte-ignore a11y-autofocus -->
<label for="search" class="visually-hidden">search</label>
<input
  type="search"
  name="search"
  id="search"
  class:searchIsHidden
  bind:value={searchValue}
  on:click|stopPropagation
  autofocus
  bind:this={searchInput}
/>

<style>
  .searchIsHidden {
    display: none;
  }

  input {
    padding: 0.75rem;
    padding-left: 1rem;
    width: 100%;
    border: none;
    width: clamp(210px, 35vw, 350px);
  }

  input:focus {
    outline: none;
    background-color: var(--clr-white);
  }
</style>
