<script>
  import { userFavorites } from "@stores/user-favorites";
  import Product from "../../components/browse/Product.svelte";
  import { inventory } from "@stores/inventory";
</script>

<div>
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
