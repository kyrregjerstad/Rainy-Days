<script>
  import { userFavorites } from "./user-favorites";

  function saveToLocalStorage(item) {
    localStorage.setItem("userFavorites", JSON.stringify(item));
  }
</script>
