var menu = document.querySelector("header");
var menu_logo = document.querySelector("#menu-logo");
var close_logo = document.querySelector("#close-logo");
var menu_select = document.querySelector(".nav-section")

menu.addEventListener("click", function(){
    menu_select.classList.toggle("invisible");
    close_logo.classList.toggle("invisible");
    menu_logo.classList.toggle("invisible");
})

let navlinks = document.querySelectorAll("li");
let sections = document.querySelectorAll("section");