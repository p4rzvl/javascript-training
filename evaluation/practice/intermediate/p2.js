// Problem 2: Event Loop, Microtasks & Macrotasks
// Objective
// Understand JavaScript execution order using the call stack, microtask queue, and macrotask queue.
// Question
// Predict the execution order of the following code and explain why.


console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve()
  .then(() => console.log("promise 1"))
  .then(() => console.log("promise 2"));

console.log("end");

// Output
// start end promise1 promise2 timeout

// order of execution is 
// callstack > microtask queue(promise) > macrotask queue(setTimeout)