// this keyword 

// "this" keyword refers to an object that is executing the current piece of code..

// const student = {
//     name: "tanishq",
//     age: 23,
//     eng: 95,
//     math: 93,
//     phy: 97,
//     getAvg() {
//         console.log(this);
//         let avg = (this.eng + this.math + this.phy) / 3;
//         console.log(`${this.name} got avg marks = ${avg}`);
//     }
// }

// function getAvg() {
//     console.log(this);
// }


// try & catch 

// The try statement allows you to define a block of code to be tested for errors while it 
//  is being executed..

// The catch statement allows you to define a block of code to be executed, if an error
//  occurs in try block.

// example  vvv

// try {
//     console.log(a);
// } catch {
//     console.log("va")
// }

// console.log("hello");
// console.log("hello");
// try {
//     console.log(a);
// } catch {
//     console.log("caught an error.. a is not defined");
// }

// console.log("hello2");
// console.log("hello2");
// console.log("hello2");


// Arrow functions 

// const func = (arg1, arg2..) => {function definition}

// const sum = (a, b) => {
//     console.log(a+b);
// }

// const sum = (a, b) => {
//     console.log(a + b);
// };

// const cube = (n) => {
//     return n*n*n;
// }

// const pow = (a, b) => {
//     return a**b;
// }

// Implicit return of Arrow functions 

// const func = (arg1, arg2) => {value}

// const mul = (a, b) => (
//     a * b
// );


// Set Timeout 

// setTimeout(function, timeout)

// console.log("hi there!");

// setTimeout( () => {
//     console.log("apna college");
// }, 4000);

// console.log("welecome to")

// set interval 

// setinterval(function, timeout)

// setInterval( () => {
//     console.log("apna college");
// }, 2000);

// clearInterval(id)

// Example:- vvvv

// setInterval( () => {
//     console.log("Apna college");
// }, 4000);

// To stop interval use clearInterval(id);

// This with Arrow Functions 

// const student = {
//     name: "aman",
//     marks: 95,
//     prop: this, // global scop
//     getName: function () {
//         console.log(this);
//         return this.name;
//     },
//     getMarks: () => {
//         console.log(this);
//         return this.name;
//     },
// getmarks: () => {
//     console.log(this); // parent's scope -> windows
//     return this.marks;
// },

// getInfo1: function () {
//     getTimeout(() => {
//         console.log(this); // student 
//     }, 2000);
// },

// getInfo2: function () {
//     setTimeout(function () {
//         console.log(this); //window
//     }, 2000);
//   },
// };

// practical Qs 

// write an arrow function that returns the square of a number 'n'


// solution : - 1 type 

// const square = (n) => {
//     return n*n;
// }

// console.log(square(4));

// // second type - 2 

// (n) => (n*n);


// write function that prints "hello world" 5 times at intervals of 2s each.

// let id = setInterval( () => {
//     console.log("hello world");
// }, 2000);

// setTimeout(()=> {
//     clearInterval(id);
// }, 10000);

