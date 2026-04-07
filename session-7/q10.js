// Q10. Catch and Continue

Promise.reject("Fail")

    .catch((err) => {
        console.log(err);
        return "Recovered";
    })
    .then((res) => console.log(res));
    

// Output
// Fail
// Recovered

// As the promise is rejected the value of 'reject' 
// goes to 'catch' block where firstly the passed 
// argument is logged after that the value "Recovered" 
// is passed to the 'then' block in chain which logs the passed argument.

// if we move the then block above 'catch', it will only log "Fail".