<script>
  import { cart } from "@stores/shopping-cart";
  import AddToFavorites from "../../../components/browse/AddToFavorites.svelte";
  import SimilarItems from "../../../components/browse/SimilarItems.svelte";
  import ColorSelector from "../../../components/ColorSelectorButtons.svelte";
  import ColorSelectorGroup from "../../../components/ColorSelectorGroup.svelte";
  import CustomSelect from "../../../components/CustomSelect.svelte";
  import FeaturedCollections from "../../../components/FeaturedCollections.svelte";
  import SizeSelectorGroup from "../../../components/SizeSelectorGroup.svelte";

  /** @type {import('./$types').LayoutData} */
  export let data;
  let { product } = data;
  $: product = data.product;
  $: availableColors = product.availableColors;
  $: availableSizes = product.availableSizes;

  let { availableColors, availableSizes } = product;
  let selectedSize;
  let selectedColor;
  let buttonText = "Add to bag";

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
    buttonText = "Added!";
    setTimeout(() => {
      buttonText = "Add to bag";
    }, 2000);
  }
</script>

<div class="page-wrapper">
  <div class="product-page">
    <div class="image-wrapper">
      <img
        class="product-image"
        src="/assets/images/products/{product.id}.webp"
        alt={product.name}
      />
    </div>
    <section class="product-text">
      <h1>{product.name}</h1>
      <p>€{product.price}</p>
      <p>{product.description}</p>
      <div class="available-colors">
        <ColorSelectorGroup {availableColors} bind:selectedColor />
      </div>
      <SizeSelectorGroup {availableSizes} bind:selectedSize />
      <div class="add-to-buttons">
        <button
          class="add-to-cart"
          on:click={() => cartHandler(product, selectedSize, selectedColor)}
          >{buttonText}
        </button>
        <AddToFavorites tooltip={false} fontSize={"3.5rem"} />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        doloremque soluta esse numquam error neque est nesciunt ipsam fugiat
        labore earum quidem laborum consequuntur quod, ipsum culpa nostrum
        distinctio dignissimos dicta asperiores accusamus quos tenetur? Iste
        eius accusamus, dignissimos ut adipisci molestiae, accusantium libero
        error at consequatur enim! Eos praesentium ab illum placeat deserunt
        adipisci qui alias quidem rerum molestiae quae nemo sint necessitatibus
        laudantium est error deleniti doloremque atque, repellat soluta. Beatae
        inventore enim similique quidem veniam? Sed repudiandae repellendus
        natus, molestiae animi quam consectetur distinctio esse rerum incidunt
        labore minus? Odit veniam ipsa sed? Dolorum, dignissimos facere. Dolor!
      </p>
    </section>
  </div>
</div>
<SimilarItems currentProductId={product.id} />
<h2>Featured Collections</h2>
<FeaturedCollections />

<style>
  .page-wrapper {
    width: 100%;
    background-color: var(--clr-white);
  }
  .product-page {
    position: relative;
    display: flex;
    justify-content: center;
    color: var(--clr-black);
    background-color: var(--clr-white);
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 2rem;
    margin: 2rem;
    margin-top: 5rem;
  }

  .image-wrapper {
    flex: 1;
  }

  .product-image {
    position: sticky;
    top: 5rem;
  }

  .product-text {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-inline: 2rem;
    flex: 1;
  }

  .available-colors {
    display: flex;
    gap: 1rem;
  }

  .add-to-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .add-to-cart {
    text-transform: uppercase;
    color: var(--clr-white);
    background-color: var(--clr-primary-dark);
    padding: 1rem;
    flex: 1;
  }

  @media (max-width: 768px) {
    .product-page {
      flex-direction: column;
    }
  }
</style>
