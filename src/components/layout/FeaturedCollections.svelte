<section class="featured-collections">
  <div class="collection">
    <div class="image-wrapper">
      <div class="featured-text">
        <h3>Peak Performance</h3>
        <a class="general-button" href="/browse/collections">View Collection</a>
      </div>
      <img
        class="featured-product-img"
        src="/assets/images/collections/collection-1.webp"
        alt="Collection of bright colored hiking gear"
      />
    </div>
  </div>
  <div class="collection">
    <div class="image-wrapper">
      <div class="featured-text">
        <h3>Wanderlust Essentials</h3>
        <a class="general-button" href="/browse/collections">View Collection</a>
      </div>
      <img
        class="featured-product-img"
        src="/assets/images/collections/collection-2.webp"
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
    font-size: 1.3rem;
    background-color: var(--clr-white);
    color: var(--clr-black);
    padding: 1rem 1rem;
    transition: all 0.3s ease-in-out;
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
  .featured-text:hover + .featured-product-img {
    transform: scale(1.02);
    filter: brightness(0.5) blur(3px);
  }

  .featured-text:hover > .general-button {
    opacity: 1;
  }

  .featured-text {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    padding: 2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    opacity: 0;

    transition: all 0.3s 0.1s ease-in-out;
  }

  .featured-text h3 {
    font-size: 2rem;
  }

  .featured-text:hover {
    opacity: 1;
  }

  .collection {
    aspect-ratio: 1/1;
  }

  @media (max-width: 600px) {
    .featured-collections {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
