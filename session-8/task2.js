// function countWithDelay() {
// // Your code here
// // Should output: 1 (after 1s), 2 (after 2s), 3 (after 3s), 4 (after 4s), 5 (after 5s)

//     for (let count = 1; count< 6; count++){
//         setTimeout(function () {
//             console.log(count)
//         }, count*1000)
//    };
// };
   
// countWithDelay();

// simple timeout called in for loop and the time 
// is set dynamically as we need delay of 1s after each log  


// Code Block 2

// for (let i = 0; i < 3; i++) {
//     setTimeout(function() {
//       console.log(i); // Currently logs: 3, 3, 3
//     }, 1000);
//    }

// var is function-scoped so there is only one 'i' for the whole loop
// when the setTimeout runs it refers to the final value 3 


// Code Block 3
function countdown(start) {
// Your code here
// Should log numbers from start to 0, with 1 second between each
// Should stop at 0
    for (let count = 0; count< (start+1); count++){
            setTimeout(function () {
                console.log(start - count)
            }, count*1000)
    }


}
countdown(10);

//