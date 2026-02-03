// Q7. Event Loop Basic Race

console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Output
// Start End Promise Timeout

// In execution, firstly the global functions(Callstack)
// are executed then Promises(Microtask) and after that 
// the setTimeout(Macrotask) function 
// Execution order: Callstack -------->   Microtask   -------->     Macrotask
//                                 (Promise.then, await)   (setTimeout, setInterval)