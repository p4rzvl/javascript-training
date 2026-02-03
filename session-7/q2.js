// Q2. Basic Promise Flow
console.log(1);
Promise.resolve().then(() => {
    console.log(2);
});
console.log(3);

//Output
// 1 3 2

// This is basic flow of execution for promise where the call stack
// firstly executes the the function in global context and the Promises 
// are moved to micro-task stack. After call stack has finished its 
// execution the micro-task stack is executed. 
