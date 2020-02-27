let num = 103.9412

console.log(num.toFixed(3))
console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

//random num btw 0 and 1
console.log(Math.random())

//challenge
let makeGuess = function(guess) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1) + min)
    console.log(randomNum)
    return guess == randomNum
}

console.log(makeGuess(1))