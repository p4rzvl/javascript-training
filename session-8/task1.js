// Code Block 1

// console.log("1");

// setTimeout(function() {
//  console.log("2");
// }, 0);

// Promise.resolve().then(function() {
//  console.log("3");
// });

// console.log("4");

// Output
// 1 4 3 2

// Execution order: Callstack -------->   Microtask   -------->     Macrotask
//                                 (Promise.then, await)   (setTimeout, setInterval)


// Code Block 2

// console.log("Start");

// setTimeout(function() {
//  console.log("Timeout 1");
//   Promise.resolve().then(function() {
//    console.log("Promise 1");
//  });
// }, 0);

// Promise.resolve().then(function() {
//  console.log("Promise 2");
//   setTimeout(function() {
//    console.log("Timeout 2");
//  }, 0);
// });
// console.log("End");

// Output
// Start End Promise2 Timeout1 Promise1 Timeout2

// The event loop checks the microtask queue and 
// macrotask queue after each execution of callback 
// function or promise 


// Code Block 3

// console.log("A");

// Promise.resolve().then(function() {
//  console.log("B");
//   Promise.resolve().then(function() {
//    console.log("C");
//  });
//   console.log("D");
// });

// Promise.resolve().then(function() {
//  console.log("E");
// });

// setTimeout(function() {
//  console.log("F");
// }, 0);

// console.log("G");


// Expected
// A G B D E C F

// Actual
// A
// G
// B
// D
// E
// C
// F

// Same reason as code block 2

// Code Block 4

// console.log("1");

// setTimeout(function() {
//  console.log("2");
// }, 0);

// queueMicrotask(function() {
//  console.log("3");
// });

// Promise.resolve().then(function() {
//  console.log("4");
//   queueMicrotask(function() {
//    console.log("5");
//  });
// });

// setTimeout(function() {
//  console.log("6");
// }, 0);

// console.log("7");

// Expected
// 1 7 3 4 5 2 6 

// Output
// 1
// 7
// 3
// 4
// 5
// 2
// 6

// queueMicrotask has same priority as the promise in js

// Code Block 5: Async/Await

console.log("Start");

async function asyncFunction() {
 console.log("Async 1");
  await Promise.resolve();
 console.log("Async 2");
}

asyncFunction();

Promise.resolve().then(function() {
 console.log("Promise 1");
});

setTimeout(function() {
 console.log("Timeout");
}, 0);

console.log("End");

// Expected Output
// Start End Async1 Promise1 Async2 Timeout

// Actual Output
// Start
// Async 1
// End
// Async 2
// Promise 1
// Timeout

// in async block the lines before the await is executed 
// normally and rest of the code is moved to microtask queue