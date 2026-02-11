// ## **Problem 1: Variable Scope & Hoisting (`var`, `let`, `const`)**
// ### **Question**
// Predict the output of the following code and explain **why** it behaves that way.

console.log(a);

var a = 10;

if (true) {  
  let a = 20;  
  console.log(a);  
}

console.log(a);

// Output
// undefined 20 10

// first output will be 'undefined' as 'var' hoists 
// the variable but the value is not defined.

// second output is 20.

// third output is 10 as 'let' is block-scoped so the
// variable in global scope is logged.