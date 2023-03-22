function goToProductPage(selectedIndex, selectedItem, searchResults, href) {
  if (selectedIndex === -1) return;
  selectedItem = searchResults[selectedIndex];
  window.location.href = href;
}

function scrollIntoView(selectedIndex, selectedItem, searchResults) {
  if (selectedIndex === -1) return;
  selectedItem = searchResults[selectedIndex];
  const element = document.querySelector(".selected");
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function selectNextItem(selectedIndex, searchResults) {
  return (selectedIndex = (selectedIndex + 1) % searchResults.length);
}

function selectPreviousItem(selectedIndex, searchResults) {
  if (searchResults.length === 0) {
    return -1;
  } else if (selectedIndex === null) {
    return searchResults.length - 1;
  } else {
    return (selectedIndex - 1 + searchResults.length) % searchResults.length;
  }
}

export function keyEventSwitch(
  eventKey,
  selectedIndex,
  selectedItem,
  searchResults,
  href
) {
  switch (eventKey) {
    case "ArrowDown":
      selectedIndex = selectNextItem(selectedIndex, searchResults);
      break;
    case "ArrowUp":
      selectedIndex = selectPreviousItem(selectedIndex, searchResults);
      break;
    case "Enter":
      goToProductPage(selectedIndex, selectedItem, searchResults, href);
      break;
    default:
      break;
  }

  scrollIntoView(selectedIndex, selectedItem, searchResults);

  return [selectedIndex, selectedItem];
}
