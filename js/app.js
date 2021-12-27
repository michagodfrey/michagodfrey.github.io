// Dropdown menu for mobile devices
// Shout out to Web Dev Simplified for guide on dropdown menu 
// video: https://www.youtube.com/watch?v=S-VeYcOCFZw&ab_channel=WebDevSimplified
document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// hide and show button
function hideShow() {
  const moreInfo = document.getElementById("more-info");
  const toggleBtn = document.getElementById("toggle-hide-show");
  if (moreInfo.style.display === "none") {
    moreInfo.style.display = "flex";
    toggleBtn.innerHTML = "Show Less &uarr;";
  } else {
    moreInfo.style.display = "none";
    toggleBtn.innerHTML = "Show More &darr;";
  }
}

