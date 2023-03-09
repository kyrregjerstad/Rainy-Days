<script>
  import { userFavorites } from "@stores/user-favorites";
  import Product from "../../components/browse/Product.svelte";
  import { inventory } from "@stores/inventory";
</script>

<div class="user-favorites">
  {#each $userFavorites as favorite}
    {#each inventory as product}
      {#if product.id === favorite.id}
        <Product
          productName={product.name}
          productPrice={product.price}
          productId={product.id}
        />
      {/if}
    {/each}
  {/each}
</div>

<style>
  .user-favorites {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 1rem;
    padding: 1rem;
  }
</style>
