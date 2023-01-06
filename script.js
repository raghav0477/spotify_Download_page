// const toggle = document.getElementById("toggle");
// const navbar = document.getElementById("mob-nav");
// const header = document.getElementById("header");
// console.log(navbar);

// document.onclick = function (e) {
//   if (
//     e.target.id !== "header" &&
//     e.target.id !== "toggle" &&
//     e.target.id !== "navbar"
//   ) { 
//     toggle.classList.remove("active");
//     navbar.classList.remove("active");

//     document.body.classList.toggle('lock-scroll');
//   }
// };
// toggle.onclick = function () {
//   toggle.classList.toggle("active");
//   navbar.classList.toggle("active");
// };
// if (document.getElementById('#mob-nav').is(':visible')) {
//   document.getElementById('.site-wrapper').addClass(".lock-scroll");
// } else {
//   document.querySelector('body').removeClass(".lock-scroll");
// }
// function lockScroll() {
//   document.body.classList.toggle('lock-scroll');
// }

const add = document.querySelector(".mobile-nav-icon-menu");
const mobile_nav = document.querySelector(".mobile-nav-menu")
const close = document.querySelector(".mobile-nav-icon-close")

const toogleNavbar = ()=>{
  // alert("kldhfklh")
  mobile_nav.classList.add("active")
}
const removeClass = ()=>{
  mobile_nav.classList.remove("active")
}
console.log(close);
add.addEventListener('click', ()=> toogleNavbar())
close.addEventListener('click', ()=> removeClass())