<script>
  import { onMount } from "svelte";
  let src = "/assets/images/hero/hero-27.webp";
  let scrollY;

  let speed = 0.1;
  let offsetHeight;

  let parallaxElement;

  let offsetTop;

  onMount(() => {
    offsetTop = parallaxElement.getBoundingClientRect().top;
  });
</script>

<svelte:window bind:scrollY />

<section
  class="full-width-section"
  bind:this={parallaxElement}
  bind:offsetHeight
>
  <div class="image-container">
    <img
      class="image-container"
      {src}
      alt=""
      style:transform="translate3d(0, {scrollY * speed - 200}px, 0)"
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
