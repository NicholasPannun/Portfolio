
// Existing JavaScript remains untouched

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const themeSwitch = document.getElementById("theme-switch");
  const body = document.body;

  // Check local storage for saved theme
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

// "Read More" Functionality
document.querySelectorAll(".read-more").forEach(button => {
  button.addEventListener("click", (event) => {
    const projectDetails = document.getElementById("project-details");
    projectDetails.classList.remove("hidden");
    projectDetails.innerHTML = `
      <img src="project-image.jpg" alt="Project Image">
      <h2>Project Title</h2>
      <p>Languages Used: JavaScript, HTML, CSS</p>
      <p>Detailed project description goes here...</p>
      <a href="live-project-link" target="_blank">View Live Project</a>
    `;
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
  window.location.href = "path-to-cv.pdf"; // Replace with actual CV file path
});
