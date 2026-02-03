// Q15. Throwing Inside a Chain

Promise.resolve(1)
    .then(x => {
        throw new Error("Invalid");
    })
    .catch(err => {
        console.log("Caught Error");
        return 10;
    })
    .then(x => console.log(x));

// Output
// Caught Error
// 10

// Promise sends the value 1 to 'then' block 
// where a new error object is created, after 
// which that error goes to 'catch' block for 
// handling where a statement is printed and 
// a value is returned which is passed to the 
// next 'then' block which logs the passed value.