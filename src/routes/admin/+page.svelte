<script lang="ts">
  import Product from "@components/elements/products/Product.svelte";

  export let data;

  $: ({ products } = data);
</script>

<div class="form-wrapper">
  <form action="?/createProduct" method="POST">
    <h3>Add new product</h3>
    <label for="title">Title</label>
    <input type="text" name="title" id="title" />
    <label for="price">Price</label>
    <input type="number" name="price" id="price" />
    <label for="description">Description</label>
    <textarea name="description" id="description" cols="30" rows="10" />
    <label for="image">Image</label>
    <input type="file" name="image" id="image" />
    <button type="submit">Add product</button>
  </form>
</div>

<div class="products">
  {#each products as product}
    <Product
      productName={product.title}
      productDescription={product.description}
    />
  {/each}
</div>

<style>
  .products {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
  .form-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    border: 1px solid var(--clr-light-grey);
    border-radius: 0.5rem;
  }

  form h3 {
    text-align: center;
  }

  form label {
    font-weight: bold;
  }

  form input,
  form textarea {
    padding: 0.5rem;
    border: 1px solid var(--clr-light-grey);
    border-radius: 0.2rem;
  }

  button {
    padding: 1rem;
  }
</style>
