const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const closeMenuButton = document.querySelector(".close-menu");

// Open menu
menuButton.addEventListener("click", () => {
mobileMenu.classList.add("show");

// Prevent page from scrolling
document.body.style.overflow = "hidden";
});

// Close menu
closeMenuButton.addEventListener("click", () => {
mobileMenu.classList.remove("show");

// Allow page scrolling again
document.body.style.overflow = "";
});

// Close menu when any link is clicked
document.querySelectorAll("#mobile-menu a").forEach(link => {
link.addEventListener("click", () => {
mobileMenu.classList.remove("show");
document.body.style.overflow = "";
});
});

