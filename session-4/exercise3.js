// function SmartPhone(brand) {
//   this.brand = brand;

//   return {
//     brand: "Generic",
//     os: "Android",
//   };
// }

//fix (Don't use return)
// function SmartPhone(brand) {
//   this.brand = brand;
//   this.os = "Android"
// }

SmartPhone.prototype.getBrand = function () {
  return this.brand;
};

const myPhone = new SmartPhone("Apple");


console.log(myPhone.brand); // Generic -> Apple
console.log(myPhone.getBrand()); // undefined -> Apple
