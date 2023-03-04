<script>
  import { inventory } from "@stores/inventory";
  import { cart } from "@stores/shopping-cart";

  /** @type {import('./$types').LayoutData} */
  export let data;

  let productName = data.pathname.split("/")[2];

  productName = productName.replace(/%20/g, " ");

  console.log(productName);

  /* 
  find the correct item from inventroy based on the product name
  */

  let product = inventory.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  function addToCart(productId) {
    $cart = [...$cart, { id: productId, quantity: 1 }];
  }
</script>

<div class="product-page">
  <div class="image-wrapper">
    <img src="/assets/images/products/{product.id}.webp" alt={product.name} />
  </div>
  <section class="product-text">
    <h1>{product.name}</h1>
    <p>€{product.price}</p>
    <p>{product.description}</p>
    <h2>Colour</h2>
    <div class="available-colors">
      {#each product.availableColors as color}
        <div>{color}</div>
      {/each}
    </div>
    <h2>Size</h2>
    <div>
      {#each product.availableSizes as size}
        <button class="size-button">{size}</button>
      {/each}
    </div>
    <button class="add-to-cart" on:click={() => addToCart(product.id)}
      >Add To Cart</button
    >
  </section>
</div>

<style>
  .product-page {
    display: flex;
    color: var(--clr-black);
    background-color: var(--clr-medium-white);
    padding: 0;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
  }

  .product-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

  .available-colors {
    display: flex;
    gap: 1rem;
  }

  .size-button {
    background-color: var(--clr-primary-dark);
    color: var(--clr-white);
    padding: 0.75rem;
    margin-right: 0.5rem;
  }

  .add-to-cart {
    text-transform: uppercase;
    color: var(--clr-white);
    background-color: var(--clr-primary-dark);
    padding: 1rem;
    margin-top: 1rem;
  }
</style>
