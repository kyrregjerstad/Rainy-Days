<script>
  import { bind } from "svelte/internal";

  export let title = "Rainy Days";
  export let subtitle = "";
  export let imgSrc = "/assets/images/hero/hero-4.webp";

  let scrollY;
  let speed = 0.5;

  const scrollRangeMin = 0;
  const scrollRangeMax = 500;

  const outputRangeMin = 1;
  const outputRangeMax = 1.2;

  const mapRange = (value, inMin, inMax, outMin, outMax) =>
    ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  $: scaledValue = clamp(
    mapRange(
      scrollY,
      scrollRangeMin,
      scrollRangeMax,
      outputRangeMin,
      outputRangeMax
    ),
    outputRangeMin,
    outputRangeMax
  ).toFixed(4);
</script>

<svelte:window bind:scrollY />

<section class="hero">
  <div class="text" style:transform={`translate3d(0, ${scrollY}px, 0)`}>
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
  <div class="image-container">
    <img
      src={imgSrc}
      alt="{title} hero image"
      style:transform={`translate3d(0, ${
        scrollY * speed
      }px, 0) scale3d(${scaledValue}, ${scaledValue}, 1)`}
    />
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
