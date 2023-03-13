<script>
  let buttonText = "Subscribe";
</script>

<section class="newsletter">
  <form action="" on:submit|preventDefault={() => (buttonText = "Subscribed!")}>
    <label for="newsletter">
      <h3>Sign up for our weekly newsletter</h3>
    </label>
    <input
      for="newsletter"
      type="email"
      name="newsletter"
      placeholder="your@email.com"
      required
    />
    <button class="general-button" type="submit" value="">{buttonText}</button>
  </form>
</section>

<style>
  .newsletter {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-block: 5rem;
    background-color: var(--clr-light-grey);
    color: var(--clr-black);
    margin-top: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    padding: 0.5rem;
  }

  label {
    margin-bottom: 0.5rem;
  }

  button {
    margin-top: 0.5rem;
    color: var(--clr-white);
  }
</style>
