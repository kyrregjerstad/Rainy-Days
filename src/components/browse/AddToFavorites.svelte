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
  span {
    color: var(--clr-button-favorite-inactive);
  }

  .isFavorite {
    color: var(--clr-button-favorite-active);
  }
</style>
