// Async Functions - async & await keywords

//  async function greet() {
//     return "hello!";
// }

// this async function is use to connect the function asyncley 

// async function greet() {
//     throw "404 page not found";
//     return "hello!";
// }

// greet()
//    .then((result) =>{
//      console.log("promise was resolved");
//      console.log("result was :", result);
//    })
//    .catch((err) =>{
//      console.log("promise was rejected with err :", err);

//    });

// Await keyword 
// ---- pauses the execution of its surrounding async function until the
// promise is settled (resolve or rejected)


// EX: ---1111------

// function getNUM() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random()*10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNUM();
//     await getNUM();
//     await getNUM();
// }

//-----2------

// h1 = document.querySelector("h1");

// function changecolor(color,delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 5) + 1;
//             if (num > 3) {
//                 reject("promise rejected")
//             } // this is set for example 
//             h1.style.color = color;
//             console.log(`color change to ${color}!`);
//             resolve();
//         }, delay);
//     });
// }

// async function demo() {
//     try{
//      await changecolor("green",1000);
//      await changecolor("orange",1000);
//      await changecolor("blue",1000);
//      await changecolor("orange",1000);
//     } catch (err) {
//         console.log("error caught")
//         console.log(err);
//     }

//     let a = 5;
//     console.log(a);
// }


// JSON - Java Script Object Notation

//  - json.parse(data) Method
//    To parse a string data into a JS object

//  - JSON.stringify(json)method
//    To parse a js object data into JSON

// ex 

// let jsonRes = 
//    `{"fact": "Approximately 1/3 fo cat owners think their pets are able to read their minds.","length":78}`;

// let validRes = JSON.parse(jsonRes);
// console.log(validRes.fact);

// let stundent =  {
//     name: "tanishq",
//     marks: 100,
// };


// our first request - using fetch 
//   fetch(url)

//ex:1

// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res) => {
//     console.log(res);
//     res.json().then((data) => {
//         console.log(data);
//     });
// })
// .catch((err) => {
//     console.log("EROR - ", err);
// });

// ex:2 

// fetch(url)
// .then((res) => {
//     console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log(data.fact);
// })
// .catch((err) => {
//     console.log("EROR - ", err);
// });

// ex:3

// fetch(url)
// .then((res) => {
//     // console.log(res);
//     return res.json();
// })
// .then((data) => {
//     console.log("data1 =", data.fact);
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("data2 =", data2.fact);
// })
// .catch((err) => {
//     console.log("EROR - ", err);
// });

// our first request - using fetch with async/await

let url ="https://catfact.ninja/fact";

async function getFacts() {
    let res =  await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}