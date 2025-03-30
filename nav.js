"ure scrict";
let links = document.querySelectorAll(".link");
let line = document.querySelector(".line");

for (const link of links) {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // الحصول على عرض ومسافة العنصر
    let widthLink = link.clientWidth;
    let offsetLink = link.offsetLeft;

    // تحديث عرض وتحريك الخط
    line.style.width = `${widthLink}px`;
    line.style.transform = `translateX(${offsetLink}px)`;
  });
}
