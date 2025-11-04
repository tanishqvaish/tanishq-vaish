
// part 13 ----//

// const { default: axios } = require("axios");

// const { default: axios } = require("axios");

// Axios - Library to make HTTP requests

// EX: 1 

// async function getFacts() {
//     try {
//         let res = await axios.get(url);
//         console.log(res);
//     } catch (e) {
//         console.log("ERROR -", e);
//     }
// }

// Ex: 2

// let url = "https://catfact.ninja/fact";
//     let btn = document.querySelector("button");

//     btn.addEventListener("click", async () => {
//       let fact = await getFacts(); 
//       console.log(fact);
//       let p = document.querySelector("#result");
//       p.innerText = fact;
//     });

//     async function getFacts() {
//       try {
//         let res = await axios.get(url);
//         return res.data.fact; 
//       } catch (e) {
//         console.log("Error -", e);
//         return "No fact found";
//       }
//     }


// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let link = await getImage(); 
//   let img = document.querySelector("#result");
//   img.setAttribute("src", link); 
//   console.log(link);
// });

// async function getImage() { 
//   try {
//     let res = await axios.get(url2);
//     return res.data.message; 
//   } catch (e) {
//     console.log("Error -", e);
//     return "/";
//   }
// }

// Axios - sending Headers 

// const config = {Headers: {Accept: "application/json"}};

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = { headers: { Accept: "application/json"} };
//         let res = await axios.get(url,config);
//         console.log(res.data);
//     } catch(err) {
//         console.log(err);
//     }
// }

// Axios - updating query strings

// let url = "http://universities.hipolabs.com/search?name=";
// let btn = document.querySelector("button");


// btn.addEventListener("click", async () => {

//     let country = document.querySelector("input").value;
//     console.log(country);

//     let colleges = await getcolleges(country);
//     show(colleges);
// });

// function show(colleges) {

//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colleges) {
//         console.log(col.name);

//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }
// async function getcolleges(country) {
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     }   catch(e) {
//         console.log("error : ",e);
//         return [];
//     }
// }


    