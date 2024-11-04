// JavaScript Document


// open nav in index pagina
var openButton = document.getElementById("menuButton");

openButton.addEventListener("click", toggleIndexMenu);
var deNav = document.querySelector(".index-Nav");

function toggleIndexMenu() {

    deNav.classList.toggle("toonMenu");

    openButton.classList.toggle("navOpen");
}


// kerst butto thema


var kerstButton = document.querySelector("main>button");
var body = document.querySelector("body");
var KerstAudio = document.querySelector("audio");

let playedAudio = false;


kerstButton.addEventListener("click", toggleKerstthema);


function toggleKerstthema() {
    body.classList.toggle("kerstTheme")
    kerstButton.classList.toggle("dance")
    
    if (playedAudio == false) {
        KerstAudio.play();
        playedAudio = true;


    } else { KerstAudio.pause(); 
        playedAudio = false;
    }


}

// scroll animatie

// Selecteer alle elementen met de klasse "tile" en sla ze op in een array-achtige structuur genaamd `elementsArray`.
let elementsArray = document.querySelectorAll(".Blok");

// Log de `elementsArray` naar de console om te controleren welke elementen zijn geselecteerd.
console.log(elementsArray);

// Voeg een 'scroll' eventlistener toe aan het window-object om de `fadeIn`-functie aan te roepen wanneer de gebruiker scrolt.
window.addEventListener('scroll', fadeIn);

// Definieer de functie `fadeIn`, die bepaalt of elk element in beeld is en een klasse toevoegt of verwijdert.
function fadeIn() {
    // Loop door alle elementen in de `elementsArray`.
    for (var i = 0; i < elementsArray.length; i++) {
        // Haal het huidige element op.
        var element = elementsArray[i];
        
        // Bereken de afstand van de bovenkant van het element tot de onderkant van het viewport-venster, minus een kleine marge van 20 pixels.
        var distInView = element.getBoundingClientRect().top - window.innerHeight + 150;
        

        if (distInView < 0) {
            element.classList.add("Blok-inView");
            
        } else {
            element.classList.remove("Blok-inView");
        }



    } }

fadeIn()

// news carousel

var prevButton = document.querySelector('main article button:first-of-type');
var nextButton = document.querySelector('main article button:last-of-type');
var carousel = document.querySelector('main article ul');
const scrollAmount = 500; // 500px 

nextButton.addEventListener('click', goToNextElement);
function goToNextElement() {
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth' // Zorgt voor vloeiend scrollen
    });
}

prevButton.addEventListener('click', goToPrevElement);
function goToPrevElement() {
    carousel.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth' // Zorgt voor vloeiend scrollen
    });
}