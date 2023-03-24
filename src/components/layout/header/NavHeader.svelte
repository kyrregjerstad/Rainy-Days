<script>
  import { page } from "$app/stores";

  import "@fontsource/material-icons-outlined";
  import HoverCart from "../../elements/products/HoverCart.svelte";
  import { userFavorites } from "@stores/user-favorites";
  import NavigationSidebar from "../NavigationSidebar.svelte";
  import ShoppingBagIcon from "@components/layout/header/ShoppingBagIcon.svelte";
  import Search from "@components/elements/search/Search.svelte";

  let cartIsHidden = true;

  let searchIsHidden = true;
  let navSidebarIsHidden = true;

  let fontSize = 1.4;
  let marginInline = 0;
  let innerWidth;

  function animateFavorites() {
    fontSize = 1.6;
    marginInline = -0.1;
    setTimeout(() => {
      fontSize = 1.4;
      marginInline = 0;
    }, 200);
  }

  $: $userFavorites, animateFavorites();
  $: $page, (navSidebarIsHidden = true);
  $: currentPath = $page.route.id.split("/")[2];
</script>

<!-- <HoverCart bind:cartIsHidden /> -->

<NavigationSidebar bind:navSidebarIsHidden />

<svelte:window bind:innerWidth />

<nav>
  {#if searchIsHidden && innerWidth < 650}
    <button
      class="hamburger-menu icon-button"
      on:click={() => (navSidebarIsHidden = !navSidebarIsHidden)}
    >
      <span class="material-symbols-outlined "> menu </span>
    </button>
  {/if}
  <ul>
    {#if !searchIsHidden && innerWidth < 750}
      <li />
    {:else}
      <li><a href="/" id="home">Rainy Days</a></li>
    {/if}
    <li class="navigation-subpages">
      <a href="/browse/men" class:activePage={currentPath === "men"}>men</a>
    </li>
    <li class="navigation-subpages">
      <a href="/browse/women" class:activePage={currentPath === "women"}
        >women</a
      >
    </li>
    <li class="navigation-subpages">
      <a
        href="/browse/collections"
        class:activePage={currentPath === "collections"}>collections</a
      >
    </li>
  </ul>
  <div>
    <ul>
      <li>
        <Search bind:searchIsHidden />
      </li>
      <li>
        <a href="/favourites"
          ><span
            class="material-symbols-outlined"
            style={`font-size: ${fontSize}rem; margin-inline: ${marginInline}rem;`}
          >
            favorite
          </span></a
        >
      </li>
      <li>
        <a href="/cart"><ShoppingBagIcon /></a>
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
    padding: 1rem 2rem;
    background-color: var(--clr-white);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    color: var(--clr-black);
    height: 75px;
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
    gap: 1.5rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .hamburger-menu {
    display: flex;
  }

  .hamburger-menu span {
    font-size: 2.5rem;
  }

  #home {
    text-transform: uppercase;
    font-weight: 700;
    margin-right: 1rem;
  }

  .navigation-subpages {
    display: none;
  }

  .activePage {
    text-decoration: underline;
    font-weight: 500;
  }

  @media (min-width: 600px) {
    .hamburger-menu {
      display: none;
    }

    .navigation-subpages {
      display: block;
    }
  }
</style>
