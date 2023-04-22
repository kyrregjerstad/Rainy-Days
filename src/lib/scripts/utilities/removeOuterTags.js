export function removeOuterTags(str) {
  if (typeof str !== "string") {
    console.warn(`String expected, got ${typeof str}`);
    return str;
  }
  return str.replace(/^<[^>]+>/m, "").replace(/<\/[^>]+>$/m, "");
}
