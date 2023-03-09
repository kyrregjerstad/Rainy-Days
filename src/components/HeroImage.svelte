<script>
  import Parallax from "$lib/scripts/animation/parallax";

  export let title = "Rainy Days";
  export let subtitle = "";
  export let src = "/assets/images/hero/hero-4.webp";
  export let hasCTA = false;
  export let hasParallax = true;
  export let height;

  console.log(height);

  switch (height) {
    case "small":
      height = "20vw";
      break;
    case "medium":
      height = "40vw";
      break;
    case "large":
      height = "50vw";
      break;
    default:
      height = "unset";
  }

  const imageParallax = new Parallax({
    speed: 0.5,
    range: 800,
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

  let clientHeight;
  let offsetHeight;

  $: scrollY,
    hasParallax
      ? (imageTransform = imageParallax.getTransform(scrollY, offsetHeight))
      : (imageTransform = "");
  $: scrollY,
    hasParallax
      ? (textTransform = textParallax.getTransform(scrollY, offsetHeight))
      : (textTransform = "");
</script>

<svelte:window bind:scrollY />

<section
  class="hero"
  bind:clientHeight
  bind:offsetHeight
  style={`height: ${height}`}
>
  <div class="text" style:transform={textTransform}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
    {#if hasCTA}
      <a class="CTA-button" href="/browse/collections">Browse Collections</a>
    {/if}
  </div>
  <div class="image-container">
    <img {src} alt="{title} hero image" style:transform={imageTransform} />
  </div>
</section>

<style>
  section {
    max-height: 75vh;
    max-height: 75dvh;
  }
  .CTA-button {
    font-size: clamp(1rem, 3vw, 5rem);
    background-color: var(--clr-primary-dark);
    padding: 1rem;
    text-transform: uppercase;
  }
  .hero:has(.CTA-button:hover) .image-container {
    transform: scale(1.025);
    filter: blur(2px) brightness(0.7);
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    position: absolute;
    color: var(--clr-white);
    margin: 2rem;
    z-index: 10;
  }
  .text h1 {
    font-size: clamp(1.125rem, 7vw, 10rem);
    text-transform: uppercase;
  }
  .text h2 {
    font-size: 2rem;
  }

  .image-container {
    overflow: hidden;
    object-fit: contain;
    object-position: 100% 100%;
    transition: all 0.5s ease;
  }
  .image-container img {
    width: 100%;
  }

  .hero {
    position: relative;
    margin: 0;
    overflow: hidden;
  }
</style>
