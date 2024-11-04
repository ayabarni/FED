// open nav in jobs pagina
var jobsMenuButton = document.querySelector(".hamburger-btn");

jobsMenuButton.addEventListener("click",toggleJobsMenu);
var jobsNav = document.querySelector(".jobs-Nav");

function toggleJobsMenu() {
    
    jobsNav.classList.toggle("jobsmenu");
    jobsMenuButton.classList.toggle("jobsmenuOpen");
}

// https://chatgpt.com/c/672753ba-8e94-8009-b59d-6f87c4d2623a

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
        var distInView = element.getBoundingClientRect().top - window.innerHeight + 40;
        
        if (distInView < 0) {
            element.classList.add("Blok-inView");
            
        } else {
            element.classList.remove("Blok-inView");
        }



    } }

fadeIn()
