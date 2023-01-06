
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