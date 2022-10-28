
function toMicrometer() {
    let inputValue = document.getElementById("inches").value;
    const micro = 25400
    const ans = inputValue * micro
    document.getElementById("output").innerHTML = ans;
    document.getElementById("output_unit").innerHTML = "Micrometer";
}
function toMillimeter() {
    let inputValue = document.getElementById("inches").value;
    const milli = 25.4
    const ans = inputValue * milli
    document.getElementById("output").innerHTML = ans;
    document.getElementById("output_unit").innerHTML = "Millimeter";
}
function toCentimeter() {
    let inputValue = document.getElementById("inches").value;
    const centi = 2.54
    const ans = inputValue * centi
    document.getElementById("output").innerHTML = ans;
    document.getElementById("output_unit").innerHTML = "Centimeter";
}
function toMeter() {
    let inputValue = document.getElementById("inches").value;
    const meter = 39.37
    const ans = inputValue * meter
    document.getElementById("output").innerHTML = ans;
    document.getElementById("output_unit").innerHTML = "Meter";
}
function toKilometer() {
    let inputValue = document.getElementById("inches").value;
    const kilo = 39370
    const ans = inputValue * kilo
    document.getElementById("output").innerHTML = ans;
    document.getElementById("output_unit").innerHTML = "Kilometer";
}
