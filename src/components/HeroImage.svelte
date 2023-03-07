<script>
  import Parallax from "$lib/scripts/animation/parallax";

  export let title = "Rainy Days";
  export let subtitle = "";
  export let src = "/assets/images/hero/hero-4.webp";

  const imageParallax = new Parallax({
    speed: 0.8,
    range: 500,
    outputRange: [1, 1.2],
    scale: true,
  });

  const textParallax = new Parallax({
    speed: 1,
    range: 500,
    outputRange: [1, 1.2],
    scale: false,
  });

  let scrollY;
  let imageTransform;
  let textTransform;

  $: scrollY, (imageTransform = imageParallax.getTransform(scrollY));
  $: scrollY, (textTransform = textParallax.getTransform(scrollY));
</script>

<svelte:window bind:scrollY />

<section class="hero">
  <div class="text" style:transform={textTransform}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
  <div class="image-container">
    <img {src} alt="{title} hero image" style:transform={imageTransform} />
  </div>
</section>

<style>
  .text {
    position: absolute;
    color: var(--clr-white);
    margin: 2rem;
    z-index: 10;
  }
  .text h1 {
    font-size: 7vw;
    text-transform: uppercase;
  }
  .text h2 {
    font-size: 2rem;
  }

  .image-container {
    overflow: hidden;
    object-fit: contain;
    object-position: 100% 100%;
    /* height: 10vh; */
  }

  .hero {
    position: relative;
    margin: 0;
    overflow: hidden;
  }
</style>
