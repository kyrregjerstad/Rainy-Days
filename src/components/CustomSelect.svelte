<script>
  let sizes = ["S", "M", "L", "XL", "XXL"];

  // TBC...
</script>

<div class="custom-select">
  <select id="select">
    {#each sizes as size}
      <option value={size}>{size}</option>
    {/each}
  </select>
  <span class="focus" />
</div>

<style>
  :root {
    --select-border: #777;
    --select-focus: blue;
    --select-arrow: var(--select-border);
  }

  .custom-select {
    position: relative;
    background-color: green;
    width: 200px;
    height: 50px;
  }

  .custom-select select {
    display: none;
  }

  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }
</style>
