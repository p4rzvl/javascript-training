// Exercise 7: The "this" Detective
// Scenario: The code below is broken (it logs undefined).
// Explain why it fails.
// Fix it so it logs "Hello, Alex".
// JavaScript
// const user = {
//     name: "Alex",
//     greet: () => {
//         console.log("Hello, " + this.name);
//     }
// };
// user.greet();


const user = {
    name: "Alex",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
user.greet();
