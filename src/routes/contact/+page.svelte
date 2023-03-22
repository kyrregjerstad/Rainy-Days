<script>
  function handleInput(event) {
    if (event.target.value !== "") {
      event.target.parentNode.classList.add("has-content");
    } else {
      event.target.parentNode.classList.remove("has-content");
    }
  }
</script>

<svelte:head>
  <title>Rainy Days | Contact</title>
</svelte:head>

<div class="wrapper">
  <section>
    <h1>Contact</h1>
    <form action="">
      <div class="row">
        <label for="name"
          ><span class="transform-label">Name*</span>
          <input
            class="input-focus"
            type="text"
            name="name"
            id="name"
            required
            on:input={handleInput}
          />
        </label>
      </div>

      <div class="row">
        <label for="email">
          <span class="transform-label">Email*</span>
          <input
            class="input-focus"
            type="email"
            name="email"
            id="email"
            required
            on:input={handleInput}
          />
        </label>
      </div>

      <label for="message"
        >Message*
        <textarea name="message" id="message" cols="30" rows="10" required />
      </label>

      <button type="submit">Send</button>
    </form>
  </section>
</div>

<style>
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--clr-white);
    color: var(--clr-black);
    padding: 1rem;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-bottom: 2px solid var(--clr-black);
  }

  form {
    width: 100%;
    max-width: 800px;
  }

  input:focus,
  textarea:focus {
    transition: all 0.5s ease;
    background-color: var(--clr-primary-semi-trans);
    outline: none;
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    background-color: var(--clr-black);
    color: var(--clr-white);
    border: none;
    border-radius: 0.25rem;
    margin: 1rem 0;
  }

  .row {
    position: relative;
    margin-block: 2rem;
  }

  .transform-label {
    font-size: 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.3s ease;
    transform: translateY(-0.2rem);
  }

  :global(.row:focus-within .transform-label, .has-content .transform-label) {
    font-size: 1rem;
    transform: translateY(-1.2rem);
  }
</style>
