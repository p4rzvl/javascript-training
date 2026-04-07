// Q16. Async Function Order

async function foo() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}

console.log("C");
foo();
console.log("D");

// Output
// C A D B

// When executed this code, C is logged first, 
// then foo function is called which logs the 
// value B, after which there is await block which 
// moves the rest of the following lines in that 
// function scope to microtask queue and after the 
// execution of all the synchronous code(callstack) 
// the microtask queue is executed 