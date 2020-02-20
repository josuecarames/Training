// Lexical Scope (Static Scope)
// Global Scope - Defined outside all code blocks 
// Local Scope - Defined inside a code blocks

let name = 'Josue'

if (true) {
    let name = 'Mike'
    if (true) {
        name = 'Jen'
        console.log(name)
    }
}

if (true) {
    console.log(name)
}