// Q3. The Broken Chain

Promise.reject("Error Occurred")
    .then(() => console.log("Success"))
    .catch((err) => console.log(err));
//Output
//Error Occurred

// In this code the Promise block is executed and it is 
// rejected so it goes to error handling block catch where 
// the error or the output of reject block is logged 