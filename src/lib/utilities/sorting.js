// @ts-nocheck
export function sortByPriceAscending(inventory) {
  return inventory.sort((a, b) => a.price - b.price);
}

export function sortByPriceDescending(inventory) {
  return inventory.sort((a, b) => b.price - a.price);
}

export function sortBySize(inventory, sizes = []) {
  if (!Array.isArray(sizes)) {
    throw new Error("sizes must be an array");
  }
  sizes = sizes.map((size) => {
    return size.toUpperCase();
  });
  return inventory.filter((product) => {
    return sizes.some((size) => {
      return product.availableSizes.includes(size);
    });
  });
}

export function sortBySeason(inventory, seasons = []) {
  if (!Array.isArray(seasons)) {
    throw new Error("Seasons must be an array");
  }
  seasons = seasons.map((season) => {
    return season[0].toUpperCase() + season.slice(1).toLowerCase();
  });
  return inventory.filter((product) => {
    return seasons.some((season) => {
      return product.season.includes(season);
    });
  });
}

export function sortByColor(inventory, colors = []) {
  if (!Array.isArray(colors)) {
    throw new Error("colors must be an array");
  }

  colors = colors.map((color) => {
    return color[0].toUpperCase() + color.slice(1).toLowerCase();
  });

  inventory = inventory.filter((product) => {
    return colors.some((color) => {
      return product.availableColors.includes(color);
    });
  });
  return inventory;
}
