<script>
</script>

<div class="navigation-sidebar">
  <ul>
    <li>men</li>
    <li>women</li>
    <li>collections</li>
    <hr />
    <li>search</li>
    <li>favourites</li>
    <li>shopping bag</li>
  </ul>
</div>

<style>
  .navigation-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--clr-white);
    color: black;
    z-index: 100;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    padding: 5rem 1rem;
    font-size: 2rem;
  }

  .navigation-sidebar ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    list-style: none;
  }
</style>
