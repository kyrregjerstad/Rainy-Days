import { writable } from "svelte/store";

export const filterOptions = writable({
  sortBy: [],
  selectedSeasons: [],
  selectedColors: [],
  selectedSizes: [],
});
