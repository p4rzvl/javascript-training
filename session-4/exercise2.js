function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function () {
  console.log(`${this.name} is eating.`);
};

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// Intent: Dog should inherit from Animal
Dog.prototype = Animal.prototype;

Dog.prototype.bark = function () {
  console.log(`${this.name} is Woof!`);
};

const myDog = new Dog("Buddy", "Golden");
const genericAnimal = new Animal("Generic");

genericAnimal.bark(); // Why does this happen?
// Because this line executes the prototype function inherited from
// the parent class Animal

console.log(myDog.constructor.name); // Why is this 'Animal' and not 'Dog'?
// Because myDog is inherites the prototype functions from the Animal and
// myDog.constructor works as a metadata retriver so the name attribute points to 
// the original class "Animal" if we remove the line "Dog.prototype = Animal.prototype;"
// then it will give output as "Dog"
