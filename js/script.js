const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const closeMenuButton = document.querySelector(".close-menu");

// Open menu
menuButton.addEventListener("click", () => {
mobileMenu.classList.add("show");
});

// Close menu
closeMenuButton.addEventListener("click", () => {
mobileMenu.classList.remove("show");
});

