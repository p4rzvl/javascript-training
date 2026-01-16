//Shadowing examples
//Code 1
let x = 10;

function test() {
    let x = 20; // shadows outer x
    console.log(x); // 20
}

test();
console.log(x); // 10

//Code 2
let a = 10;

{
    var a = 20; // Illegal shadowing
}


//Code 3
var b = 10;

{
    let b = 20; // allowed
    console.log(b); // 20
}

console.log(b); // 10


// Pass by value vs pass by reference

function changeValue(x) {
    x = 100;
}

let num = 10;
changeValue(num);

console.log(num); // 10 (unchanged)

function changeObject(obj) {
    obj.value = 100;
}

let data = { value: 10 };
changeObject(data);

console.log(data.value); // 100

