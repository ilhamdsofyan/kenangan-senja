// Toggle Navbar Class Active
const navbarNav = document.querySelector(".navbar-nav");

const hamburgerMenu = document.querySelector("#hamburger-menu");

// On hamburger menu clicked
hamburgerMenu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Outside menu click disable menu
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
