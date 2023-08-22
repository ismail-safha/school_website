// <!-- ***********start  add class active in header *******-->

// const navLinks = document.querySelectorAll(".dropdown_item");

// navLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     // Remove 'active' class from all navigation links
//     navLinks.forEach((link) => link.classList.remove("active"));

//     // Add 'active' class to the clicked navigation link
//     this.classList.add("active");
//   });
// });

// <!-- ***********End add class active *******-->
// <!-- ***********start hero slider *******-->

const swiper = new Swiper(".sliderbox", {
  loop: true,
  effect: "fade",
  autoHeight: true,
  //  auto paly,
  autoplay: {
    delay: 5000,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// <!-- ***********end hero slider *******-->

// search-box open close js code

// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
// let navLinkss = document.querySelector(".nav-links");
// let menuOpenBtn = document.querySelector(".navbar .bx-menu");
// let menuCloseBtn = document.querySelector(".nav-links .bx-x");
// menuOpenBtn.onclick = function () {
//   navLinkss.style.left = "0";
// };
// menuCloseBtn.onclick = function () {
//   navLinkss.style.left = "-100%";
// };

// start responsive sub
// document.addEventListener("DOMContentLoaded", function () {
//   const openClickIcons = document.querySelectorAll(".open_click");

//   openClickIcons.forEach((icon) => {
//     icon.addEventListener("click", function () {
//       const nestedUl = icon.nextElementSibling; // Assuming the <ul> follows the <i>
//       nestedUl.classList.toggle("active");
//     });
//   });
// });

// end responsive sub

// =======
// ====
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownItems = document.querySelectorAll(".dropdown_item.sub");

//   dropdownItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//       var clickedDropdownMenu = this.querySelector(".dropdown-menu");

//       // Check if the clicked dropdown menu is already active
//       var isActive = clickedDropdownMenu.classList.contains("active");

//       // Hide all dropdown menus
//       var allDropdownMenus = document.querySelectorAll(".dropdown-menu");
//       allDropdownMenus.forEach(function (menu) {
//         menu.classList.remove("active");
//       });

//       // Show the clicked dropdown menu only if it was not active
//       if (!isActive) {
//         clickedDropdownMenu.classList.add("active");
//       }
//     });
//   });

//   var submenuItems = document.querySelectorAll(".dropdown-menu a");

//   submenuItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//       // Remove "active" class from all submenu items
//       submenuItems.forEach(function (subitem) {
//         subitem.classList.remove("active");
//       });

//       // Add "active" class to the clicked submenu item
//       this.classList.add("active");
//     });
//   });
// });
// ====

// document.addEventListener("DOMContentLoaded", function () {
//   var dropdownItems = document.querySelectorAll(".dropdown_item.sub");

//   dropdownItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//       var clickedDropdownMenu = this.querySelector(".dropdown-menu");

//       // Check if the clicked dropdown menu is already active
//       var isActive = clickedDropdownMenu.classList.contains("active");

//       // Hide all dropdown menus
//       var allDropdownMenus = document.querySelectorAll(".dropdown-menu");
//       allDropdownMenus.forEach(function (menu) {
//         menu.classList.remove("active");
//       });

//       // Show the clicked dropdown menu only if it was not active
//       if (!isActive) {
//         clickedDropdownMenu.classList.add("active");
//       }
//     });
//   });

//   var submenuItems = document.querySelectorAll(".dropdown-menu a  ul");

//   submenuItems.forEach(function (item) {
//     item.addEventListener("click", function (event) {
//       // Remove "active" class from all submenu items
//       submenuItems.forEach(function (subitem) {
//         subitem.classList.remove("active");
//       });

//       // Add "active" class to the clicked submenu item
//       this.classList.add("active");
//     });
//   });

//   // Add a click event listener to the entire document
//   document.addEventListener("click", function (event) {
//     // Check if the clicked element is inside a dropdown
//     var isInsideDropdown = event.target.closest(".dropdown_item.sub");

//     // If not, hide all dropdown menus
//     if (!isInsideDropdown) {
//       var allDropdownMenus = document.querySelectorAll(".dropdown-menu");
//       allDropdownMenus.forEach(function (menu) {
//         menu.classList.remove("active");
//       });
//     }
//   });
// });

-console.log("hi");

const dropdownItems = document.querySelectorAll(".sub");

// Add event listeners to show/hide dropdown menus
dropdownItems.forEach((dropdownItem) => {
  const link = dropdownItem.querySelector("a");
  const dropdownMenu = dropdownItem.querySelector(".dropdown-menu");

  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    dropdownMenu.classList.toggle("show");
  });

  // Close dropdowns when clicking outside
  window.addEventListener("click", (event) => {
    if (!dropdownItem.contains(event.target)) {
      dropdownMenu.classList.remove("show");
    }
  });
});
