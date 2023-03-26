const form  = document.getElementById("shipping-form");

const firstName = document.getElementById("name");
const firstNameError = document.getElementById("name-error");

const lastName = document.getElementById("surname");
const lastNameError = document.getElementById("surname-error");

const phone = document.getElementById("phone");
const phoneError = document.getElementById("telephone-error");

const email = document.getElementById("email");
const emailError = document.getElementById("email-error");

const address = document.getElementById("address");
const addressError = document.getElementById("address-error");

const city = document.getElementById("city");
const cityError = document.getElementById("city-error");

function validateForm () {

    event.preventDefault() ;

    if (validateLength(firstName.value, 0)) {
        firstNameError.style.display = "none";}
    else {firstNameError.style.display = "block"}

    if (validateLength(lastName.value, 0)) {
        lastNameError.style.display = "none";}
    else {lastNameError.style.display = "block"}

    if (validatePhone(phone.value) === true) {
        phoneError.style.display = "none";}
    else {phoneError.style.display = "block"}

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";}
    else {emailError.style.display = "block"}

    if (validateLength(address.value, 0)) {
        addressError.style.display = "none";}
    else {addressError.style.display = "block"}

    if (validateLength(city.value, 0)) {
        cityError.style.display = "none";}
    else {cityError.style.display = "block"}
    
}

function validateLength (value,number) {
    if (value.trim().length > number) {
        return true;
    }
    else { return false; }
}

function validatePhone(phone) {
    const regEx = /^\d{10}$/;
    const phoneValid = regEx.test(phone);
    return phoneValid
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailValid = regEx.test(email);
    return emailValid;
}

