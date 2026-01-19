const user = {
    name: "Alex",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
user.greet();
