// Global scope (convertFahrenheitToCelsius, TempOne, tempTwo)
    // Local scope (fahrenheit, celsius)


let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let valueOne = convertFahrenheitToCelsius(32)
let valueTwo = convertFahrenheitToCelsius(68)

console.log(valueOne)
console.log(valueTwo)