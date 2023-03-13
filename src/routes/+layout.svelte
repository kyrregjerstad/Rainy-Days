<script>
  import Lenis from "@studio-freight/lenis";
  import { onMount } from "svelte";

  import "../lib/styles/global.css";
  import NavHeader from "@components/layout/header/NavHeader.svelte";
  import Footer from "@components/layout/footer/Footer.svelte";
  import NewsletterFooter from "@components/layout/footer/NewsletterFooter.svelte";

  onMount(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: "vertical", // vertical, horizontal
      gestureDirection: "vertical", // vertical, horizontal, both
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
</script>

<NavHeader />

<main>
  <slot />
</main>

<NewsletterFooter />
<Footer />

<style>
  main {
    min-height: 100vh;
    min-height: 100dvh;
  }
</style>
