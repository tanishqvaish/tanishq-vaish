// Array Mehods 

// forEach,  map,  filter, some, every, reduce..

// 1). forEach - arr.forEach (some function definition or name);
// let arr = [1, 2, 3, 4, 5];

// arr.forEach( (el) => {
//     console.log(el);
// });

// // let print = function(el) {
// //     console.log(el);
// // };

// // arr.forEach(print);

// // second method 

// arr.forEach(function(el) {
//     console.log(el);
// });


// let students = [{
//     name: 'John',
//     marks: 92 
// }, 
// {
//     name: 'Anna',
//     marks: 83
// }, 
// {
//     name: 'Peter',
//     marks: 59
// }];

// ex:- 2 

// let gpa = students.map((el) => {
//     return el.marks / 10;
// });


// arr.forEach((student) => {
//     console.log(student.age);
// });

// Map 
//    - let newArr = arr.map(some function definition or name);

// Ex :- let num = [1, 2, 3, 4, 5];

//       let double = num.map(function(el) {
//            return el * 2;
//       });

// let num = [1, 2, 3, 4];

// let double = num.map((el) => {
//     return el * el;
//     return el * 2; // for return square use ---->>>> return el * el
// });


// Filter ---- //

// let newArr = arr.filter(some function definition or name);


// Method - 1 

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let even = nums.filter((num) => (num % 2 == 0));


// Method - 2


// let nums = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];
// let ans = nums.filter((el) => {
//     return el < 5; // return the elements which are less than 5
//     return el % 2 !== 0; // even -> true, odd -> false.
// })



// Every -- ///

// Returns true if "every element of array gives true" for some function.Else returns false.

// arr.every(some function definition or name);

// [1, 2, 3, 4, 5].every( (el) => (el%2 == 0)); // false

// [2, 4].every( (el) => (el%2 == 0)); // true

// some -- ///

// Return true if "some element of array gives true" for some function.Else returns false.

// arr.some(some function or name);

// ex :- 
//        [1, 2, 3, 4].some( (el) => (el%2 == 0)); // true

//        [1, 3].some( (el) => (el%2 == 0)); // false



// Reduce -- ///

// Reduces the array to a single value.

// arr.reduce(reduce function with 2 variables for (accumulator, element));

// Ex:- [1, 2, 3, 4].reduce( (res, el) => (res+el)); // 10

// Ex:- 2 -->>>Method

// let nums = [1, 2, 3, 4];
// let finalval = nums.reduce((res, el) => res+el);
//     console.log(finalval); // 10

// Ex:- 3 -->>>


// let nums = [1, 2, 3, 4];
// let finalval = nums.reduce((res,el) => {
//     console.log(res);
//     return res + el;
// });
// console.log(finalval); // 10



// Reduce -----////

// Finding Maximum in array 

//Ex :- Method - 1

// let arr = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2, 490340340];

// let max = arr.reduce((max, el) => {
//     if(el > max) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);

// Ex :- Method - 2 

// let arr = [1, 4, 2, 5, 6, 3, 7, 8, 9];

// let max = 1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max); // 10


// Practices QS ----///

// check if all numbers in our array are multiples of 10 or not.

// let nums = [10, 20, 30, 40, 50];

// let ans = nums.every((el) => el%10 == 0);

// console.log(ans);

// create a function that to find the min numbers in an array.

// let nums = [10, 20, 30, 40, 50];

// let min = nums.reduce((min, el) =>{
//     if (min < el) {
//         return min;
//     } else {
//         return el;
//     }
// })

// console.log(min);
 
// Default Parameters ---- ////

// Giving a default value to the arguments  

// Ex:-  function func (a, b, c = 10) {
//         do something 
//   }


// function sum(a, b = 10) {
//     return a + b;
// }

// sum(2);

// spread ---- ///

// Expands an itrerable into multiple values //

// EX:- function func (...arr) {
//        do something
//}

// Ex:- 2 method 

// console.log(..."apnacollage");


// spread ---- ////

// with Array Literals 

// Ex:- let arr = [1, 2, 3, 4, 5];

// let newArr = [...arr];

// Output -  newArr 
//              > (5) [1, 2, 3, 4, 5]


// -------------------------------------------
// EX:- 


// let chars = [..."hello"];

// console.log(chars);


// Ex :-  let odd = [1, 3, 5];
//        let even = [2, 4, 6];  

// let numbers = [...odd, ...even];

///-----------------------END-------------------------------------------------------------------------------//


// Spread  - with object literals 

// Ex:- 1 method ----- vvvv

// let data = {
//     email: "abc@gmail.com",
//     password: "123456",
// };

// let datacopy = {...data, id: 123};

// // EX:- 2 method ---- vvvv

// let arr = [1, 2, 3, 4, 5]; // val
// let obj1 = {...arr}; // obj -> key:val

// let obj2 = {..."hello"};

///-----------------------END-------------------------------------------------------------------------------//

// Rest ----///

// Allows a function to take an indefinite number of arguments and bundlr them in an array.

// Ex:- 1 method ----- vvvv

// function sum(...args) { // arguments
//     return args.reduce((add, el) => add + el);
// }

// Ex:- 2 method ----- vvvv

// function sum(...args) {
//     // arguments 
//     for (let i = 0; i < args.length; i++) {
//         console.log("you gave us:",args[i]);
//     }
// }

// Ex:- 3 method ----- vvvv

// In this v fucntion the elements are called arguments if we call argunement they retun the vale of an elenments..

// function min(a, b, c, d) {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1); // it's not the part of the function it's works on only the function call not the other functions..
// }

///-----------------------END-------------------------------------------------------------------------------//


// Destructuring ---------///

// storing values of array into multipal varibles.

// Ex:- 1 method ----- vvvv

// let names = ["John", "Jane", "Bob", "Alice", "Sam", "Tom", "Jerry", "Lily", "Ricky", "Linda"];
// // let [winner, runnerUp] = names; // names ->
// // console.log(winner, runnerUp); // John Jane 

// let [winner, runnerUp, ...others] = names; // this is the combined method 

///-----------------------END-------------------------------------------------------------------------------//


// Destructuring Objects ---------///

// const student = {
//     name: "John",
//     age: 20,
//     class: 9,
//     subjects: ["Math", "Science", "English"],
//     username: "john@123",
//     password: "123456",
//     city:"pune",
// };

// // let username = student.username;
// // let password = student.password; // this is the old method

// let {username: user, password, city = "Mumbai" } = student; // this is the new method
// //   ^^^^^^^^^^^^^ its use to get the value of the object and store it in the variable