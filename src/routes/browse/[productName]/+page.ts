export const load = async ({ url }) => {
  // should return the slug in the url after ?id=
  const slugId = url.searchParams.get("id");

  console.log(url.searchParams.get("id"));

  return {
    slugId,
  };
};
