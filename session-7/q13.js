// Q13. Promise.all Failure

Promise.all([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2")
])
.then(res => console.log("Result:", res))
.catch(err => console.log("Caught:", err));


// Output
// Caught: Error 1

// Promise.all takes an array of promises which must be resolved
// if any of them are not resolved it will treat entire promise statement
// as rejected
// if all the promises are resolved then 
// it will return an array of outputs of each promise 