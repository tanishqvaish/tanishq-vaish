// // Loops //

// // For Loops //

// // for(initialistion; condition; updation) {
// //     // code to be executed
// // }

// // for (let i = 0; i < 5; i++) {
// //     console.log(i);
// // }

// // for(let i=5; i>=1; i--) {
// //     console.log(i);
// // }

// // Print all numbers (1 to 15)

// // for(let i=1; i<=15; i++) {
// //     console.log(i);
// // }

// // console.log("backwards");

// // for(let i=15; i>=1; i--) {
// //     console.log(i);
// // }

// // for(let i=15; i>=1; i=-2) {
// //     console.log(i);
// // }

// // Print all even numbers (2 to 10)

// // for(let i = 2; i <= 100; i += 2) {
// //     console.log(i);
// // }


// // infinity Loop //

// // for(let i=1; ; i++) {
// //     console.log(i);
// // }

// // Print the multiplication table for 5 //

// // for(let i=5; i<=50; i=i+5) {
// //     console.log(i);
// // }

// // let n = prompt("write your number");
// // n = parseInt(n);

// // for(let i=n; i<=n*10; i=i+n){
// //     console.log(i);
// // }

// // for(let i=3; i<=30; i=i+3) {
// //     console.log(i);
// // }

// // Nested for Loop //

// // for(let i=1; i<=3; i++) {
// //     console.log(`outer loop ${i}`);
// //     for(let j=1; j<=3; j++) {
// //         console.log(j);
// //     }
// // }

// // while loop //

// // while(condition) {
// //     // do something
// // }

// // let i = 1;

// // while(i <= 5) {
// //     console.log(i);
// //     i++;
// // }

// // let i=0;

// // while(i<=20) {
// //     console.log(i);
// //     i++;
// // }


// // Favorite Movie //

// // const favMovie = "avatar";
// // let guess = prompt("guess my favorite movie");

// // while((guess != favMovie) && (guess != "quit")) {
// //     guess = prompt("wrong guess.please try aganin");
// // }

// // if(guess == favMovie) {
// //     console.log("congrats!!");
// // }

// // break keyword //

// // let i=1;
// // while(i<=5) {
// //     if(i == 3) {
// //         break;
// //     }
// //     console.log(i);
// //     i++;
// // }

// // console.log("we use break at 3");

// // Loops with Arrays //

// // let frits = ["mango", "apple", "banana", "cherry", "orange"];

// // for(let i=1; i<frits.length; i+2) {
// //     console.log(frits[i]);
// // }

// // loops with arrays //
// //  nested loops with nested arrays 

// // exaplem :- 
// let heroes = [
//     ["ironman","spiderman", "thor"],
//     ["superman", "wonder woman", "flash"]
// ]

// for(let i=0; i<heroes.length; i++) {
//     console.log(i,heroes[i]);
//     for(let j=0; j<heroes[i].length;)
// }

// let student = [["aman", 95], ["tanishq", 94.4], ["karan", 100]];

// for(let i=0; i<student.length; i++) {
//     for(let j=0; j<student[i].length; j++) {
//         console.log(student[i][j]);
//     }    
// }