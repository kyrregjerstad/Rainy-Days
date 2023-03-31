import { PUBLIC_API_BASE_URL } from "$env/static/public";
import { PRIVATE_WC_USERNAME } from "$env/static/private";
import { PRIVATE_WC_PASSWORD } from "$env/static/private";

const productEndpoint = "wp-json/wc/v3/products";
const URL = `${PUBLIC_API_BASE_URL}${productEndpoint}`;

/** @type {import('./$types').PageServerLoad} */

export const load = async ({ fetch }) => {
  const requestOptions = {
    method: "GET",
    headers: {
      Authorization:
        "Basic Y2tfMjdkYWUzMzExNzdhZjIzYzdjMWZjMjQzMmQzNjNhNzk1OTRkMzVmOTpjc19mOGI5YThjMWM1YTE3MDI2YjkyNmQ2NzU5NmMzY2Y1MjVhM2FkYjg4",
    },
  };

  const fetchProducts = async () => {
    const response = await fetch(URL, requestOptions);
    const products = await response.json();
    return products;
  };
  return {
    products: fetchProducts(),
  };
};
