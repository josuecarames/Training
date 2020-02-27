let name = "Josue Carames "

//Length property

console.log(name.length)

//Convert to upper case

console.log(name.toUpperCase())

// Convert to lower case

console.log(name.toLowerCase())

// Includes method

let password = "abc123passord098"

console.log(password.includes("password"))

// Trim 

console.log(name.trim())

// Challenge

//returns true or false (if length is > than 8 and does not contain the word password)

let isValidPassword = function(password) {
    if (password.length > 8 && !password.includes("password")) {
        return ("This password is valid")
    } else {
        return ("Please try a longer and more secure password")
    }
}

let isValidPassword = function(password) {
    return password.length > 8 && !password.includes("password")
}

console.log(isValidPassword("abc123)(&*(Y@UHOND123087961n{)"))
console.log(isValidPassword("asdf"))
console.log(isValidPassword("asdfwerpasswordasdfw"))