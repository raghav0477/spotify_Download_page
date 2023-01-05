const toggle = document.getElementById("toggle");
const navbar = document.getElementById("mob-nav");
const header = document.getElementById("header");
console.log(navbar);

document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) { 
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};
toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");

};
// if ($('#mob-nav').is(':visible')) {
//   $('.site-wrapper').addClass("fixed-position");
// } else {
//   $('body').removeClass("fixed-position");
// }
function lockScroll() {
  document.body.classList.toggle('lock-scroll');
}
