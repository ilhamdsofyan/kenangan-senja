// On hamburger menu clicked
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = (e) => {
  e.preventDefault();

  navbarNav.classList.toggle("active");
};

// Toggle search form
const navbarSearch = document.querySelector("#search-button");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

navbarSearch.onclick = (e) => {
  e.preventDefault();

  searchForm.classList.toggle("active");
  searchBox.focus();
};

// Outside menu click disable menu
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!navbarSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
