// todo app //

// list - to show all todos 
// add - to add a todo 
// delete - to delete a task
// quit - to quit the todo

// let todos = [];

// let  req = prompt("please enter your request");

// while(true) {
//     if(req == "quit") {
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list") {
//             console.log("-------------");
//             for(let i=0; i<todos.length; i++) {
//             console.log(i, todos[i]);
//         }
//         console.log("-------------");

//     } else if(req == "add") {
//         let task = prompt("please enter the task you want to add");
//         todos.push(task);
//         console.log("task added");

//     } else if(req == "delete") {
//         let idx = prompt("please enter the task you want to delete");
//         todos.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }