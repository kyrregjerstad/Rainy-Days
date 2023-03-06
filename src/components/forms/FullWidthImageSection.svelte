<script>
  import { spring } from "svelte/motion";
  let src = "/assets/images/hero/hero-27.webp";
  let scrollY;
  let springY = spring(scrollY, { stiffness: 0.2, damping: 0.8 });

  let speed = 0.2;

  let parallaxElement;
</script>

<svelte:window bind:scrollY />

<section class="full-width-section" bind:this={parallaxElement}>
  <div class="image-container">
    <img
      class="image-container"
      {src}
      alt=""
      style:transform="translate3d(0, {(scrollY - 1420) * speed}px, 0)"
    />
  </div>
</section>

<style>
  .full-width-section {
    padding: 0;
    margin: 0;
  }

  .image-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    max-height: 20rem;
    object-fit: cover;
  }

  img {
    top: 0;
    position: absolute;
  }
</style>
