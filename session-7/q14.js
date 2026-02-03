// Q14. The "Callback" Context Trap

const player = {
    score: 50,
    updateScore() {
        setTimeout(function() {
            console.log(this.score);
        }, 100);
    }
};

player.updateScore(); 

// Output
// 50

// 'console.log(this.score);' finds the 'score' 
// property in the global context as it is in 
// setTimeout scope which moves the function to 
// macro task queue and at time of its execution 
// the object player is not present in the callstack 
// so it gives output 'undefined'.
