// Q8. Arrow Function Pitfall

const group = {
    title: "Developers",
    getTitle: () => {
        console.log(this.title);
    }
};

group.getTitle();

// Output
// undefined

// getTitle is using arrow function which doesn't bind 
// 'this' so it finds the value in global scope which 
// returns the value "undefined"
