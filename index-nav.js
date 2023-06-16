const sections = document.querySelectorAll('section');
const biggerContainer = document.querySelector(".index-container");
const clickableSector = document.querySelector(".index-item-active__container");
const dropdownIcon = document.querySelector(".index-item-active__drowdown-icon");
const indexItems = document.querySelectorAll(".index-item:not(.index-item-active__container)");

// Add click event to dropdown icon
clickableSector.addEventListener("click", toggleIndexItems);

function toggleIndexItems() {
  // Toggle class to expand/collapse index items
  indexItems.forEach((item) => item.classList.toggle("show"));

  // Rotate the dropdown icon
  dropdownIcon.classList.toggle("rotate");

  // Add styles when open
  biggerContainer.classList.toggle("show");
  clickableSector.classList.toggle("show");
}

// Add click event to each index item
indexItems.forEach((item) => {
  item.addEventListener("click", toggleIndexItems);
});

/________________________________________________________________________________________________/ 




