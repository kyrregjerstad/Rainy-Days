<script>
  import AddressForm from "@components/layout/forms/AddressForm.svelte";
</script>

<section class="checkout-page">
  <AddressForm />
</section>

<style>
  .checkout-page {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    gap: 2rem;
    color: var(--clr-black);
    padding: 2rem;
  }
</style>
