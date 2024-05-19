/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let convertButton = document.getElementById("convert");
let inputEl = document.getElementById("number");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

let metersToFeet = 3.281;
let litersToGallons = 0.264;
let kilosToPounds = 2.204;

convertButton.addEventListener("click", function() {
    let inputValue = inputEl.value;
    
    lengthEl.textContent = `${inputValue} meters = ${(inputValue * metersToFeet).toFixed(3)} feet`;
    volumeEl.textContent = `${inputValue} liters = ${(inputValue * litersToGallons).toFixed(3)} gallons`;
    massEl.textContent = `${inputValue} kilograms = ${(inputValue * kilosToPounds).toFixed(3)} pounds`;
});
