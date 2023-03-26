let jacketImg = document.getElementsByClassName("jacketImg");
let zoomIn = document.getElementById("zoomIn");
let zoomOut = document.getElementById("zoomOut");

zoomIn.onclick = function () {
    
    jacketImg.classList.add("fullsize");
}

zoomOut.onclick = function () {
    jacketImg.classList.remove("fullsize");
    jacketImg.classList.add("jacketImg");
}