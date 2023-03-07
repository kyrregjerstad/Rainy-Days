// @ts-nocheck
function sortByPriceAscending(inventory) {
  return inventory.sort((a, b) => a.price - b.price);
}

function sortByPriceDescending(inventory) {
  return inventory.sort((a, b) => b.price - a.price);
}

function sortBySize(inventory, sizes = []) {
  if (!Array.isArray(sizes)) {
    throw new Error("sizes must be an array");
  }

  sizes = sizes.map((size) => size.toUpperCase());

  return inventory.filter((product) =>
    sizes.some((size) => product.availableSizes.includes(size))
  );
}

function sortBySeason(inventory, seasons = []) {
  if (!Array.isArray(seasons)) {
    throw new Error("Seasons must be an array");
  }
  seasons = seasons.map(
    (season) => season[0].toUpperCase() + season.slice(1).toLowerCase()
  );

  return inventory.filter((product) =>
    seasons.some((season) => product.season.includes(season))
  );
}

function sortByColor(inventory, colors = []) {
  if (!Array.isArray(colors)) {
    throw new Error("colors must be an array");
  }

  colors = colors.map(
    (color) => color[0].toUpperCase() + color.slice(1).toLowerCase()
  );

  return inventory.filter((product) =>
    colors.some((color) => product.availableColors.includes(color))
  );
}

export function sortInventory(inventory, filterOptions) {
  const { selectedSeasons, selectedColors, selectedSizes, sortBy } =
    filterOptions;

  if (selectedSeasons.length) {
    inventory = sortBySeason(inventory, selectedSeasons);
  }
  if (selectedColors.length) {
    inventory = sortByColor(inventory, selectedColors);
  }
  if (selectedSizes.length) {
    inventory = sortBySize(inventory, selectedSizes);
  }
  if (sortBy === "lowToHigh") {
    inventory = sortByPriceAscending(inventory);
  }
  if (sortBy === "highToLow") {
    inventory = sortByPriceDescending(inventory);
  }
  return inventory;
}
