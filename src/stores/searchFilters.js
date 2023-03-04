import { writable } from "svelte/store";

export const filterOptions = writable({
  sortBy: null,
  selectedSeasons: [],
  selectedColors: [],
  selectedSizes: [],
});
