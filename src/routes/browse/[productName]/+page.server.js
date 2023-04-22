import { page } from "$app/stores";
import { PUBLIC_API_BASE_URL } from "$env/static/public";
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
