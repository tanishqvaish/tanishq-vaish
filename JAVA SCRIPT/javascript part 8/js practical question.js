// // // ------------- JS (part - 8)----------------------//
// //             practical questions                 // //

// // QS.1 :- square and sum the array elements using the arrow function and then find the average of the array.

// let nums = [1, 2, 3, 4, 5, 6,];

// console.log("Original array: ", nums);

// const square = nums.map( (num) => num * num );
// console.log("Squared array: ", square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);
// console.log("Sum of squared array: ", sum);

// let avg = sum / nums.length;
// console.log("Average of squared array: ", avg);

// // -----------------------END---------------------//

// // QS. 2 :- Create a new arry using the map function whose each element is equal to the original array.

// let numbers = [1, 2, 3, 4, 5, 6, -2, -4];

// console.log("Original array: ", numbers);

// console.log("Array with each element increased by 5: ", numbers.map((numbers) => numbers + 5));

// // -----------------------END---------------------//

// // QS. 3 :- Create a new array whose each elements are in uppercase of words present in the original array.

// let strings = ["adam", "bob", "eve"];
// console.log("Original array: ", strings);

// console.log("Array with each element in uppercase: ", strings.map((string) => string.toUpperCase ()));

// // -----------------------END---------------------//

// // QS. 4 :- Write a function called doubleAndReturnArgs which acceps an array and a variable number of arguments.
// //          The function should return a new array with the original array values and all of the additional argumentsdoubled.

// const doubleAndReturnArgs = (arr, ...args) => {
//     console.log("Original array: ", arr);
//     console.log("Additional arguments: ", args);
//     return [
//         ...arr,
//         ...args.map((v) => v * 2),
//     ];
// };

// console.log("Result of doubleAndReturnArgs([1, 2, 3], 4, 4): ", doubleAndReturnArgs([1, 2, 3], 4, 4)); // Output: [1, 2, 3, 8, 8]
// console.log("Result of doubleAndReturnArgs([2], 10, 4): ", doubleAndReturnArgs([2], 10, 4)); // Output: [2, 20, 8]

// // -----------------------END---------------------//

// // QS. 5 :- Write a function called mergeojects that accepts two objectics and returns a new object which contians all the key-value of the first object and second object.

// const mergeobjects = (obj1, obj2) => {
//     console.log("First object: ", obj1);
//     console.log("Second object: ", obj2);
//     return ({...obj1, ...obj2});
// };

// console.log("Result of mergeobjects({a: 1, b: 2}, {c: 3, d: 4}): ", mergeobjects({a: 1, b: 2}, {c: 3, d: 4})); // Output: { a:1, b:2, c:3, d:4 }

// // -----------------------END---------------------//
// //             practical questions       

// // QS.1 :- square and sum the array elements using the arrow function and then find the average of the array.

// let nums = [1, 2, 3, 4, 5, 6,];

// const square = nums.map( (num) => num * num );
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;
// console.log(avg);

// // -----------------------END---------------------//

// // QS. 2 :- Create a new arry using the map function whose each element is equal to the original array.

// let numbers = [1, 2, 3, 4, 5, 6, -2, -4];

// console.log(numbers.map((numbers) => numbers + 5));

// // -----------------------END---------------------//

// // QS. 3 :- Create a new array whose each elements are in uppercase of words present in the original array.

// let strings = ["adam", "bob", "eve"];
// console.log(strings.map((string) => string.toUpperCase ()));

// // -----------------------END---------------------//

// // QS. 4 :- Write a function called doubleAndReturnArgs which acceps an array and a variable number of arguments.
// //          The function should return a new array with the original array values and all of the additional argumentsdoubled.

// const doubleAndReturnArgs = (arr, ...args) => [
//     ...arr,
//     ...args.map((v) => v * 2),
// ];

// doubleAndReturnArgs([1, 2, 3], 4, 4); // Output: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4); // Output: [2, 20, 8]

// // -----------------------END---------------------//

// // QS. 5 :- Write a function called mergeojects that accepts two objectics and returns a new object which contians all the key-value of the first object and second object.

// const mergeobjects = (obj1, obj2) => ({...obj1, ...obj2});
// mergeobjects({a: 1, b: 2}, {c: 3, d: 4}); // Output: { a:1, b:2, c:3, d:4 }

// // -----------------------END---------------------//