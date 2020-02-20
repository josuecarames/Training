// Function - input (argument(s)), code, output (return value)



let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
console.log(value)



//challenge

let convertFahrenheitToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9
    return celsius
}

let valueOne = convertFahrenheitToCelsius(32)
let valueTwo = convertFahrenheitToCelsius(68)

console.log(valueOne)
console.log(valueTwo)