let myBook = {
    title: "1984",
    author: "George Orwell",
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = "Animal Farm"

console.log(`${myBook.title} by ${myBook.author}`)

// challenge is

let person = {
    name: "Josue",
    age: 32,
    location: "Spain" 
} 

console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} years old and lives in ${person.location}`)