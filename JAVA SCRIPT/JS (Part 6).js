// Practice Questions 

// Qs1. Write a javascript function that returns array element larger that a number.

// let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
// let num = 5;

// // elements larger than a number num
// function getElements(arr, num) {
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] > num) {
//             console.log(arr[i]);g
//         }
//     }
// }

// getElements(arr, num);

// //Qs2. Write a javascript function to extract unique characters from a string.
// //     Example: str = "asdif asdfjaisdfadf"
// //              ans = "asdfjia"

// let str = "adfuhaefuhkghttff";

// //function to get string with all unique elements
// function getUnique(str) {
//     let ans = "";
//     for (let i=0; i<str.length; i++) {
//         let currChar = str[i];
//         if (ans.indexOf(currChar) == -1) {
//             // if current character is not added, then add it in ans.

//             // otherwise it is a duplicate.
//             ans += currChar;
//             }
//     }

//     return ans;
// }
// getUnique(str);

// //Qs3. Write a javascript function that accepts a list of country names as input and 
// //     returns the longest country name as output.
// // Example: country = ["India", "USA", "Canada", "Australia"]
// //          output: "united states of America"

// let country = ["Australia", "germany", "united states of America"];

// function longestName(country) {
//     let ansIdx = 0;
//     for (let i = 0; i < country.length; i++) {
//         let ansLen = country[ansIdx].length;
//         let currLen = country[i].length;
//         if (currLen > ansLen) {
//             ansIdx = i;
//             }
//     }
//     return country[ansIdx];
// }

// longestName(country);

//Qs4. Write a javascript function to count the number of vowels in a string argument.

// let str = "apnacollege";

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (
//             str[i] == "a" ||
//             str[i] == "e" ||
//             str[i] == "i" ||
//             str[i] == "o" ||
//             str[i] == "u"
//         ) {
//             count++;
//         }
//     }


// return count;
// }

//Qs5. write a javascript function to generate a random 
//     number within a range (start,end).


// let start = 100;
// let end = 200;

// function generateRandom(start, end) {
//     let diff = end - start;
//     return Math.floor(Math.random() * diff) + start;
// }