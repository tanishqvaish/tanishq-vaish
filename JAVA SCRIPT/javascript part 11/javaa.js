// // Call stack // 

// function hello() {
//     console.log("inside hello fnx");
//     console.log("hello");
// }

// function demo() {
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("demo, bye!");

// visiulizing the call stack //

// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three () {
//     let ans = two() + one();
//     console.log(ans);
// }

// three();

// JS is single Threaded language 

// ex:- 

// setTimeout(function (){
//     console.log("apna college");
// }, 2000);

// console,log("hello...");

// Ex: -

//    let a = 25;
//      console.log(a);
//    let b = 10;
//      console.log(b);
//      console.log(a+b);

// setTimeout(()=>{
//     console.log("apna college")
// }, 2000);

// console.log("hello..")

// Callback hell - this is the callback problem function //

// h1 = document.querySelector("h1");

// function changecolor(color,delay, nextcolorchange) {
//     setTimeout(()=> {
//         h1.java.color;
//         if (nextcolorchange) nextcolorchange();
//     }, delay);
// }

// changecolor("red", 1000, ()=> {
//     changecolor("orange", 1000, ()=> {
//         changecolor("green", 1000);
//     });
// });

// Promises - The Promise object represents the eventual completion (or failure) of 
//            an asynchronous operaiton and its resulting value.

// ex:- 

// function savetoDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if(internetspeed > 4) {
//         success();
//     } else {
//       failure();
//     }
// }

// savetoDb(
//     "apna college",
//     () => {
//         console.log("hour data was saved");
//     },
//     () => {
//         console.log("weak connection. data not saved");
//     }
// )

// Promises - this is also knows as object and (Resolve & reject)

// function savetoDb(data) {
//     let internetspeed = math.floor(Math,random() * 10) + 1;
//     return new Promise((success, faliure)=> {
//         let internetspeed = maths.floor(math.random() * 10) + 1;
//     })
// } 

// promises - method two (1). then()  (2).catch()

// EX: -
// let request = saveToDBpromise("apnacollege");
// request
//    .then(() => {
//      console.log("promise resolved");
//    })
//    .catch(() => {
//     console.log("promise rejected");
//    });

// EX:2-

// savetoDb("apna college");
//  .then(() => {
//     console.log("promise was resolved");
//  })
//  .catch(() => {
//     console.log("promise was rejected");
//  });

// promise chaining - improved version

// EX:

// saveToDBPromise("apna college")
//   .then(() => {
//     console.log("promise resolved");
//     return saveToDBPromise("hello world");
//   })
//   .then(() => {
//     console.log("promise2 resolved");
//   })
//   .catch(() => {
//     console.log("some promise rejected");
//   });

// promises are rejected and resolved with some data (valid result or errors)

// EX: 

// saveToDBPromise("apna college")
//    .then((result) =>{
//     console.log("result : ", result);
//     console.log("promise1 resolved");
//     return saveToDBPromise("hello world");
//    })
//    .then((result) =>{
//     console.log("result :", result);
//     console.log("promise2 resolved");
//    }) 
//    .catch((error) =>{
//     console.log("error :", error);
//     console.log("some promise rejected");
//    });


// const h1 = document.querySelector("heading");

// function changecolor(color, delay) {
//    return new Promise((resolve,reject) => {
//       setTimeout(() => {
//          h1.style.color = color;
//          resolve("color changed!");
//       }, delay);
//    });
// }

// changecolor("red", 1000)
//   .then(()=>{
//      console.log("red color was changed");
//      return changecolor("orange", 1000);
//   })
//   .then(()=>{
//      console.log("orange color was completed");
//      return changecolor("green",1000);
//   })
//   .then(()=> {
//      console.log("green color was completed");
//      return changecolor("blue",1000);
//   })
//   .then(()=> {
//      console.log("blue color was completed");
//   });