<script>
  import { onMount } from "svelte";
  import { lenisInit } from "@scripts/init/lenis-init";
  import "../lib/styles/global.css";
  import NavHeader from "@components/layout/header/NavHeader.svelte";
  import Footer from "@components/layout/footer/Footer.svelte";
  import NewsletterFooter from "@components/layout/footer/NewsletterFooter.svelte";

  onMount(() => {
    // sets up scroll smoothing
    lenisInit();
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
