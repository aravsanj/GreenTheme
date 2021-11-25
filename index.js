const toggleButton = document.getElementById("toggle-button")
const navbarLinks = document.getElementsByClassName("navbar-links-container")[0]

toggleButton.addEventListener("click", () => toggle())

function toggle() {
  navbarLinks.classList.toggle("active")
}
