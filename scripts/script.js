// JavaScript Document
console.log("hi");

// open
var openButton = document.getElementById("fullSize-menuButton ");
var deBody = document.getElementById('index')

openButton.addEventListener("click",toggleMenu) ; 
var deNav = document.querySelector("header nav");

function toggleMenu() {  
    deNav.classList.toggle("toonMenu");
    deBody.classList.toggle("navOpen")
}


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