// Declare variables using let and const with initial values and observe inferred types
let a: number = 5
const b: string = "UserID"

console.log(a)
console.log(b)

// Try reassigning incompatible values and note the compiler errors
// a = true; // Type 'boolean' is not assignable to type 'number'.
// a = b; // Type 'string' is not assignable to type 'number'.

// b = "ID"; // Cannot assign to 'b' because it is a constant.
a = 10; // No error.


// Write a function without a return type and inspect what TypeScript infers

function add(a:number, b:number) {  //function add(a: number, b: number): void
    
    console.log(a+b);
    
}

add(5, 10)