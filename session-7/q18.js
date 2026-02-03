// Q18. Variable Hoisting & Promises

console.log(a);
var a = 5;

Promise.resolve().then(() => {
    console.log(a);
});

a = 10;


// Output
// undefined
// 10


// Upon execution of this code first line logs 'undefined'(hoisting),
// then after execution of callstack the value of a is 10 and promise 
// logs the value 10 as it was stored before the promise is resolved 