// JS objects literals, Thread / Twitter Post, Get values, Add / Update value, object of objects   //

// Used to store keyed collections & complex entities.
//  property => (key , value) pair
//  objects are a collection of properties 

// let delhi = {
//     latitide: "23.7041° N",
//     longitude: "77.1025° E",
// };


// const student = {
//     name: "Tanishq",
//     age: 20,
//     marks: 90.5,
//     city: "Bhopal"
// };

// Thread / Twitter Post //

// Create an object literal for the properties of thread/ twitter post which includes
// 1. username 
// 2. content 
// 3. likes
// 4. reposts
// 5. tags     etc....

// Example: v

// const post = {
//     username: "Tanishq",
//     content: "Hello, I am Tanishq",
//     likes: 100,
//     reposts: 50,
//     tags: ["@apnacollege", "@delta"]
// };

// // Get values //

// let student = {
//     name: "Tanishq",
//     marks: 94.4
// };

// student["name"]
// student.

// Get Values //

// JS automatically converts objects keys to strings.
// Even if we made the number as a key, the number will be converted to string.

// Example :

// const obj = {
//     1: "a",
//     2: "b",
//     true: "c",
//     null: "d",
//     undefined: "e"
// };

// Add / Update value 

// change the city to "Mumbai"
// Add a new property, gender to "Female"
// change the marks to "A"

// Example:

// const student = {
//     name: "Tanishq",
//     age: 23,
//     marks: "9",
//     city: "Pune"
// };

// object of objects 

// storing information of multiple studnets 
// Example:

// const classInfo = {
//     Tanishq : {
//         grade:"A+",
//         city:"Delhi"
//     },
//     Rohan : {
//         grade: "A",
//         city: "Mumbai"
//     },
//     Aryan : {
//         grade: "B",
//         city: "Pune"
//     }
// };


// Array of objects //
// storing information of multiple students

// const classInfo = [
//     {
//         name: "Tanishq",
//         grade: "A+",
//         city: "Delhi"
//     },
//     {
//         name: "Rohan",
//         grade: "A",
//         city: "Mumbai"
//     },
//     {
//         name: "Aryan",
//         grade: "B",
//         city: "Pune"
//     }
// ];

// Math object

// Properties           Methods 
//  Math.PI            Math.abs(n)
//  Math.E             Math.pow(a,b)
//                     Math.floor(n)
//                     Math.ceil(n)
//                     Math.round()

// Random Integers //

// From 1 to 10

// step1: let num = Math.random();
// step2: num = num * 10;
// step3: num = Math.floor(num);
// step4: num = num + 1;

// Example v
// let random = Math.floor(Math.random()*10) + 1;

