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

// Toggle shopping cart
const cartButton = document.querySelector("#shopping-cart-button");
const shoppingCart = document.querySelector(".shopping-cart");

cartButton.onclick = (e) => {
  e.preventDefault();

  shoppingCart.classList.toggle("active");
};

// Outside menu click disable menu
document.addEventListener("click", (e) => {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!navbarSearch.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingCart.contains(e.target) && !cartButton.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
setTimeout(() => {
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const productDetailButtons = document.querySelectorAll(
    ".product-detail-button"
  );
  const closeModalButton = document.querySelector(".modal .close-icon");

  productDetailButtons.forEach((productDetailButton) => {
    productDetailButton.onclick = (e) => {
      e.preventDefault();

      itemDetailModal.style.display = "flex";
    };
  });

  closeModalButton.onclick = (e) => {
    e.preventDefault();

    itemDetailModal.style.display = "none";
  };

  window.onclick = (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = "none";
    }
  };
}, 100);
