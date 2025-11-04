// SCOPE // 

// scope determines the accessibility of variables, objects, and functions from different parts of the code.
//  .function
//  .Block
//  .lexical etc..

// Function scope:
// Variables defined inside a function are not accessible (visible) from outside form outside the function.

// let sum = 54; // Global scope

// function calSum(a, b) {
//     // let sum = a + b; // Function scope
//     console.log(sum);
// }

// calSum(1, 2); // Output: 3
// console.log(sum); // Output: 54

// Block scope:
// variables declared inside a {} block cannot be accessed from outside the block.

// Examples vvvvvvv

// for(let i=1; i<=10; i++) {
//     console.log(i);// block scope
// }

// console.log(i);

// Lexical scope //

// a variable defines outside  a function can be accessible inside another function defined 
// after the variable declaration.

// The opposite is NOT true.

// Example vvvv 

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//     }

//     innerFunc()
// }

// practice Qs //

// what will be the output ?

// let greet = "hello"; // global scope

// function changeGreet() {
//     let greet = "namaste"; // function scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);  // lexical scope
//     }
// }

// console.log(greet);
// // changeGreet();


// Function Expressions 

// const variable = function(arg1, arg2..) {
//     // do or return something
// }

// const sum = function(a, b) {
//     return a + b;
// }

// sum(2, 3); // 5

// Example vvv

// let name = "tanishq";

// let sum = function(a, b) {
//     return a+b;
// }

// let hello = function() {
//     console.log("hello");
// }


// Higher order functions //

// A function that does one or both :
//  : takes one or multiple functions as arguments
//  : returns a function 

// Example vvv

// function multipleGreet(func, n) {  // higher order function
//     for (let i = 0; i<=n; i++) {
//         func();
//         }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet, 10000);


// Higher order funcitons //
//   Returns a function 

// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 == 0));
//         }
//     } else if(request == "even") {
//         return function(n) {
//             console.log(n%2 == 0);
//         }    
//     } else {
//         console.log("wrong request");
//     }
// }

// Example vvv

// let odd = function(n) {
//     console.log(!(n%2 == 0));
// }

// let even = function(n) {
//     console.log(n%2 == 0);
// }

// EX 2

// function oddorEvenFactory(request) {
//     if(request == "odd") {
//         let odd = function(n) {
//             console.log(!(n%2 == 0));
//         }
//         return odd;
// } else if(request == "even") {
//     let even = function(n) {
//         console.log(n%2 == 0);
//     }
//     return even;
// } else {
//     console.log("wrong request");
// }

// let request = "odd"; // or "even"


// Methods //

// Actions that can be performed on an object.

// Examle vvv

// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     sub: function(a, b) {
//         return a - b;
//     }
//     mul: function(a, b) {
//         return a * b;
//     }
// }

// Methods (shorthand) 

// const calculator = {
//     add(a, b) { return a + b; },
//     sub(a, b) { return a - b; },
//     mul(a, b) { return a * b; }
// }
