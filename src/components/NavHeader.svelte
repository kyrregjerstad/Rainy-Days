<script>
  import "@fontsource/material-icons-outlined";
  import HoverCart from "./cart/HoverCart.svelte";

  let cartIsHidden = true;

  let searchIsHidden = true;
</script>

<!-- <HoverCart bind:cartIsHidden /> -->

<nav>
  <ul>
    <li><a href="/" id="home">Rainy Days</a></li>
    <li><a href="/browse/men">men</a></li>
    <li><a href="/browse/women">women</a></li>
    <li><a href="/browse/collections">collections</a></li>
  </ul>
  <div>
    <ul>
      <li>
        <input type="search" name="search" id="" class:searchIsHidden />
        <button
          class="icon-button"
          on:click={() => (searchIsHidden = !searchIsHidden)}
          ><span class="material-symbols-outlined"> search </span></button
        >
      </li>
      <li>
        <a href="/favourites"
          ><span class="material-symbols-outlined"> favorite </span></a
        >
      </li>
      <li>
        <a href="/cart"
          ><span class="material-symbols-outlined"> shopping_bag </span></a
        >
      </li>
    </ul>
  </div>
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1rem;
    background-color: var(--clr-white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: var(--clr-black);
  }

  span {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    gap: 1rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  input {
    padding: 0.2rem;
    margin-right: 1rem;
  }

  .searchIsHidden {
    display: none;
  }

  #home {
    text-transform: uppercase;
    font-weight: 700;
    margin-right: 1rem;
  }
</style>
