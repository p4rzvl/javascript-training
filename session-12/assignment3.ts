// Assignment 3
// Create overloads for a function format that:
// Accepts number → returns string
// Accepts Date → returns string


function format(value: number):string;
function format(value: Date): string;

function format(value:number | Date): string{
    if (typeof value === "number"){
        return value.toFixed(2)
    }

    if (value instanceof Date) {
        return value.toISOString();
    }

    throw new Error("Invalid argument");
}


const a = format(30);
const b = format(new Date());

// format("hello");// No overload matches this call.
// Overload 1 of 2, '(value: number): string', gave the following error.
//   Argument of type 'string' is not assignable to parameter of type 'number'.
// Overload 2 of 2, '(value: Date): string', gave the following error.
//   Argument of type 'string' is not assignable to parameter of type 'Date'.ts(2769)