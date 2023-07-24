export const load = async ({ url }) => {
  const slugId = url.searchParams.get("id");

  return {
    slugId,
  };
};
