// Q5. Math in Promises

Promise.resolve(10)
    .then((num) => num * 2)
    .then((result) => console.log(result));

// Output
// 20

// In this promise the value of resolve block is 
// passed to first 'then' block where the value is 
// multiplied by 2 and passed to the next 'then' 
// block in chain which logs the value to the console