function converterTemperatura() {
    var temperatura = parseFloat(document.getElementById("temperatura").value);
    var unidadeOrigem = document.getElementById("unidadeOrigem").value;

    var celsius, fahrenheit, kelvin;

    if (unidadeOrigem === "celsius") {
        celsius = temperatura;
        fahrenheit = (temperatura * 9/5) + 32;
        kelvin = temperatura + 273.15;
    } else if (unidadeOrigem === "fahrenheit") {
        celsius = (temperatura - 32) * 5/9;
        fahrenheit = temperatura;
        kelvin = (temperatura - 32) * 5/9 + 273.15;
    } else {
        celsius = temperatura - 273.15;
        fahrenheit = (temperatura - 273.15) * 9/5 + 32;
        kelvin = temperatura;
    }

    celsius = celsius.toFixed(2);
    fahrenheit = fahrenheit.toFixed(2);
    kelvin = kelvin.toFixed(2);

    document.getElementById("celsius").textContent = celsius + " °C";
    document.getElementById("fahrenheit").textContent = fahrenheit + " °F";
    document.getElementById("kelvin").textContent = kelvin + " K";

    atualizarFundoPagina(celsius);
}

function atualizarFundoPagina(celsius) {
    var cor;

    if (celsius < 10) {
        cor = "#0000FF"; 
    } else if (celsius > 30) {
        cor = "#FF0000"; 
    } else {
        cor = "#FFFF00"; 
    }

    document.body.style.backgroundColor = cor;
}
