// -----------------START----------------------//

// DOM Events -----///

// Events are signals that something has occurred.(user input/ actions)


// ---------------START---------------------///

// onclick (when an element is clicked)


//     <button onclick="console.log('button was clicked')">click me</button> // in html we can use but not efficitive way to handle events

// EX:- Method 1

//   let btn = document.querySelector('button'); // get the button element
//   console.dir(btn);

//   EX: Method 1.1 ---// It's for selection of multipal button at same time..

// let btns = document.querySelectorAll('button'); // get all the button elements
 
//  for (btn of btns) {
//     btn.onclick = sayHello; // most important thing is we can use the onClick function only once at a particular element...!!!!!
//  }

//   btn.onclick = function () {
//     console.dir('button was clicked');
//   }

// EX:- Method 2

// function sayHello () {
//     alert('Hey bro !');
// }

// btn.onclick = sayHello; // assign the function to the button's onclick event

// -------------------END----------------------////

// -------------------START--------------------//

// onmouseover (when moues enters an element)


// EX:- Method 1 ( it use to click the button on the mouse hover)

// let btns = document.querySelectorAll('button'); // get all the button elements

// for (btn of btns) {
//     btn.onmouseover = function () {
//         console.log('mouse is over the button');
//     }
// }

// -------------------END----------------------//

// -------------------START--------------------//

// Event Listener ------///

// addEventListener 

// element.addEventListner("click", function () {
//     console.log('button was clicked');
// } )


// EX:- Method 1 

// let btns = document.querySelectorAll('button'); // get all the button elements

// for (btn of btns) {
//     // btn.addEventListener('click', sayHello );
//     // btn.addEventListener("click", sayName);
//     btn.addEventListener("dblclick", function () {   // its use to select the element on "double click"....!!!
//         console.log('button was double clicked');
//     });
// }

// function sayHello () {
//     alert('Hey bro !');
// }

// function sayName () {
//     alert("Apna college");
// }

// Note :- addEventListener is used to add event listener to the element
//           & we can use the same event listener for multiple elements

//   Search more eventlistener on MDN WEB DOCS :-  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener


// -------------------END----------------------//

// ---------------Activity part js ---------------------//

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("para was clicked");
// })
// let box = document.querySelector(".box");
// box.addEventListener("mouseenter", function(){
//     console.log("mouse is inside the box");
// })

// -------------------END----------------------//

// -------------------START--------------------//


// this in Event Listeners 

// When 'this' is used in a callback of event handler of something, it refers to that something.

// Ex:- Method 1

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this.innerText);  // this refers to the button element
//     this.style.backgroundColor = "blue";  // this refers to the button element
// })

// Ex:- Method 2

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3= document.querySelector("h3");

// btn.addEventListener("click", function(){
//     console.log(this.innerText);  // this refers to the button element
//     this.style.backgroundColor = "blue";  // this refers to the button element
// })
// p.addEventListener("click", function(){
//     console.log(this.innerText);  // this refers to the button element
//     this.style.backgroundColor = "blue";  // this refers to the button element
// })
// h1.addEventListener("click", function(){
//     console.log(this.innerText);  // this refers to the button element
//     this.style.backgroundColor = "blue";  // this refers to the button element
// })
// h3.addEventListener("click", function(){
//     console.log(this.innerText);           // this refers to the button element
//     this.style.backgroundColor = "blue";  // this refers to the button element
// })


// Ex:- Method 3

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3= document.querySelector("h3");


// function changecolor() {
//     console.log(this.innerText);           
//     this.style.backgroundColor = "blue";
// }

// btn.addEventListener("click", changecolor);
// p.addEventListener("click", changecolor);
// h1.addEventListener("click", changecolor);
// h3.addEventListener("click", changecolor);

// -------------------END----------------------//

// -------------------START--------------------//

// Keyboard Events 

// Ex:- Method 1

// let btn = document.querySelector("button");


// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Button is clicked");
// })

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("Button is clicked");
// })

// Input Access 

// Type - 1

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function () {  // keydown event is triggered when a key is pressed down
//     console.log("key was pressed");
// });

// Type - 2

// let inp = document.querySelector("input");

// inp.addEventListener("keyup", function () {     // keyup event is triggered when a key is released
//     console.log("key was released");
// });

// Type - 3

// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function (event) {
//    console.log("key = ", event.key);
//    console.log("code = ",event.code);
//    console.log("key was pressed");
// });

// -------------------END----------------------//

// -------------------START--------------------//

// Form Events ------//

// let form = document.querySelector("form");

// form.addEventListener("sumit", function (event) {
//     event.preventDefault();
//     alert("Form is submitted");
// });

// -------------------END----------------------//

// -------------------START--------------------//

// Extracting form data ------//

//  It is use to get the value of the form elements
//  like :-  ABCD@gmail.com, Name :- ABCD, Phone :- 1234567890 etc.


// Method - 1

// let form = document.querySelector("form")

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);

//     alert (`hi ${user.value} your password is set to ${pass.value}`);
// });

// Method - 2

// let form = document.querySelector("form")

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     console.dir(form);
// });

// Method - 3

// let form = document.querySelector("form")

// form.addEventListener("submit", function (event) {
//     event.preventDefault();

//     let user = this.elements[0]; // form.element both are same 
//     let pass = this.elements[1];

//     console.log(user.value);
//     console.log(pass.value);

//     alert (`hi ${user.value} your password is set to ${pass.value}`);
// });

// -------------------END----------------------//

// -----------------START----------------------//

// More Events ----//

//  (1). changes 
//     - event occurs when the value of an element has been changed (only works on <input>,<textarea> and <select>,or <select> elements).

//  (2). Input event 
//     - The input event is fired when the value of an <input>,<select>,or <textarea> element has been changed.

// ----Method---- 1

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//     console.log("input changed");
//     console.log("final value =", this.value);
// });

// ----Method----1

// let form = document.querySelector("form");

// form.addEventListener("submit", function (event){
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function (){
//     console.log("change event");
//     console.log("final value = ", this.value);
// });

// user.addEventListener("input", function (){
//     console.log("input event");
//     console.log("final value = ", this.value);
// });

// ------Activity Time-------- //

// creating text editor ------------------/////

// let inp = document.querySelector("#text");
// let p = document.querySelector("p");

// inp.addEventListener("input", function() {
//     console.log(inp.value);
//     p.innerText = inp.value;
// });