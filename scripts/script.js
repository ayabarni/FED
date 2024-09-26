// JavaScript Document
console.log("hi");

// open
var openButton = document.querySelector("header div:nth-of-type(2) button:nth-of-type(2)");

openButton.addEventListener("click",toggleMenu) ; 
var deNav = document.querySelector("header nav");

function toggleMenu() {  
    
   
    
    deNav.classList.toggle("toonMenu");
}

