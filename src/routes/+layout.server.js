import { PUBLIC_API_BASE_URL } from "$env/static/public";
import { PRIVATE_WC_AUTH_HEADER } from "$env/static/private";

const productEndpoint = "wp-json/wc/v3/products";
const URL = `${PUBLIC_API_BASE_URL}${productEndpoint}`;

/** @type {import('./browse/$types').PageServerLoad} */

export const load = async ({ fetch }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization: PRIVATE_WC_AUTH_HEADER,
    },
  };

  const fetchAllProducts = async () => {
    const response = await fetch(URL, requestOptions);
    const products = await response.json();
    return products;
  };

  return {
    allProducts: fetchAllProducts(),
  };
};
