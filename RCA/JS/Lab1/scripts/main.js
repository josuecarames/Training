// 1. Even or Odd

// let num = parseInt(prompt("Type an integer"));

// const evenOrOdd = function(num) {
//   if (num % 2 == 0) {
//     return "This is an even numer";
//   } else {
//     return "This is an odd number";
//   }
// };

// console.log(evenOrOdd(num));







// 2. Sum numbers from the user

// let num1 = parseInt(prompt("Type the first numer you want to add"));
// let num2 = parseInt(prompt("Type the second numer of your sum"));

// const addTwoNumbers = function(a, b) {
//   return a + b
// };

// console.log(addTwoNumbers(num1, num2))









// 3. A random number from min to max

// function getRandom(min, max) {  
//   return Math.random() * (max - min) + min;
// }

// console.log(getRandom(1, 5));








// 4. A random integer from min to max

// function randomInteger(min, max) {
//   return Math.round(Math.random(parseInt()) * (max - min) + 1);
// }

// console.log(randomInteger(1, 5))







// 5. Uppercase the first character

let str = ToLowerCase()prompt("Type an integer")

let slicedStr = str.slice(0,1);
let capitalSlicedStr = slicedStr.ToUpperCase();

const ucFirst = function(str) {
  return str.toUpperCase(str.slice(0)) + str.slice(1, str.length())
};

console.log(ucFirst(str));

// Write a function ucFirst(str) that returns the string str with the 
// uppercased first character, for instance:


// console.log(ucFirst("dog"));
// console.log(ucFirst("kitten"));








d





// 6. Check for spam

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ 
// or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// let emailString1 = 'buy ViAgRA now';
// let emailString2 = 'free xxxx';
// let emailString3 = 'innocent rabbit';


// console.log(checkSpam(emailString1));
// console.log(checkSpam(emailString2));
// console.log(checkSpam(emailString3));

// 7. Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str 
// and, if it exceeds maxlength, truncates the string to make its length equal 
// to maxlength.

// The result of the function should be the truncated (if needed) string.

// For instance:

// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to tel"
// truncate("Hi everyone!", 20) = "Hi everyone!"


// let string1 = "What I'd like to tell on this topic is:";
// let string2 = "What I'd like to tel";

// 8. Extract the money

// We have a cost in the form "$120". That is: the dollar sign goes first, and 
// then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric 
// value from such string and return it


// 9. The List

// Big Gary's job is to make sure that the club only lets in the "best" class of clientele.
// Prompt the user for:
// - their age
// - their income
// - if they are a celebrity ("yes" or "no")
// - if they are wearing sneakers ("yes" or "no")

// If Big Gary let's you in, he prints: "*nod*"
// If he doesn't let you in, he prints: "You're not on the list."

// You are not allowed in if:
//   - you are under 18 or over 35.
//   - you have an income under 100,000.
//   - you are wearing sneakers.

// Otherwise you are let in. However, there are some exceptions, you will also be let in if:
//   - you are over 16 and a celebrity.
//   - you are over 16 and your income is over 5,000,000.
//   - you are under 25 (and over 18), you have an income over 250K, but are wearing sneakers.

// The test cases are as follows:
// age, money, celeb, shoes - Outcome

// Rare
// 15, 100K, y, n - N
// 16, 100K, y, n - Y
// 16, 4.9M, n, n - N
// 16, 5M, n, n - Y
// 17, 250K, n, y - N
// 25, 250K, n, y - N
// 20, 250K, n, y - Y
// 20, 249K, n, y - N

// Age
// 17, 100K, n, n - N
// 18, 100K, n, n - Y
// 35, 100K, n, n - N
// 34, 100K, n, n - Y

// Income
// 20, 99K, n, n - N
// 20, 100K, n, n - Y

// Shoes
// 20, 100K, n, y - N



// 10. Perfect Change
// Prompt the user for a dollar amount they would like perfect change for. (eg. 100 = $1)
// Write code that intakes the users money and prints to the console perfect change.
// Once the change has been printed in the console the code should stop running.

// Examples:
//    User inputs: 82
//    Console outputs:
//       quarter
//       quarter
//       quarter
//       nickel
//       penny
//       penn