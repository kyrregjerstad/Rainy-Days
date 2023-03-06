<script>
  import FeaturedCollections from "../components/FeaturedCollections.svelte";
  import FeaturedProducts from "../components/FeaturedProducts.svelte";
  import FeaturedText from "../components/FeaturedText.svelte";
  import Footer from "../components/Footer.svelte";
  import FullWidthImageSection from "../components/forms/FullWidthImageSection.svelte";
  import HeroImage from "../components/HeroImage.svelte";
  import TextBlock from "../components/TextBlock.svelte";
</script>

<HeroImage />
<FeaturedProducts />
<FeaturedCollections />
<FeaturedText />
<FullWidthImageSection />
<TextBlock />

<style>
  section {
    margin: 2rem 2rem;
    color: var(--clr-black);
  }
</style>
