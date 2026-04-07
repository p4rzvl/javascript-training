// Q4. Global vs. Local Scope

var status = "Offline";

const server = {
    status: "Online",
    getStatus: function() {
        return this.status;
    }
};

console.log(server.getStatus()); // Online

// in this code the firstly we are assigning the global 
// variable status as "Offline" and then calling the 
// "this" object method in server object which first looks 
// for the status property in the server object and returns 
// "Online" or undefined if it can't find it.

// if we store the value of server.getStatus to another variable 
// and then call the function it will refer to the global 
// object which will log "Offline". 
