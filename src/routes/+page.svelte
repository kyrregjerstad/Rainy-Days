<script>
  import TestimonialsSection from "@components/layout/testimonials/TestimonialsSection.svelte";
  import FeaturedCollections from "@components/layout/FeaturedCollections.svelte";
  import FeaturedProducts from "@components/elements/products/FeaturedProducts.svelte";
  import FeaturedText from "@components/layout/FeaturedText.svelte";
  import FullWidthImageSection from "@components/layout/images/FullWidthImageSection.svelte";
  import HeroImage from "@components/layout/images/HeroImage.svelte";
  import TextBlock from "@components/layout/TextBlock.svelte";
  import { inventory } from "@stores/inventory.js";

  $: allProducts = inventory;
</script>

<svelte:head>
  <title>Rainy Days | Home</title>
</svelte:head>

<HeroImage title={"Adventure Awaits"} hasCTA />
<FeaturedProducts {allProducts} />
<FeaturedCollections />
<FeaturedText />
<FullWidthImageSection />
<TextBlock />
<TestimonialsSection />
