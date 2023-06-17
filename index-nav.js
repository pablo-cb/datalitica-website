// Get all sections with an id within the main tag
const sections = document.querySelectorAll('main section[id]');
const biggerContainer = document.querySelector(".index-container");
const clickableSector = document.querySelector(".index-item-active__container");
const dropdownIcon = document.querySelector(".index-item-active__drowdown-icon");
const indexItems = document.querySelectorAll(".index-item:not(.index-item-active__container)");


/_________________________________Open and closes the index on mobile and tablet_____________________________________________/ 


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

/_________________________________Interacions with the index_____________________________________________/ 



// Function to determine the current section
function determineCurrentSection() {
  const windowPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Check if the user hasn't started scrolling yet
  if (windowPosition === 0) {
    const firstSection = sections[0];
    const firstSectionName = firstSection.getAttribute('id');

    // Update the text of the active section in the HTML with the first section
    const activeSectionText = document.querySelector('.index-item-active__text');
    activeSectionText.textContent = transformSectionName(firstSectionName);
  }
  // Check if the user has reached the bottom of the page
  else if (windowPosition + windowHeight >= documentHeight) {
    const lastSection = sections[sections.length - 1];
    const lastSectionName = lastSection.getAttribute('id');

    // Update the text of the active section in the HTML with the last section
    const activeSectionText = document.querySelector('.index-item-active__text');
    activeSectionText.textContent = transformSectionName(lastSectionName);
  }
  // The user is in an intermediate section
  else {
    let activeSectionIndex = -1;

    // Iterate through all sections
    sections.forEach((section, index) => {
      const sectionPosition = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      // Check if the window position is within the current section
      if (windowPosition >= sectionPosition && windowPosition < sectionPosition + sectionHeight) {
        // Get the name of the current section
        const sectionName = section.getAttribute('id');

        // Update the text of the active section in the HTML
        const activeSectionText = document.querySelector('.index-item-active__text');
        activeSectionText.textContent = transformSectionName(sectionName);

        activeSectionIndex = index;
      }
    });

    // Add the "active" class to the corresponding index-item element
    indexItems.forEach((item, index) => {
      if (index === activeSectionIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
}

// Function to transform the section name
function transformSectionName(sectionName) {
  let transformedName = sectionName.replace(/\d+/g, '');
  transformedName = transformedName.replace(/-/g, ' ');
  transformedName = transformedName.replace(/(\b\w)/g, char => char.toUpperCase());
  return transformedName;
}

// Add the scroll event to call the function
window.addEventListener('scroll', determineCurrentSection);

// Execute the function on page load to show the first section as the default
window.addEventListener('load', determineCurrentSection);

