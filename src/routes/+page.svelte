<script>
  import FeaturedCollections from "../components/FeaturedCollections.svelte";
  import FeaturedProducts from "../components/FeaturedProducts.svelte";
  import FeaturedText from "../components/FeaturedText.svelte";
  import Footer from "../components/Footer.svelte";
  import HeroImage from "../components/HeroImage.svelte";
</script>

<HeroImage />
<FeaturedProducts />
<FeaturedCollections />
<FeaturedText />

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
