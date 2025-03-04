'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar Toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Testimonials Modal
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

testimonialsItems.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}
if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}

// Filter Buttons (All, Creative, Critical)
const filterButtons = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  filterItems.forEach(item => {
    if (selectedValue === "all" || item.dataset.category === selectedValue) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

let lastClickedBtn = filterButtons[0];
filterButtons.forEach(btn => {
  btn.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    filterFunc(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastClickedBtn = this;
  });
});

// Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((navLink, i) => {
  navLink.addEventListener("click", function () {
    pages.forEach((page, j) => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    });
  });
});

// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
  const themeCheckbox = document.getElementById('themeToggleCheckbox');
  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', function () {
      document.body.classList.toggle('light-mode', this.checked);
    });
  }
});

// "Read More" button (optional)
function openProjectDetails(projectId) {
  window.location.href = "project-details.html?project=" + projectId;
}
