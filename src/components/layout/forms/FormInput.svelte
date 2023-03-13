<script>
  export let fieldName = "";
  export let required = false;

  required ? (fieldName += "*") : null;

  const className = nameToClass(fieldName);

  function nameToClass(name) {
    name = name.replace(/ /g, "-").toLowerCase();
    return name.replace(/\*/g, "");
  }

  function handleInput(event) {
    if (event.target.value !== "") {
      event.target.parentNode.classList.add("has-content");
    } else {
      event.target.parentNode.classList.remove("has-content");
    }
  }
</script>

<label for={className}>
  <span class="transform-label">{fieldName}</span>
  <input
    class="input-focus"
    type="text"
    name={className}
    id={className}
    {required}
    on:input={handleInput}
  />
</label>

<style>
  label {
    position: relative;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid var(--clr-black);
  }

  .transform-label {
    font-size: 1.1rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    transform: translateY(0.3rem);
  }

  :global(label:focus-within .transform-label, .has-content .transform-label) {
    font-size: 0.8rem;
    transform: translateY(-1.2rem);
  }
</style>
