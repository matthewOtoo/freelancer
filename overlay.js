// menu.js
document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu_icon");
  const nav = document.querySelector("nav");

  if (menuIcon && nav) {
    menuIcon.addEventListener("click", function () {
      // Only toggle if we are in mobile view
      if (window.innerWidth < 1200) {
        nav.classList.toggle("nav_active");
      }
    });
  }
});
