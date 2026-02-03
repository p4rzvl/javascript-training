// Q17. The "Finally" Gotcha

Promise.resolve("Done")

    .finally(() => {
        console.log("Cleanup");
        return "Modified?";
    })
    .then(res => console.log(res));

// Output
// Cleanup
// Done

// Simple example of seuqence of execution where we 
// are firstly executing the 'finally' block regardless 
// of fulfillment of promise after which the 'then' block 
// is executed which takes the value from the Promise and logs it