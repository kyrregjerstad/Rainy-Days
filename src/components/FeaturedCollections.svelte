<section class="featured-collections">
  <div class="collection">
    <div class="image-wrapper">
      <a class="general-button" href="/collection">View Collection</a>
      <img
        class="featured-product-img"
        src="/assets/images/collections/collection-1.png"
        alt="Collection of bright colored hiking gear"
      />
    </div>
  </div>
  <div class="collection">
    <div class="image-wrapper">
      <a class="general-button" href="/collection">View Collection</a>
      <img
        class="featured-product-img"
        src="/assets/images/collections/collection-2.png"
        alt="Collection of hiking gear"
      />
    </div>
  </div>
</section>

<style>
  .image-wrapper {
    position: relative;
    aspect-ratio: 1/1;
    overflow: hidden;
  }

  .general-button {
    position: absolute;
    font-size: 1.3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--clr-white);
    color: var(--clr-black);
    padding: 1rem 1rem;
    transition: all 0.3s ease-in-out;
    z-index: 10;
    opacity: 0;
  }

  .featured-collections {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0;
  }
  .featured-product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }
  .featured-product-img:hover,
  .general-button:hover + .featured-product-img {
    transform: scale(1.02);
    filter: brightness(0.3);
  }

  .image-wrapper:hover > .general-button {
    opacity: 1;
  }

  .collection {
    aspect-ratio: 1/1;
  }
</style>
