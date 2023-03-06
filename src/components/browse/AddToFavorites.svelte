<script>
  import "@fontsource/material-icons-outlined";
  import { userFavorites } from "@stores/user-favorites";

  export let isFavorite = false;
  export let productId = 123;

  function toggleFavorite() {
    if (isFavorite) {
      $userFavorites = $userFavorites.filter(
        (favorite) => favorite.id !== productId
      );
      isFavorite = false;
    } else {
      addToFavorites();
    }
  }

  function addToFavorites() {
    if ($userFavorites.find((favorite) => favorite.id === productId)) {
      console.log("Already in favorites");
      isFavorite = false;
      return;
    }
    $userFavorites = [...$userFavorites, { id: productId }];
    isFavorite = true;
  }

  function checkIfFavorite() {
    if ($userFavorites.find((favorite) => favorite.id === productId)) {
      isFavorite = true;
    }
  }

  checkIfFavorite();
</script>

<div>
  <button class="icon-button" on:click={toggleFavorite}>
    <span class="material-symbols-outlined" class:isFavorite> favorite </span>
  </button>
</div>

<style>
  div {
    z-index: 10;
  }

  span {
    color: var(--clr-button-favorite-inactive);
  }

  .isFavorite {
    color: var(--clr-button-favorite-active);
  }

  .icon-button {
    display: flex;
  }

  @media (min-width: 600px) {
    button::after {
      content: "";
      opacity: 0;
      transition: opacity 350ms 350ms ease-in-out;
    }
    button:hover::after {
      content: "Add to favorites";
      background-color: var(--clr-primary-dark);
      color: var(--clr-white);
      padding: 0.25rem;
      font-size: 1rem;
      display: block;
      text-align: left;
      opacity: 1;
    }
    button:has(.isFavorite):hover::after {
      content: "Remove from favorites";
    }
  }

  @media (max-width: 600px) {
    button {
      font-size: 2.5rem;
    }
  }
</style>
