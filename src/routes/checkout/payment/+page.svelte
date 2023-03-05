<script>
  import PaymentForm from "@components/forms/PaymentForm.svelte";
</script>

<section class="checkout-page">
  <PaymentForm />
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
