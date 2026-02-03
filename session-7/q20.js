// Q20. Object Method Assigned to Class

class Manager {
    constructor(name) {
        this.name = name;
    }

    print = () => {
        console.log(this.name);
    }
}

const m = new Manager("Sarah");
const p = m.print;
p();

// Output
// Sarah

// new Manager object is created with name "Sarah"
// the print attribute is assigned to other variable called p
// which called upon finds the value of name in parent 
// object(arrow function) which logs the name "Sarah" 