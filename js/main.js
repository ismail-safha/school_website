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
