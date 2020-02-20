let temp = 55

// Logical And Operator - Ture if both sides are true. False otherwise
// Logical Or Operator - True if at least one is true

if (temp >= 72 && temp <= 75) {
    console.log('It is pretty nice out!')
} else if  (temp <=0 || temp >= 120) {
    console.log('Do not go outside!')
} else {
    console.log('Do like you want!')
}

let isGuestOneVegan = false
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Make sure to offer up only vegan options')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Make sure to offer up some vegan options')
} else {
    console.log('Offer up anything on the menu')
}