// this is undefined

let name

console.log(name)


// this is null

let name = 'asdf'

console.log(name)


// To verify if a variable has been defined, below

if (name === undefined) {
    console.log('Please define your variable')
} else {
    console.log(name)
}

// Undefine for function arguments

let square = function (num) {
    console.log(num)
}

square()

// Undefined as function return default value

let result = square()
console.log(result)

// by using null as assigned value to clear previously used values

let age = 27

age = null

console.log(age)
 
