//               JS (Part - 9)
//            Practical Questions
// _____________________________________________

// QS 1). Create a new input and button element on the page using Javascript only.
//        set the text of button to "Click Me".

let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click Me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// QS 2). Add following attributes to the elements:
//         - Change placeholder value of  input to "username"
//         - Change the id of button to "btn"

button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

// QS 3). Access the btn using queryselector and button id. change the button background color to blue and text color to white.

let btn = document.querySelector("#btn");
btn.classList.add("blue");

// QS 4). create an h1 element on the page and set its to "DOM Practices" underlined.
//        change its color to purple.

let h1 = document.createElement("h1");
h1.innerText = "DOM Practices";
document.querySelector("body").append(h1);

// QS 5). Create a p tag on the page and its text to "Apna collage Delta Practices",
//          where its is bold.

let p = document.createElement("p");
p.innerText = "Apna collage Delta Practices";
p.style.fontWeight = "bold";
document.querySelector("body").append(p);


