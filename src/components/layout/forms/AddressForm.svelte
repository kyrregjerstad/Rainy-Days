<script>
  import FormInput from "./FormInput.svelte";

  function saveFormToSessionStorage(event) {
    const formData = new FormData(event.target);
    const shippingAddress = Object.fromEntries(formData);
    sessionStorage.setItem("shippingAddress", JSON.stringify(shippingAddress));
  }
</script>

<div class="shipping-form">
  <h1>Shipping Address</h1>
  <div class="form-wrapper">
    <form
      action="/checkout/payment"
      class="address-form"
      on:submit={saveFormToSessionStorage}
    >
      <FormInput fieldName={"First Name"} required />
      <FormInput fieldName={"Last Name"} required />

      <div class="address-street-number">
        <FormInput fieldName={"Street"} required />
        <FormInput fieldName={"Number"} />
      </div>
      <div class="address-triple-row">
        <FormInput fieldName={"Place"} required />
        <FormInput fieldName={"Post Code"} required />
        <FormInput fieldName={"Country"} required />
      </div>

      <FormInput fieldName={"Email"} required />
      <FormInput fieldName={"Phone"} />

      <button class="general-button">Next</button>
    </form>
  </div>
</div>

<style>
  h1 {
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-primary);
    padding: 1rem;
  }
  .form-wrapper {
    background-color: white;
    padding: 2rem;
    color: var(--clr-black);
  }

  .address-form {
    --grid-gap: 3rem;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--grid-gap);
  }

  .address-street-number {
    grid-column: 1 / span 2;

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--grid-gap);
  }

  .address-triple-row {
    grid-column: 1 / span 2;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: var(--grid-gap);
  }

  button {
    grid-column: 1 / span 2;
    text-transform: uppercase;
    color: var(--clr-white);
  }

  :global(input:focus, textarea:focus) {
    transition: all 0.5s ease;
    background-color: var(--clr-primary-semi-trans);
    outline: none;
  }

  @media (max-width: 600px) {
    .address-street-number {
      grid-template-columns: 1fr;
    }

    .address-triple-row {
      grid-template-columns: 1fr;
    }
  }
</style>
