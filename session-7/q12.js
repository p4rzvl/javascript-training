// Q12. Explicit Binding (Call/Apply)

const agent = {
    id: 101
};

function showId() {
    console.log(this.id);
}

showId.call(agent);
showId.apply(null);

//Output
// 101
// undefined

// call(agent) binds this to agent and apply(null) binds window
// if we call apply(agent) it will give same output as call(agent)
