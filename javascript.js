"ure scrict";
let min = document.querySelector(".min");
let input = document.querySelector(".input");
let plus = document.querySelector(".plus");

const swiper = new swiper(".swiper", {
  loop: true,
  efect: "fade",
  pagination: {
    el: ".swiper-pagintion",
    clickable: true
  },
  navigator: {
    nextEl: ".swiper-button-next",
    prevEl: "swiper-button-prev"
  }
});
