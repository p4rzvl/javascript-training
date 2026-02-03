// Q11. The Nested Timeout

console.log('A');

setTimeout(() => {
    console.log('B');
}, 0);

Promise.resolve().then(() => {
    console.log('C');
    Promise.resolve().then(() => console.log('D'));
});

console.log('E');

// Output
// A E C D B

// Execution order:
// A(log()) -> E(log()) -> C(Promise) -> D(Promise->Promise) -> B(setTimeout())
