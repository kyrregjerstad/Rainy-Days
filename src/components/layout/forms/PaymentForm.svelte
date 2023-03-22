<script>
  import FormInput from "./FormInput.svelte";
</script>

<div class="form-wrapper">
  <h1>Payment Info</h1>
  <form action="/checkout/confirm-order" class="payment-form">
    <FormInput fieldName={"Full Name"} required />
    <FormInput fieldName={"Card Number"} required />
    <div class="form-cvv-exipry">
      <FormInput fieldName={"CVV"} required />
      <FormInput fieldName={"Expiry"} required />
    </div>
    <button class="general-button">Next</button>
    <p>You will have a chance to review your order before placing it</p>
  </form>
</div>

<style>
  h1 {
    text-align: center;
    text-transform: uppercase;
    color: var(--clr-primary);
    padding: 1rem;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    color: var(--clr-black);
    width: 50%;
  }

  .payment-form {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    background-color: white;
    padding: 2rem;
  }

  .form-cvv-exipry {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    width: 100%;
  }

  .address-street-number {
    grid-column: 1 / span 2;

    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: var(--grid-gap);
  }

  .address-tripe-row {
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
</style>
