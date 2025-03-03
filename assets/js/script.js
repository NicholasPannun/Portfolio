'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Show/hide sidebar contact info
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Page navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// Dark/Light Mode Toggle (PowerBI style)
document.addEventListener('DOMContentLoaded', function () {
  const themeCheckbox = document.getElementById('themeToggleCheckbox');
  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', function () {
      // We'll toggle "light-mode" on the body. If you prefer "dark-mode" toggling, adjust as needed.
      document.body.classList.toggle('light-mode', this.checked);
      // If you also want a "dark-mode" class, you could do:
      // document.body.classList.toggle('dark-mode', !this.checked);
    });
  }
});

// Example "Read More" button -> open a details page
function openProjectDetails(projectId) {
  window.location.href = "project-details.html?project=" + projectId;
}
