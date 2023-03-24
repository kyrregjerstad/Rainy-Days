import type { Actions, PageServerLoad } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { prisma } from "$lib/server/prisma";

export const load: PageServerLoad = async () => {
  return {
    products: await prisma.product.findMany(),
  };
};

export const actions: Actions = {
  createProduct: async ({ request }) => {
    const { title, description, price } = Object.fromEntries(
      await request.formData()
    ) as { title: string; description: string; price: string };

    try {
      await prisma.product.create({
        data: {
          title,
          description,
          price,
        },
      });
    } catch (error) {
      console.error(error);
      return fail(500, { message: "could not create product" });
    }
    return {
      status: 201,
    };
  },
};
