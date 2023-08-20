// <!-- ***********start  add class active *******-->

const navLinks = document.querySelectorAll(".dropdown_item");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Remove 'active' class from all navigation links
    navLinks.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked navigation link
    this.classList.add("active");
  });
});

// <!-- ***********End add class active *******-->
// <!-- ***********start hero slider *******-->

const swiper = new Swiper(".sliderbox", {
  loop: true,
  effect: "fade",
  autoHeight: true,
  // auto paly
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
let navbar = document.querySelector(".navbar");

// let searchBoxCancel = document.querySelector(".search-box .bx-x");

// sidebar open close js code
let navLinkss = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinkss.style.left = "0";
};
menuCloseBtn.onclick = function () {
  navLinkss.style.left = "-100%";
};

// sidebar submenu open close js code
// let htmlcssArrow = document.querySelector(".htmlcss-arrow");
// htmlcssArrow.onclick = function () {
//   navLinks.classList.toggle("show1");
// };

// let moreArrow = document.querySelector(".more-arrow");
// moreArrow.onclick = function () {
//   navLinks.classList.toggle("show2");
// };
// let jsArrow = document.querySelector(".js-arrow");
// jsArrow.onclick = function () {
//   navLinks.classList.toggle("show3");
// };

let navLinksSub = document.querySelector(".open_one_test");
let navLinksSub_tow = document.querySelector(".open_tow_test");

let htmlcssArrow = document.querySelector(".open_sub_one");
htmlcssArrow.onclick = function () {
  navLinksSub.classList.toggle("open_one");
};

let clik = document.querySelector(".clik");
clik.onclick = function () {
  navLinksSub_tow.classList.toggle("open_one");
  console.log("hi");
};

// =======
