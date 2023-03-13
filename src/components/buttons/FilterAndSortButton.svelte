<script>
  import { state } from "@stores/stateManagement";
  import "@fontsource/material-icons-outlined";
</script>

<div>
  <button
    on:click={() => ($state.filtersSidebarHidden = false)}
    class="icon-button"
    >Filter & Sort
    <span class="material-symbols-outlined"> sort </span>
  </button>
</div>

<style>
  div {
    margin-block: 1rem;
  }
  button {
    display: flex;
    font-weight: 300;
    font-size: 1rem;
    color: white;
  }

  span {
    padding-inline: 0.25rem;
    font-size: 1.25rem;
    color: white;
  }
</style>
