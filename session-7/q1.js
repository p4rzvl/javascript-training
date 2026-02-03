// Q1. Simple Object Context
const laptop = {
    brand: "Dell",
    getBrand: function() {
        return this.brand;
    }
};
const myBrand = laptop.getBrand();
console.log(myBrand); // Dell
// This is example of simple function calling where we are calling a 
// function and storing its value in myBrand
