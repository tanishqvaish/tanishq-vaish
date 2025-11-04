// -----------------START------------------------///

// DOM (Document object Model)

// The DOM represents a document with a logical tree.
// It allows us to mainpulate/change webpage content (HTML elements).

// ----------------END--------------------------//

// Selecting Elements ----///

//  (1).getElementByid

// Returns the element as an objcts or null (if not found)

//  (2).getElementsByClassName

// Returns the Elements as an HTMLCollection or empty collection(if not found)
// They not return array but as same...

// (3).getElementsByTagName

// Returns the Elements as an HTMLCollection or empty collection(if not found)

// ----------------END--------------------------//


// ----------------START------------------------///

// Query selectors ------///

// Allows us to use any CSS selector
// Returns the first matching element or null if not found

// Ex:- 
//        document.querySelector('p'); // Selects first p element
//        document.querySelector('#myId'); // Selects first element with id "myId"
//        document.querySelector('.myClass'); // Selects first element with class "myClass"

//        document.querySelectorAll('p'); // selects all p elements

// ----------------END--------------------------//

// ----------------START------------------------///

// Using Properties & Methods ------///

// innerText
//         - shows the visible texr contined in a node

// textContent
//         - shows all the full text

// innerHTML 
//         - shows the full markup

// ----------------END--------------------------//

// ----------------START------------------------///

// Manipulating Attributes ------///

// obj.getAttribute(attr)         // Both are called getters
// obj.setAttribute(attr, value)  //               & setters

// ----------------END--------------------------//



// ----------------START------------------------///

// Mainpulating style

// obj.style                     // Use to Manipulating style

// Ex :- 

// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = "red";
// }

// obj.classList

// (1). classList.add() to add new classes
// (2). classList.remove() to remove classes
// (3). classList.toggle() to toggle classes
// (4). classList.contains() to check if class is present or not
// (5). classList.replace() to replace classes

// ----------------END--------------------------//

// ----------------START------------------------///

// Navigation -----///

// (1). parentElement 

//         EX:- let h4 = queryselector('h4');
//              h4.parentElement
//         ouptput :-  Box   

// (2). children

//         EX:- let ul = queryselector('ul');
//              ul.childElementcount;
//         ouptput :-   3 

// - previousElementsibling / nextElementsibling

//     EX:- let ul = document.queryselector('ul');
//            ul.children.previousElementsibling
//            ouptput :-  li 1
//          

// EX:- method 2

//    let img = document.queryselector('img');
//    img.previousElementsibling.style.color = "green";
//       ouput :- 'green'

// ----------------END--------------------------//

// ----------------START------------------------///

// Adding Elements -----///

// document.createrElement('p')

// EX:- document.createElement('p');
//      <p></p>
//      let newp = document.Element('newp');
//      console.dir(newp);
//      newp.innerText = "Hi I'm new p"
//      output :- 'hi I'm new p'

//  (1). appendchild(element)
//
// document.createElement('p');
//         <p></p>
//         let newp = document.Element('newp');
//         console.dir(newp);
//         newp.innerText = "Hi I'm new p"
//   
//     let body = document.Element('body');
//     body.appendchild(newp);
//     output :-  <p>hi, I'm new p</>

// EX:- Method 2
//        let btn = document.createElement('button');
//        console.dir('btn');
//        btn.innerText = "Click me";
//        box.appendchild(btn);
//        output :- the button is added to the box element
//  (2). append(element)
//  
// EX:- Method 1
//    if we add the info directely to the element we can use the append method.
//     we use .append("hi i'm steve")
//  note :- the append is mainley used to add element at last  


//  (3). prepend(element)
// 
//   note:- the prepend is mainly used to add element at the first

//   ex:- box.prepend(newp)
//        output :- the newp is added to the box element at the first position

//  (4). insertAdjacentElement(where, element)

// Ex:- (1). p.insertAdjacentElement('afterbegin',btn);
//      (2). p.insertAdjacentElement('afterend',btn);
//      (3). p.insertAdjacentElement('beforebegin',btn);
//      (4). p.insertAdjacentElement('beforeend',btn);

//      output :- the button is added to the paragraph element at the specified position

//       (5). removechild(element)
//       (6). remove(element)

//      output :- the element is removed from the parent element

// Practice QS :- 

// i). a <p> with red text that says "Hello I'm red!"
// ii). an <h3> with blue text that says "Hello I'm blue h3!"\
// iii). a <div> with a black boarder and pink background color with the following elements inside of it:
//         (1). another <h1> that says "I'm in a div"
//         (2). a <P> that says "Me too"

// ANS vvvvv

// let para1 = document.createElement('p');
// para1.innerText = "Hey I'm red!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm Blue h3!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

// let div = document.createElement('div');
// let h1 = document.createElement('h1');
// let para2 = document.createElement('p');


// h1.innerText = "I'm in a div!";
// para2.innerText = "ME TOO!";

// div.append(h1,para2);
// div.classList.add("box");

// document.querySelector("body").prepend(div);