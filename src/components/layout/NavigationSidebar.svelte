<script>
  export let navSidebarIsHidden = true;
</script>

<div class="navigation-sidebar" class:navSidebarIsHidden>
  <ul>
    <li><a href="/browse/men">men</a></li>
    <li><a href="/browse/women">women</a></li>
    <li><a href="/browse/collections">collections</a></li>
    <hr />
    <li><a href="/favourites">favourites</a></li>
    <li><a href="/cart">shopping bag</a></li>
  </ul>
</div>

<style>
  .navigation-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%; */
    height: 100%;
    background-color: var(--clr-white);
    color: black;
    z-index: 100;
    transition: transform 0.3s ease-in-out;
    padding: 5rem 1rem;
    font-size: 1.2rem;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  .navSidebarIsHidden {
    transform: translate3d(-100%, 0, 0);
  }

  .navigation-sidebar ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    list-style: none;
  }

  @media (min-width: 600px) {
    .navigation-sidebar {
      transform: translate3d(-100%, 0, 0);
    }
  }
</style>
