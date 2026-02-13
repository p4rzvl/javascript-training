// Create a function that accepts any and performs operations without checks.

function func1(a: any, b:any):any{
    return a+b;
}

// Create the same function using unknown and add proper type guards

function func2(value:unknown){
if (typeof value === 'string') {
    value.toUpperCase();
    }
}

// Create one variable using any

let b: any = "Parva Kumar  ";

let c: unknown = "Parva     ";

console.log(b + b.length)
// console.log(c + c.length) // this will not be called as it is in unknown type,
                             //  it's type is not defined (better typeguarding)


b.trim();
console.log(b + b.length)

if (typeof c === "string"){
    console.log(c+ c.length); // this will work as we have implemented typeguarding condition
    c.trim()                   
}


// Which one forces you to write safer code?

// 'unknown' is the better type to use when we don't 
// know what type to use compared to 'any', 'any' diminishes 
// the use of typescript as it will assign any type to a 
// variable which is just javascript but with more boilerplate code.




