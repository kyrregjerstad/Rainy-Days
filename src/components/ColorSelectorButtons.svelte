<script>
  export let color = "";
  export let selectedColor;

  $: console.log(selectedColor);
</script>

<div>
  <label for="color-{color}">
    <div class="color-blob" style="background-color: {color};">
      <input
        type="radio"
        name="color"
        group={selectedColor}
        value={color}
        id="color-{color}"
        style="accent-color: {color}; border: solid 5px {color};"
      />
    </div>
    {color}
  </label>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .color-blob {
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
    border-radius: 50%;
    border-color: var(--clr-white);
    margin-bottom: 0.5rem;
  }
</style>
