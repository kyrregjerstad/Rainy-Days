import { writable } from "svelte/store";

export const state = writable({
  filtersSidebarHidden: true,
});
