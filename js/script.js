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