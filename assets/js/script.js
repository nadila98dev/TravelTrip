// script.js

// Get references to elements
const navbar = document.getElementById("navbar");
const menuToggle = document.getElementById("menu-toggle");

// Function to toggle the visibility of the nav links
function toggleNav() {
    navbar.classList.toggle("collapsed");
}

// Event listener for the menu toggle button
menuToggle.addEventListener("click", toggleNav);
