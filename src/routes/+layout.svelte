<script>
  import "../lib/styles/global.css";
  import NavHeader from "../components/NavHeader.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<NavHeader />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    min-height: 100vh;
    min-height: 100dvh;
  }
</style>
