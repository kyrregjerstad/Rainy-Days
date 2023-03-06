<script>
  import { inventory } from "@stores/inventory";
  import { cart } from "@stores/shopping-cart";
  import ColorSelector from "../../../components/ColorSelectorButtons.svelte";
  import ColorSelectorGroup from "../../../components/ColorSelectorGroup.svelte";
  import SizeSelectorGroup from "../../../components/SizeSelectorGroup.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;

  let productName = data.pathname.split("/")[2];

  productName = productName.replace(/%20/g, " ");

  let product = inventory.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );

  let { availableColors, availableSizes } = product;

  let selectedSize;
  let selectedColor;

  function cartHandler(product, selectedSize, selectedColor) {
    if (selectedSize && selectedColor) {
      addToCart(product.id, selectedSize, selectedColor);
    } else {
      alert("Please select a size and color");
    }
  }

  function addToCart(productId, selectedSize, selectedColor) {
    $cart = [
      ...$cart,
      { id: productId, quantity: 1, size: selectedSize, color: selectedColor },
    ];
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
    <div class="available-colors">
      <ColorSelectorGroup {availableColors} bind:selectedColor />
    </div>
    <div>
      <SizeSelectorGroup {availableSizes} bind:selectedSize />
    </div>
    <button
      class="add-to-cart"
      on:click={() => cartHandler(product, selectedSize, selectedColor)}
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

  .add-to-cart {
    text-transform: uppercase;
    color: var(--clr-white);
    background-color: var(--clr-primary-dark);
    padding: 1rem;
    margin-top: 1rem;
  }

  @media (max-width: 768px) {
    .product-page {
      flex-direction: column;
    }
  }
</style>
