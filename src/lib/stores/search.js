import { writable } from "svelte/store";

export function createSearchStore(data) {
  const { subscribe, set, update } = writable({
    data,
    filtered: data,
    search: "",
  });

  return {
    subscribe,
    set,
    update,
  };
}

export function searchHandler(store) {
  const searchTerm = store.search.toLowerCase() || "";
  store.filtered = store.data.filter((item) => {
    return item.searchTerms.toLowerCase().includes(searchTerm);
  });
}
