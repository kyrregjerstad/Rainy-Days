import { inventory } from "$lib/stores/inventory";

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url: { pathname } }) => {
  const productName = pathname.split("/")[2].replace(/%20/g, " ");
  const product = inventory.find(
    (item) => item.name.toLowerCase() === productName.toLowerCase()
  );
  return { pathname, product };
};
