// JavaScript Document
console.log("hi");

// open
var openButton = document.getElementById("menuButton");
var deBody = document.getElementById('index')

openButton.addEventListener("click",toggleMenu) ; 
var deNav = document.querySelector("header nav");

function toggleMenu() {  
    deNav.classList.toggle("toonMenu");
    deBody.classList.toggle("navOpen")
    openButton.classList.toggle("navOpen")
}


// function toggleMenu() {
//     const menuButton = document.getElementById('menuButton');
//     menuButton.classList.toggle('open');
// }


// TODO tweede pagina menu

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.hamburger-btn');
    const menu = document.querySelector('nav.menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('open'); // Open of sluit het menu
        menuBtn.classList.toggle('active');
    });
});

var menuBtn = document.querySelector(".hamburger-btn")
var menu = document.querySelector("nav.menu")

menuBtn.addEventListener("click", function() {
menu.classList.toggle("open")} )



// news carousel

var prevButton = document.querySelector('main article button:first-of-type');
var nextButton = document.querySelector('main article button:last-of-type');
var carousel = document.querySelector('main article ul');
const scrollAmount = 500; // 500px 

nextButton.addEventListener('click',goToNextElement );
function goToNextElement(){
        carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Zorgt voor vloeiend scrollen
    });
}

prevButton.addEventListener('click',goToPrevElement );
function goToPrevElement(){
        carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' // Zorgt voor vloeiend scrollen
    });
}