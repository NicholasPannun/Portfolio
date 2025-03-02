
// Preserve existing JavaScript

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeSwitch.checked = true;
  }

  themeSwitch.addEventListener("change", () => {
    if (themeSwitch.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  });
});

// Read More Functionality
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", () => {
    const projectDetails = document.getElementById("project-details");
    projectDetails.classList.toggle("hidden");
  });
});

// Contact Form Validation
document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert("Message sent successfully!");
});

// Download CV Functionality
document.getElementById("download-cv").addEventListener("click", function() {
  window.location.href = "path-to-cv.pdf";
});
