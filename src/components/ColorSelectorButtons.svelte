<script>
  export let color;
  export let selectedColor;
</script>

<div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <label
    for="color-{color}"
    style="background-color: {color}; border: solid 5px {color};"
    on:click={() => (selectedColor = color)}
  >
    <input
      type="radio"
      name="color"
      group="colors"
      value={color}
      id="color-{color}"
    />
  </label>
  <div class="color-name">
    {color}
  </div>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  input {
    display: none;
  }

  label {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    color: var(--clr-white);
    cursor: pointer;
    margin-bottom: 0.5rem;

    transition: all 0.1s ease-in-out;
  }

  label:has(input:checked) {
    background-color: var(--clr-primary-dark);
    transform: scale(1.1);
  }

  label:has(input:checked) + .color-name {
    font-weight: 600;
  }
</style>
