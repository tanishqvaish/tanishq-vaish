// Template literals //

// -> This are used to add embedded expression in a string.

// let a = 5;
// let b = 10;

// console.log(`your pay ${a+b} Rupees`);

// // ex:-  of pencile and paper //

// let  pencilePrice = 10;
// let paperPrice = 20;

// console.log(`The total price is : ${pencilePrice + paperPrice} Rupees`);
// // Output: The total price is : 30 Rupees


// // Arithmeatic operators //

// let a = 10;
// let b = 5;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a ** b);

// // Output: 15, 5, 50, 2, 0, 100

// operators in JS (unary operators) //

// let a = 10;
// let b = 5;
// console.log(a++); // 10
// console.log(++a); // 12

// Assignement operators (=, +=, -=, *=, /=, %=, **=) //

// let a = 10;
// let b = 5;
// b = a;
// console.log(b); // 10

// NEW operators Comparison operators (==, !=, ===, !==, >, <, >=, <=) //

// let a = 10;
// let b = 5;
// console.log(a == b); // true
// console.log(a != b); // false
// console.log(a === b); // false
// console.log(a !== b); // true
// console.log(a > b); // true
// console.log(a < b); // false
// console.log(a >= b); // true
// console.log(a <= b); // false
// console.log(a == b); // false

// conditional statements // 
// 1). if else
// 2). nested if-else
// 3). switch 

// if statement //

// console.log("before my if statemen");
// let age = 25;
// if (age >= 18) {
//     console.log("you can vote");
// }
// if (age < 18) {
//     console.log("you can not vote");
// }
// // console.log("after my if statement");

// example //

// let firstName = "sneha sing";
// if (firstName == "Tanishq vaish") {
//     console.log(`Welcome ${firstName}`);
// }

// Practice Qs //
// Create a traffice light system that shows what to do based on color. 

// let trafficLight = "yellow dark";
// if (trafficLight === "red") {
//     console.log("stop");
//     } else if (trafficLight === "green") {
//         console.log("GO");
//         } else if (trafficLight === "yellow") {
//             console.log("slow down");
//             } else {
//                 console.log("Invalid traffic light");
//                 }



// else if statement //

// let age = 144;

// if (age >= 18) {
//     console.log("you can vote")
// }
// else if (age < 18) {
//     console.log("you cannot vote");
// } else {
//     console.log("Invalid age");
// }

// let marks = 20;

// if (marks >= 80) {
//     console.log("A+");
// } else if (marks >= 60) {
//     console.log("A");
// } else if (marks >= 33) {
//     console.log("B");
// } else if (marks < 33) {
//     console.log("A++++++++++++ very good very very good");
// }

// let month = "january";

// if (month === "january") {
//     console.log("January is a winter month");
// } else if (month === "april") {
//     console.log("April is a spring month");
// } 

// practice  Qs //

// 1). Create a system to calculate popcorn price based on the size customer asked for :

//  if size is 'XL' price is 250
//  if size is 'L' price is 200
//  if size is 'M' price is 100
//  if size is 'S' price is 50

// let size = "XXL";

// if(size === "XL"){
//     console.log("price is 250");
// } else if(size === "L") {
//     console.log("price is 200");
// } else if(size === "M") {
//     console.log("price is 100");
// } else if(size === "S") {
//     console.log("price is 50");
// } else {
//     console.log("On customer request for that price will calculate");
// }

// Nested if-else statement 

// let marks = 99;

// if(marks >= 33) 
//     console.log("pass");
//     if(marks >= 80) {
//         console.log("You became : NSG Person");
//     if(marks >= 90) {
//         console.log("You became : CoBRA Commando");
//     } else {
//         console.log("You became : ARMY Person");
//     }
// } else {
//     console.log("Do practice Again");
// } 

// Logical operators && (AND) || (OR) ! (NOT)

// let marks = 99;

// if( marks >= 33 && marks >= 80) {
//     console.log("Pass");
//     console.log("A+");
// }


// let marks = 32;

// if( marks >= 33 || marks >= 80) {
//     console.log("Pass");
//     console.log("A+");
// }

// practical    Qs 

// A "good string" is a string that starts with the letter "a" & has a length >3. write a program to find if a string is good or not.

// let str = "ndmera";

// if((str [0] === "a") && (str.length > 3)) {
//     console.log("Good string");
//     } else {
//         console.log("Not a good string");
// }

// Predict the output of the following code :

// let num = 12;

// if((num%3 === 0) && ((num+1 == 15) || (num-1 == 11))) {
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }  

// switch statement 

// used when we have to some fixed values that we need to compare to.

// let color = "purpal";

// switch(color) {
//     case "red" :
//         console.log("stop it's red light");
//         break;
//         case "yellow" :
//             console.log("slow down it's yellow light");
//             break;
//             case "green" :
//                 console.log("go it's green light");
//                 break;
//                 default:
//                     console.log("invalid color");

// }

// Practical Qs 

// use switch statement to print the day of the week using a number variable 'day' with value 1 to 7.
//  1 = monday, 2 = tuesday & so on.

// let day = 1;

// switch (day) {
//         case 1:
//             console.log("monday");
//             break;
//         case 2:
//             console.log("tuesday");
//             break;
//         case 3:
//             console.log("wednesday");
//             break;
//         case 4:
//             console.log("thursday");
//              break;
//         case 5:
//             console.log("friday");
//              break;
//         case 6:
//             console.log("saturday");
//             break;
//         case 7:
//             console.log("sunday");
//         default :
//             console.log("invalid day");
// }

// Alert & Prompt

// Alert display an alert message on the page.
// alert("somthing is wrong");

//  prompt display a dialog box that asks user for some input.
//  prompt("please enter your roll no."); 

// alert("somthing is wrong");
// prompt("enter your roll no");  // this will not work in browser console as it is not a browser function

// console.error("this is an error message");


// let firstName = prompt("enter your name : ");
// console.log(firstName);

// example //

// let firstName = prompt("enter first name : ");
// let lastName = prompt("enter last name : ");
// // console.log("welcome",firstName,lastName, "to our website");

// let msg = "welcome"+" " + firstName + " " +lastName + "!";
// alert(msg);



// JS (part 2)
// practice questions 


// Qs 1). Create a number variable num with some value.
//         now, Print "good" if number is divisible by 10 and print "bad" if it is not.

// let num = 4;

// if (num % 10 == 0) {
//     console.log("good");
//     } else {
//         console.log("bad");
//         }

// Qs 2). Take the user's name & age as input from the user using prompt() function.
//         Now, print the user's name and age on the console.

// let Name = prompt("enter your name : ");
// let age = prompt("enter your age : ");
// let msg = "your name is " + Name + " and your age is " + age + ".";
// alert(msg);

// Qs 3). write a Switch statement to print the months in a quarter.

// const quarter = parseInt(prompt("Enter the months quarter number (1-4):"));

// switch (quarter) {
//     case 1:
//         console.log("Months in Quarter 1: January, February, March");
//         break;
//     case 2:
//         console.log("Months in Quarter 2: April, May, June");
//         break;
//     case 3:
//         console.log("Months in Quarter 3: July, August, September");
//         break;
//     case 4:
//         console.log("Months in Quarter 4: October, November, December");
//         break;
//     default:
//         console.log("Invalid quarter! Please enter a number between 1 and 4.");
// }


// Qs 4). A string is a golden string if it start swith the character ‘A’ or ‘a’ and has a total length greater than 5.
//        For a given string print if it is golden or not.

// let str = "apples";

// if((str[0] == 'a' || str[0] == 'A') && str.length > 5) {
//     console.log("Golden string");
// } else {
//     console.log("Not a golden string");
// }


// Qs 5). Write a program to find the largest of 3 numbers.

// let a = 5;
// let b = 18;
// let c = 13;

// if(a > b) {
//     if(a > c) {
//         console.log("a is the largest");
//     } else {
//         console.log("c is the largest");
//     }
// } else {
//     if(b > c) {
//         console.log("b is the largest");
//         } else {
//             console.log("c is the largest");
//     }
// }

// Qs 6). write a program to check if 2 numbers have the same last digit.
//  Eg: 32 and 47852 have the same last digit i.g. 2

// let num1 = 32;
// let num2 = 47852;

// if( (num1 % 10) == (num2 % 10) ) {
//     console.log("numbers have the same last digit which is", num1%10);
//     } else {
//         console.log("numbers do not have the same last digit");
// }


// String methods //

// Methods - actions that can be performed on objects.
// format - stringName.method()

// 1). str.trim()
//     Trim whitspaces from both ends of string & returns a new one.

// let msg = "   Hello, World!   ";

// let password = prompt("set your password");
// let newPass = password.trim();
// console.log(newPass.trim());


// String are immutable in js 

// NO changes can be made to string to make a change, a new string is created and old remains same.

// let name = "apna collage";

// let msg = "error";

// console.log(msg.toLocaleUpperCase());


// String methods with arguments

// Argument is a some value that we pass to the method.
// Format :- stringName.methodName(arg1, arg2, ...)





// indexof //

// Returns the first index of occurrence of some value in string. or gives-1 if not found.

// let str = "i love coding";

// str.indexOf("love"); // returns 1
// str.indexOf("j"); // returns -1
// str.indexOf("o"); // 2(only 1 index)

// let msg = "i love coding";

// Method chaining 

// using one method after another. order of execution will be left to right.
// str.toUpperCase().trim()

// let msg = "  hello  ";
// let newMsg = msg.trim();
// console.log("after trim : ",newMsg);
// newMsg = newMsg.toUpperCase();
// console.log("after Uppercase : ",newMsg);

// new string //
//    v       
// let newMsg = msg.trim().toUpperCase(); // this called method chaining //
// console.log(newMsg);

// Slice //
// Returns a part of the original string as a new string.
// example :- v

// let msg = "apnacollage";
// console.log(msg.slice(0,4));

// let msg = "apnacollege";
// console.log(msg.slice(-3)); // 11-2 => 8

// Replace //

// Searches a Value in the String and returns a new sting with the value replaced.

// ex:- v

// let msg = "i love coding";

// Repeat //

// returns a string with the number of copies of a string 

// let str = "Mango";

// str.repeat(3) // "MangoMangoMango"

// Practical Qs //

// Qs For the given String:
//     let msg = "help !";
// Trim it & convert it to uppercase.

// ans v //

// let msg = "help !";
// console.log(msg.trim().toUpperCase());

// Qs For the given string -> let name = "apnacollage", predict the output for following :
//     name.slice(0,4);
//     name.indexof("na")
//     name.replace("Apna",our)

// ans v //

// let Name = "apnacollage";
// console.log(Name.slice(4,9)); // apna
// console.log(Name.indexOf("na")); // 2
// console.log(Name.replace("Apna", "Our")); // ourcollag

// Separate the "collage" part in above string & replace 'l' with 't'.
// ans V //

// let Word = "apnacollage";
// console.log(Word.slice(4,10)); // collage
// console.log(Word.replace("l", "t")); // apnacollaget



// Array (Data Structure)
// Linear collection of things //

// let Name = ['Tanishq', 'sneha', 'Aman']


// Visualizing Array //

// | 2 | 4 | 6 | 8 |
//   0   1   2   3

//  let nums = [2,4,6,8];

// Arrays are Mutable 

// let fruits = ["mango", "apple", "litchi"];
// fruits[0] = "banana";
// result :- 'banana'

// fruits 
// (3) ['banana', 'apple', 'litchi']


// Array Methods 

// 1. push() - Add element at the end of array
// 2. pop() - Remove element from the end of array
// 3. unshift() - Add element at the beginning of array
// 4. shift() - Remove element from the beginning of array

// Array Methods //

// indexOf:returns index of somthing 
// includes: search for a value 

// concat: merge 2 arrays 
// reverse:reverse an array 

//slice:copies a portion of an array 

//splice:removes/replaces/add elments in place 
//Splice(start,deletecount,item0...itemN)

// example :- v

//> colors.splice(4);
//> ans (2) ['pink','white']
//> colors

//> final result :- colors ['red','yellow','blue','orange']

// colors.splice(0,1);
// > ans ['red]

// > final result :- V

// > colors ['yellow','blue','orange']

// > colors.splice(0,1, "black","grey");
// > ans ["yellow"]


// Array methods //

// sort:sorts an array //


// Practice Qs //

//Qs For the given start state of an array it to find the using splice.



// Array References //

// ex:- [1] === [1] // false
// ex:- [1] === [1] // false    

// constant arrays //

// ex:- const arr = [1,2,3,4];


//Nested Arrays //

// arrays of arrays 

// let nums = [[1,2,3],[4,5,6],[7,8,9]];

//    0,0   0,1
//   | 2  |  4  |
//   | 3  |  6  |
//   | 6  |  8  |


// practice Qs 

// Qs 1). write a javascript program to get the first n elements of an array.[ n can be any positive number].
//        for exa: array [7,9,0,-2] and n = 3 print [7,9,0].

// let arr = [7,9,0,-2];
// let n = 3;

// let ans = arr.slice(0,n);
// console.log(ans); // [7,9,0]

// Qs 2). write a javascript program to get the last n elements of an array.[ n can be any positive number].
//        for exa: array [7,9,0,-2] and n = 3
//        print, [9, 0, -2].

// let arr = [7,9,0,-2];
// let n = 3;

// let ans = arr.slice(arr.length-n);
// console.log(ans);

//Qs 3). write a javascript program to check whether the character at the given (character) index is lower case.


// let str = prompt("please enter a string");

// if(str.length == 0) {
//     console.log("string is empty");
// } else {
//     console.log("string is not empty");
// }


// Qs 4). write a program to test whether the character at the given (character) index is lower case.

// let str = "ApNaCoLlEgE";
// let idx = 3;

// if(str[idx] === str[idx].toLowerCase()) {
//     console.log("character is lower case");
// } else {
//     console.log("character is not lower case");
// }

// Qs 5). write a program to strip leading and trailing spaces from a string.

// let str = prompt("please enter a string");

// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

// Qs 6). write a javascript program to check if an element exists in an array or not.

// let arr = ["hello", 'a', 23, 64, 99, -6];
// let item = 64;

// if(arr.indexOf(item) != -1) {
//     console.log("element exists in array");
// } else {
//     console.log("element doesn't exist in array");
// }


