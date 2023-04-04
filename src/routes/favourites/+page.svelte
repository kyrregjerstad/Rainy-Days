<script>
  import { userFavorites } from "@stores/user-favorites";
  import Product from "@components/elements/products/Product.svelte";

  export let data;
  $: ({ allProducts } = data);
</script>

<svelte:head>
  <title>Rainy Days | Favourites</title>
</svelte:head>

{#if $userFavorites.length === 0}
  <div class="no-favorites-message">
    <h1>You have no favourites</h1>
    <a href="/browse/collections" class="general-button">Why not add some?</a>
  </div>
{/if}
<div class="user-favorites">
  {#each $userFavorites as favorite}
    {#each allProducts as product}
      {#if product.id === favorite.id}
        <Product {product} />
      {/if}
    {/each}
  {/each}
</div>

<style>
  .no-favorites-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    margin: 2rem;
  }
  .user-favorites {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
  }
</style>
