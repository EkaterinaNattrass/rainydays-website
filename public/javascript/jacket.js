
function openDetails() {
    let popUpMessage = document.getElementById("pop-up-details");
    popUpMessage.classList.add("opened-container");
}

function closeDetails() {
    let popUpMessage = document.getElementById("pop-up-details");
    popUpMessage.classList.remove("opened-container");   
}

function openSize() {
    let popUpMessage = document.getElementById("pop-up-size");
    popUpMessage.classList.add("opened-container");
}

function closeSize() {
    let popUpMessage = document.getElementById("pop-up-size");
    popUpMessage.classList.remove("opened-container");   
}

function openCare() {
    let popUpMessage = document.getElementById("pop-up-care");
    popUpMessage.classList.add("opened-container");
}

function closeCare() {
    let popUpMessage = document.getElementById("pop-up-care");
    popUpMessage.classList.remove("opened-container");   
}

let slideIndex = 1;
showSlides (slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let x = window.matchMedia("(max-width:700px)");
    if (x.matches) {
    if (n> slides.length) {slideIndex=1}
    if (n<1) {slideIndex=slides.length}
    for (i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }   
    slides[slideIndex-1].style.display = "block";
}
 else {slides.style.display = "block";}
}