import { PUBLIC_API_BASE_URL } from "$env/static/public";
import { PRIVATE_WC_AUTH_HEADER } from "$env/static/private";
import { removeOuterTags } from "@utils/removeOuterTags";

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
    try {
      const response = await fetch(`${URL}/${productId}`, requestOptions);
      const product = await response.json();
      product.description = removeOuterTags(product.description);
      return product;
    } catch (error) {
      console.warn("There was an error fetching: " + error);
      return null;
    }
  };

  return {
    product: fetchProduct(),
  };
};
