// QS1. Write an arrow function named arrayAverage that accecpts an array of numbers and returns the average of those numbers.
// QS2. write an arrow function named isEven() that takes a single number as argument and return the average of those numbers as argument and return if it is even or not.
// QS3. What is the output of the following code :
//       const object = {
//          message: 'hello, world!',
//       
//       logMessage() {
//             console.log(this.message);
//    }
// };

// setTimeout(object.logMessage, 1000);

// QS4. What is the output of the following code:

//      let length = 4;
//      function callback() {
//           console.log(this.length);
//      }

//           const object = {
//           length: 5,
//           method(callback) {
//           callback();
//            },
//         }; 

//         object.method(callback, 1, 2);

// ANS 1 :- 

// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total / arr/length;
// };

// let arr = [1, 2, 3, 4, 5, 6];

// 