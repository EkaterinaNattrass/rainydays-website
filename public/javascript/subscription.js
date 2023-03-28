const input = document.getElementById("subscribe");
const btn = document.getElementById("subscribe_submit");
const error = document.getElementById("subscribe_error");
const popUp = document.getElementById("subscribe_successful");

function validateInput() {
    if (validateEmail(input.value) === true) {
        error.style.display = "none";
        popUp.style.display = "block";
        input.value = "";
    }
    else {
        error.style.display = "block"
    }
}

function validateEmail(input) {
    const regEx = /\S+@\S+\.\S+/;
    const emailValid = regEx.test(input);
    return emailValid;
}

function closeBox() {
    popUp.style.display = "none";
}

function enterInput(input) {
    input.style.background = "#D6D58E"
}