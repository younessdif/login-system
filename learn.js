"use scrict";
let Box = document.querySelector("[data-box]"),
  pup = document.querySelectorAll("[data-pup]"),
  overley = document.querySelector("[data-overley]");

for (let i of pup) {
  i.addEventListener("click", function() {
    Box.classList.toggle("active");
    overley.classList.toggle("active");
  });
}
