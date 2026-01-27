// Task 1: The Stack Overflow (Easy)
// Goal: Intentionally crash the script to understand Stack limits. 
// Requirements:
// Write a recursive function called crashMe.
// It should call itself infinitely without a base case.
// Run it and observe the specific error message provided by the environment.

// function crashMe() {
//     crashMe()
// }

// crashMe();



// Task 2: References vs Values (Medium)
// Goal: tracing data across Stack and Heap. Requirements:

// Predict the output of the logs without running code first.
// Then run it to verify. This tests your understanding of where data lives.

let a = 10;
let b = a;
a = 20;
let x = { val: 10 };
let y = x;
x.val = 20;

console.log(a, b); // 20 10
console.log(x.val, y.val); // 20 20
