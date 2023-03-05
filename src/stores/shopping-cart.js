import { writable } from "svelte/store";

/* sample data:

  { id: "KWP1VF-zPtOO", quantity: 1 },
  { id: "7sY-NQbaGGKp", quantity: 1 },

*/

export const cart = writable([
  { id: "KWP1VF-zPtOO", quantity: 1 },
  { id: "7sY-NQbaGGKp", quantity: 2 },
]);
