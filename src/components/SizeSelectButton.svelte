<script>
  export let size;
  export let selectedSize;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<label
  for="size-{size}"
  class="size-button"
  on:click={() => (selectedSize = size)}
>
  <input type="radio" name="size" id="size-{size}" value={size} group="sizes" />
  {size}
</label>

<style>
  .size-button {
    background-color: var(--clr-primary-light);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    color: var(--clr-white);
    cursor: pointer;

    transition: all 0.1s ease-in-out;
  }

  input {
    display: none;
  }

  .size-button:has(input:checked) {
    background-color: var(--clr-primary-dark);
    transform: scale(1.1);
    font-weight: 600;
  }
</style>
