// Q9. Chaining Returns

Promise.resolve(5)
    .then((val) => {
        console.log(val);
        return val + 5;
    })
    .then((val) => console.log(val));

//Output
// 5
// 10

// Line by line execution
// Promise.resolve(5) 
// .then((val) => { // val === 5
//     console.log(val); // 5
//     return val + 5; // val === 10, passed to the next 'then' block
// })
// .then((val) => console.log(val)); // 10
