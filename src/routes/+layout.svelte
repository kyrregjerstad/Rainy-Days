<script>
  import "../lib/styles/global.css";
  import { onMount } from "svelte";
  import { lenisInit } from "@utils/lenis-init";
  import NavHeader from "@components/layout/header/NavHeader.svelte";
  import Footer from "@components/layout/footer/Footer.svelte";
  import NewsletterFooter from "@components/layout/footer/NewsletterFooter.svelte";
  import SvelteHead from "@components/meta/SvelteHead.svelte";

  onMount(() => {
    // sets up scroll smoothing
    lenisInit();
  });
</script>

<SvelteHead />

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
