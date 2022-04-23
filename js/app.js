// Dropdown menu for mobile devices
// Thanks to Web Dev Simplified for guide on dropdown menu
// video: https://www.youtube.com/watch?v=S-VeYcOCFZw&ab_channel=WebDevSimplified
document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
});

// toggle display of more info in about section
$(document).ready(function () {
  $("#toggle-hide-show").click(function () {
    $("#more-info").slideToggle("slow");
    $(this).text(
      $(this).text() == "Show less" ? "Show more" : "Show less"
    );
  });
});

// send message modal modal code adapted from example at w3 schools
// https: //www.w3schools.com/howto/howto_css_modals.asp

// Modal elements
const modal = document.getElementById("myModal");
const closeModal = document.getElementById("close-modal");

// Open modal 
function openModal() {
  modal.style.display = "block";
}

// Close modal when the user clicks close button
closeModal.onclick = function() {
  modal.style.display = "none";
}

// Close modal when the user clicks anywhere outside it
document.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
