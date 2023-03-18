<script>
  export let src = "";
  export let modalIsOpen = false;

  function closeModal() {
    modalIsOpen = false;
  }

  function handleEscape(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }
</script>

<svelte:window on:keydown={handleEscape} />

{#if modalIsOpen}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="full-screen-image" on:click|stopPropagation={closeModal}>
    <button class="close-button">X</button>
    <div class="image-wrapper">
      <img {src} alt="" />
    </div>
  </div>
{/if}

<style>
  .full-screen-image {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.609);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: zoom-out;
  }

  .close-button {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 1rem;
    cursor: pointer;
  }

  .image-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .image-wrapper img {
    max-width: 100%;
    max-height: 100%;
  }
</style>
