// Function in JS 

// Function Definition (telling js)

// Example:- v

// function funcName() {
//     // do something
// }

// Function calling(using the function)
// funcName(); // calling the function

// function hello() {
//     console.log("Hello, World!");
// }

// hello();

// function print1to5() {
//     for(let i=1; i<=5; i++) {
//         console.log(i);
//     }
// }
// print1to5();

// function isAdult () {
//     let age = 18;
//     if(age >= 18) {
//         console.log("You are an adult");
//     } else {
//         console.log("You are not an adult");
//     }
// }
// isAdult();


// function printPoem() {
//     console.log("Roses are red, violets are blue, I love JavaScript, it's fun to do.");
// }
// printPoem(); // calling the function

// practices QS 

// create a function to roll a dice & always display the value of the dice (1 to 5  ).

//  function rollDice() {
//     let diceValue = Math.floor(Math.random() * 5) + 1;
//     console.log(`You rolled a ${diceValue}`);
//  }
//  rollDice(); // calling the function

// --------------------------------------------------------
// --------------------------------------------------------

// function with Arguments 

// value we pass to the function 

// function funcName(arg1,arg2..) {
//     // do something 
// }

// function printName(name,age) {
//     console.log(`${name}'s age is ${age}`);
// }

// printName("Tanishq",19);


// Practice qs 

// create a function that give us the average of 3 numbers.

// function sum(a,b) {
//     return a+b;
// }

// function calcAvg(a, b, c) {
//     let sum = a + b + c;
//     let avg = sum / 3;
// }

// example of function with arguments and return value

// 1). console.log(sum(3, 4));

// 2). console.log(sum(sum(1, 2), 3)); //6 

// function isAdult(age) {
//     if(age >= 18) {
//         return "adult";
//     } else {
//         return "not an adult";
//     }
// }

// calcAvg(2,4,6);

// create a function that the multiplication table of a number.

//  function printTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
//  }
//  printTable(5); // calling the function

// Return //

// return keyword is used to return a value from a function.

//  input -------->>>> Function ---------->>>> output
//                 (does some work) 

// function funcName(arg1,arg2) {
//     // do something
//     return ValidityState;
// }

// printTable(2);
// // calcAvg(2, 4, 6);

//  practice Qs 

// create a function that returns the sum of numbers frome 1 to n.

// function getSum(n) {
//     let sum = 0;

//     for(let i=1; i<=n; i++) {
//        sum += i;
//     }

//     return sum;
// }


// practices Qs 

// create a Function that reture the comcatenation of all string in an array..


let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for(let i=0; i<str.length; i++) {
        result += str[i];
    }

    return result;
}