<script>
  export let title = "Rainy Days";
  export let subtitle = "";
  export let imgSrc = "/assets/images/hero/hero-4.webp";
</script>

<section class="hero">
  <div class="text">
    <h1>{title}</h1>
    <h2>{subtitle}</h2>
  </div>
  <img src={imgSrc} alt="{title} hero image" />
</section>

<style>
  .text {
    position: absolute;
    color: var(--clr-white);
    margin: 5rem;
  }
  .text h1 {
    font-size: 4rem;
    text-transform: uppercase;
  }
  .text h2 {
    font-size: 2rem;
  }

  .hero {
    position: relative;
    margin: 0;
  }
</style>
