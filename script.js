
const add = document.querySelector(".mobile-nav-icon-menu");
const mobile_nav = document.querySelector(".mobile-nav-menu")
const close = document.querySelector(".mobile-nav-icon-close")
const body = document.querySelector("body")
console.log(body);
const toogleNavbar = ()=>{
  mobile_nav.classList.add("active")
  body.classList.add("fixed-position");
}
const removeClass = ()=>{
  mobile_nav.classList.remove("active")
  body.classList.remove("fixed-position");
}
console.log(close);
add.addEventListener('click', ()=> toogleNavbar())
close.addEventListener('click', ()=> removeClass())
