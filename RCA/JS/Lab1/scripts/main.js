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

// --------------------------------------------------------------------------------------

// 2. Sum numbers from the user

// let num1 = parseInt(prompt("Type the first numer you want to add"));
// let num2 = parseInt(prompt("Type the second numer of your sum"));

// const addTwoNumbers = function(a, b) {
//   return a + b
// };

// console.log(addTwoNumbers(num1, num2))

// --------------------------------------------------------------------------------------

// 3. A random number from min to max

// function getRandom(min, max) {  
//   return Math.random() * (max - min) + min;
// }

// console.log(getRandom(1, 5));

// --------------------------------------------------------------------------------------

// 4. A random integer from min to max

// function randomInteger(min, max) {
//   return Math.round(Math.random(parseInt()) * (max - min) + 1);
// }

// console.log(randomInteger(1, 5))

// --------------------------------------------------------------------------------------

// 5. Uppercase the first character

// let str = prompt("Type your name");

// let lowerStr = str.toLowerCase();
// let slicedStr = str.slice(0,1);
// let capitalSlicedStr = slicedStr.toUpperCase();
// let remainingStr = lowerStr.slice(1, str.length);

// const ucFirst = function(str) {
//   return capitalSlicedStr + remainingStr;
// };

// alert(ucFirst(str));

// --------------------------------------------------------------------------------------

// 6. Check for spam

// let str = "buy ViAgRA now";
// let strIns = str.toLowerCase();

// const searchStr = function() {
//   if (strIns.search("xxx") >= 0) {
//     return "true"; 
//   } else if (strIns.search("viagra") >= 0){
//     return "true";
//   } else {
//     return "false";
//   }
// }

// console.log(searchStr(str));

// --------------------------------------------------------------------------------------

// 7. Truncate the text

// let str = "What I'd like to tell on this topic is:";

// const truncate = function(str, maxlength) {
//   return str.slice(0, maxlength); 
// }

// console.log(truncate(str, 20));

// --------------------------------------------------------------------------------------

// 8. Extract the money

// let str = "$120";

// const extractCurrencyValue = function() {
//   return str.slice(1, str.length);
// }

// console.log(extractCurrencyValue(str));

// --------------------------------------------------------------------------------------

// 9. The List

// let user = {
//     age: window.prompt("How old are you?", "Type it in numbers"),
//     income: window.prompt("What is your income?", "$"),
//     vip: window.prompt("Are you a celebrity?", "Yes or No"),
//     sneakers: window.prompt("Are you wearing sneakers?", "Yes or No")
// }
// let validAge = (user.age >= 18) && (user.age <= 35);
// let validIncome = (user.income >= 100000);
// let validVip = (user.vip == "yes");
// let validAttire = (user.sneakers == "no");

// let granted = function () {
//     if (((validAge) && (validIncome) && (validVip) && (validAttire))) {
//         return "Big Gary: *nod*";
//     } else {
//         return "Big Gary: You're not on the list";
//     }
// }
// console.log(granted(user));

// --------------------------------------------------------------------------------------

// 10. Perfect Change

// let q = parseFloat(prompt("Type total amount in numbers"));
// let q = 3.76;
// let amount = parseFloat(q);

let dollar = 1;
let quarter = 0.25;
let dime = 0.10;
let nickel = 0.05;
let penny = 0.01;

const change = function (amount) {
    let a = amount.toFixed(2);
    console.log(a);
    while (a >= dollar) {
        console.log("dollar");
        a -= dollar;
        console.log(a);
        while (a >= quarter && a <= dollar) {    
            console.log("quarter");
            a -= quarter;
            console.log(a);
            while (a >= dime && a <= quarter) {
                console.log("dime");
                a -= dime;
                console.log(a);
                while (a >= nickel && a <= dime) {
                    console.log("nickel");
                    a -= nickel;
                    console.log(a);
                    while (a >= penny && a <= dime)
                        console.log("penny");
                        a -= penny;
                        console.log(a);
                    }    
                }
            }
        }
    }

console.log(change(3.76));