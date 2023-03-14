<script>
  export let searchIsHidden = true;
  export let searchValue = "";
</script>

<input
  type="search"
  name="search"
  class:searchIsHidden
  bind:value={searchValue}
  on:click|stopPropagation
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
    width: 250px;
  }

  input:focus {
    outline: none;
    background-color: var(--clr-white);
  }
</style>
