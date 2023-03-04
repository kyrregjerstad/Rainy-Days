<script>
  import FeaturedCollections from "../components/FeaturedCollections.svelte";
  import FeaturedProducts from "../components/FeaturedProducts.svelte";
  import Footer from "../components/Footer.svelte";
  import HeroImage from "../components/HeroImage.svelte";
</script>

<HeroImage />
<FeaturedProducts />
<FeaturedCollections />

<section class="featured-text">
  <div class="text">
    <h2>Discover Our Collection of Stylish Jackets</h2>
    <p>
      Find your perfect rain jacket for any occasion. Our collection features
      top-quality materials and stylish designs that will keep you comfortable
      and dry no matter the weather. Browse our selection today and find the
      perfect fit for you.
    </p>
  </div>
  <div class="vertical-line" />
  <div class="text">
    <h2>Stay Dry and Comfortable on Rainy Days</h2>
    <p>
      Make a statement while staying comfortable and dry with our range of
      stylish and functional rain jackets. Our jackets are made with durable
      materials that will last season after season. Shop now and stay
      fashionable in any weather.
    </p>
  </div>
</section>

<section class="full-width-section">
  <div class="image-container">
    <img
      class="full-width-image"
      src="/assets/images/hero/hero-27.webp"
      alt=""
    />
  </div>
</section>

<style>
  section {
    margin: 2rem 2rem;
    color: var(--clr-black);
  }

  .featured-text {
    display: grid;
    grid-template-columns: 5fr 1fr 5fr;
    grid-gap: 1rem;
    text-align: center;
  }

  .vertical-line {
    background-color: var(--clr-black);
    width: 1px;
    height: 100%;
    justify-self: center;
  }

  .text h2 {
    padding-block: 2rem;
  }

  .text {
    padding-block: 15%;
    line-height: 1.5rem;
    color: var(--clr-white);
  }

  .full-width-section {
    padding: 0;
    margin: 0;
  }

  .full-width-image {
    width: 100%;
    max-height: 20rem;
    object-fit: cover;
  }
</style>
