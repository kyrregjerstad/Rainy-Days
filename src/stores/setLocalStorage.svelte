<script>
  import { userFavorites } from "./user-favorites";

  function saveToLocalStorage(item) {
    localStorage.setItem("userFavorites", JSON.stringify(item));
  }

  $: $userFavorites, console.log("ding");
</script>
