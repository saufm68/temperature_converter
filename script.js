/*Part 1

var temperatureInFahr = parseInt(prompt("Enter a temperature in degrees Fahrenheit"));

while ( isNaN(temperatureInFahr) ) {

    var temperatureInFahr = prompt("Please enter a number");

}

temperatureInKelvin = (5/9) *(temperatureInFahr - 32) + 273;
temperatureInCelsius = (5/9) * (temperatureInFahr - 32);

console.log(`The temperature that you enterd in Kelvin is: ${temperatureInKelvin}.`);
console.log(`The temperature that you enterd in Celsius is: ${temperatureInCelsius}.`);
*/


//Part 2, 3, 4, 5, 6
var clothes = [
 'nothing',
 'swimsuit',
 'shorts and shirt',
 'sweater',
 'sweater + jacket',
 'heavy jacket',
 'heavy jacket and toe warmers',
 'dont go outside if you want to live'
];

var temps = [];
var tempsUnits = ["°C","°F","K"];
var celsiusTemp;

var name = prompt("Enter your name:");
var temperature = parseInt(prompt("Enter a value for the temperature"));

while ( isNaN(temperature) ) {

    var temperature = parseInt(prompt("Please enter a number")) ;

}

var temperatureUnit = prompt("Please pick one of the 3 units: Fahrenheit/Celsius/Kelvin");

if (temperatureUnit === "Fahrenheit") {
    temperatureFromFToC = (5/9) * (temperature - 32);
    temperatureFromFToK = (5/9) * (temperature - 32) +273;

    celsiusTemp = temperatureFromFToC;

    temps.push(temperatureFromFToC);
    temps.push(temperature);
    temps.push(temperatureFromFToK);

    for (var i = 0; i < 3; i++){
        console.log ( `temperature = ${temps[i]}${tempsUnits[i]}`);
    }
}

else if (temperatureUnit === "Celsius") {

    temperatureFromCToF = (9/5)*temperature + 32;
    temperatureFromCToK = temperature + 273;

    celsiusTemp = temperature;

    temps.push(temperature);
    temps.push(temperatureFromCToF);
    temps.push(temperatureFromCToK);

    for (var i = 0; i < 3; i++){
        console.log ( `temperature = ${temps[i]}${tempsUnits[i]}`);
    }
}

else if (temperatureUnit === "Kelvin") {

    temperatureFromKToF = (9/5)*(temperature - 273) + 32;
    temperatureFromKToC = temperature - 273;

    celsiusTemp = temperatureFromKToC;

    temps.push(temperatureFromKToC);
    temps.push(temperatureFromKToF);
    temps.push(temperature);

    for (var i = 0; i < 3; i++){
        console.log ( `temperature = ${temps[i]}${tempsUnits[i]}`);
    }
}

else {
    console.log("Error!!!");
}


if (celsiusTemp < 0) {
    console.log(`ooh it's cold out ${name}, you should wear a ${clothes[5]} or a ${clothes[6]}.`);
} else if ( celsiusTemp > 40 && celsiusTemp <= 100 ) {
    console.log(`ooh it's hot out ${name}, I advise you to wear ${clothes[2]}.`);
} else if ( celsiusTemp > 100) {
    console.log(`your literally boiling ${saufi}, you should wear ${clothes[0]} or just ${clothes[8]}.`);
}










