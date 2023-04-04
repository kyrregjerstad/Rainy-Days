// import { inventory } from "$lib/stores/inventory";

// /** @type {import('./$types').LayoutLoad} */
// export const load = async ({ url: { pathname } }) => {
//   const productName = pathname.split("/")[2].replace(/%20/g, " ");
//   const product = inventory.find(
//     (item) => item.name.toLowerCase() === productName.toLowerCase()
//   );
//   return { pathname, product };
// };
import { page } from "$app/stores";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
import { PRIVATE_WC_USERNAME } from "$env/static/private";
import { PRIVATE_WC_PASSWORD } from "$env/static/private";
import { PRIVATE_WC_AUTH_HEADER } from "$env/static/private";

const productEndpoint = "wp-json/wc/v3/products";
const URL = `${PUBLIC_API_BASE_URL}${productEndpoint}`;

/** @type {import('./browse/$types').PageServerLoad} */

export const load = async ({ fetch, url: { searchParams } }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: PRIVATE_WC_AUTH_HEADER,
    },
  };

  const productId = searchParams.get("id");

  const fetchProduct = async () => {
    const response = await fetch(`${URL}/${productId}`, requestOptions);
    const product = await response.json();
    return product;
  };

  return {
    product: fetchProduct(),
  };
};
