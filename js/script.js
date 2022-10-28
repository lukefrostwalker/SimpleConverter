
function toMicrometer() {
    let inputValue = document.getElementById("inches").value;
    document.getElementById("output").innerHTML = inputValue * 25400;
    document.getElementById("output_unit").innerHTML = "Micrometer";
}
function toMillimeter() {
    let inputValue = document.getElementById("inches").value;
    document.getElementById("output").innerHTML = inputValue * 25.4;
    document.getElementById("output_unit").innerHTML = "Millimeter";
}
function toCentimeter() {
    let inputValue = document.getElementById("inches").value;
    document.getElementById("output").innerHTML = inputValue * 2.54;
    document.getElementById("output_unit").innerHTML = "Centimeter";
}
function toMeter() {
    let inputValue = document.getElementById("inches").value;
    document.getElementById("output").innerHTML = inputValue / 39.37;
    document.getElementById("output_unit").innerHTML = "Meter";
}
function toKilometer() {
    let inputValue = document.getElementById("inches").value;
    document.getElementById("output").innerHTML = inputValue / 39370;
    document.getElementById("output_unit").innerHTML = "Kilometer";
}
@media