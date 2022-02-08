// number multiply

// var number = myNumber(3,4);

// document.getElementById('demo').innerHTML =number;

// function myNumber(a,b){
//   return a * b;
// }


// convert Fahrenheit to Celsius
//(32°F − 32) × 5/9 = 0°C

function FahrenheitToCelsius(f){
    return (5/9) * (f -32 ) ;
}


document.getElementById('demo').innerHTML = "The temperature is:"+ FahrenheitToCelsius(77) + " Celsius";