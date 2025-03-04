// Project Filter Dropdown
//const select = document.querySelector("[data-select]");
//const selectItems = document.querySelectorAll("[data-select-item]");
//const selectValue = document.querySelector("[data-selecct-value]");
//const filterBtn = document.querySelectorAll("[data-filter-btn]");

//select.addEventListener("click", function () {
  //elementToggleFunc(this);
//});

//for (let i = 0; i < selectItems.length; i++) {
  //selectItems[i].addEventListener("click", function () {
    //let selectedValue = this.innerText.toLowerCase();
    //selectValue.innerText = this.innerText;
    //elementToggleFunc(select);
    //filterFunc(selectedValue);
  //});
//}

//const filterItems = document.querySelectorAll("[data-filter-item]");
//const filterFunc = function (selectedValue) {
  //for (let i = 0; i < filterItems.length; i++) {
    //if (selectedValue === "all") {
      //filterItems[i].classList.add("active");
    //} else if (selectedValue === filterItems[i].dataset.category) {
      //filterItems[i].classList.add("active");
    //} else {
      //filterItems[i].classList.remove("active");
    //}
  //}
//};

//let lastClickedBtn = filterBtn[0];
//for (let i = 0; i < filterBtn.length; i++) {
  //filterBtn[i].addEventListener("click", function () {
    //let selectedValue = this.innerText.toLowerCase();
    //selectValue.innerText = this.innerText;
    //filterFunc(selectedValue);
    //lastClickedBtn.classList.remove("active");
    //this.classList.add("active");
    //lastClickedBtn = this;
  //});
//}

'use strict';

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar Toggle Functionality
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
if (sidebarBtn) {
  sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
  });
}

// Testimonials Modal Functionality
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

if (testimonialsItems) {
  testimonialsItems.forEach(item => {
    item.addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
      modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
      testimonialsModalFunc();
    });
  });
}

if (modalCloseBtn) {
  modalCloseBtn.addEventListener("click", testimonialsModalFunc);
}
if (overlay) {
  overlay.addEventListener("click", testimonialsModalFunc);
}

// Filtering: Using clickable filter buttons only
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
if (filterButtons) {
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
}

// Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

if (formInputs) {
  formInputs.forEach(input => {
    input.addEventListener("input", function () {
      if (form.checkValidity()) {
        formBtn.removeAttribute("disabled");
      } else {
        formBtn.setAttribute("disabled", "");
      }
    });
  });
}

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

if (navigationLinks) {
  navigationLinks.forEach((navLink, index) => {
    navLink.addEventListener("click", function () {
      pages.forEach((page, i) => {
        if (this.innerHTML.toLowerCase() === page.dataset.page) {
          page.classList.add("active");
          navigationLinks[i].classList.add("active");
          window.scrollTo(0, 0);
        } else {
          page.classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      });
    });
  });
}

// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', function () {
  const themeCheckbox = document.getElementById('themeToggleCheckbox');
  if (themeCheckbox) {
    themeCheckbox.addEventListener('change', function () {
      document.body.classList.toggle('light-mode', this.checked);
    });
  }
});

// Open Project Details Functionality
function openProjectDetails(projectId) {
  window.location.href = "project-details.html?project=" + projectId;
}
