export function removeOuterTags(inputString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(inputString, "text/html");
  return doc.body.innerText;
}
