//  Q1). Try out the following code and see what happens when you run it:
//        - mouseout
//        - keypress
//        - scroll
//        - load


// - mouseout

let box = document.getElementById("box");
  let msg = document.getElementById("msg");

  box.addEventListener("mouseout", function() {
    msg.innerText = "Mouse is out of the box.";
  });

// - keypress

let inputBox = document.getElementById("inputBox");
  let output = document.getElementById("output");

  inputBox.addEventListener("keypress", function(event) {
    output.innerText = "You pressed: " + event.key;
  });

// - scroll

window.addEventListener("scroll", function() {
    document.getElementById("status").innerText = "Page is being scrolled!";
  });

// - load

window.addEventListener("load", function() {
    document.getElementById("msg").innerText = "Page fully loaded!";
  });

// Q2). create a button on the page using Javascript. Add an
//       event listener that changes the button's color to green when it is clicked.

let button = document.createElement("button");

button.innerText = "Click Me";

document.body.appendChild(button);

button.addEventListener("click", function() {
  button.style.backgroundColor = "green";
});

// Q3). create an input element on the page with a placeholder "enter your name". and an H2 heading
//      on inside HTML.
//   The purpose of this input element is to enter a user's name so it should only 
//   input letters from a-z and space (all other characters should not be delected).
//   whenever the uers inputs their input should be dynamically visible inside
//   the heading.

//