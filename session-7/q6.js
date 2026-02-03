// Q6. The "Lost" Context

const user = {
    name: "Alex",
    printName() {
        console.log(this.name);
    }
};

const print = user.printName;
print();

// Output
// undefined

// Here the same logic as que4 is applied the value of 
// user.printName is stored in other variable then called 
// as function which looks for printName in global object 
// and as it cannot find it the value undefined is logged

// if we directly run 'user.printName()' we will get 
// "Alex" as output.