// for of loop //

// for (element of collection) {
//     do something 
// }

// let fruits = ["mango", "apple", "banana", "orange", "litichi"];

// for(i of fruits) {
//     console.log(i);
// }

// for(char of "apnacollage") {
//     console.log(char);
// }

// nested for loop //

let heroes = [["ironman", "spiderman", "thor"], ["superman","wonder woman", "flash"]];

for(list of heroes) {
    for(hero of list) {
        console.log(hero);
    }    
}