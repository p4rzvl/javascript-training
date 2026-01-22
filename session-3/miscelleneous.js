// ----------Task 1: The Formatter (Easy)----------
// Goal: Given an array of user objects with firstName and lastName, 
// return a new array of strings containing their full names.

const users = [
    { firstName: "Alice", lastName: "Johnson" },
    { firstName: "Bob", lastName: "Smith" },
    { firstName: "Charlie", lastName: "Davis" }
  ];
  
  // Expected Output: ["Alice Johnson", "Bob Smith", "Charlie Davis"]

const output1 = users.map(i => i.firstName + " " + i.lastName);
console.log(output1);


// ----------Task 2: Inventory Clean-up (Medium)----------
// Goal: You have an array of product objects. Each has a name, price, and inStock (boolean). 
// Return an array of names of products that are in stock and cost less than $50.

const products = [
    { name: "Laptop", price: 1200, inStock: true },
    { name: "Mouse", price: 25, inStock: true },
    { name: "Keyboard", price: 45, inStock: false },
    { name: "USB Cable", price: 10, inStock: true },
    { name: "Monitor", price: 200, inStock: true }
  ];
  
  // Expected Output: ["Mouse", "USB Cable"]
  const output2 = products
  .filter(i => i.inStock == true && i.price < 50)
  .map(i => i.name);

  console.log(output2);

//---------Task 3: Permission Checker (Medium)-----------
//  Goal: Given an array of user roles (e.g., ['editor', 'viewer', 'admin']), 
// write a function that returns true if the user has 'admin' permissions, 
// but do it without using .includes() or a for loop.

const userRoles = ['viewer', 'editor', 'contributor', 'admin'];

// Goal: Return true if 'admin' exists, false otherwise.
const admin_filter = userRoles.filter(i => i == "admin")
if (admin_filter.length > 0) {
    console.log(true);
}
else{
    console.log(false);
}; 


// ----------Task 4: The Data Grouper (Hard)----------
// Goal: You have a list of blog posts, each with a category and title. 
// Use .reduce() to create an object where the keys are the categories 
// and the values are arrays of titles belonging to that category.

const posts = [
    { title: "React Basics", category: "Frontend" },
    { title: "Node Streams", category: "Backend" },
    { title: "Async/Await", category: "JS" },
    { title: "CSS Grid", category: "Frontend" },
    { title: "Express Middleware", category: "Backend" }
  ];
  
  /* Expected Output:
  {
    Frontend: ["React Basics", "CSS Grid"],
    Backend: ["Node Streams", "Express Middleware"],
    JS: ["Async/Await"]
  }
  */

const output4 = posts.reduce((acc, post) => {
    if (acc[post.category]){
        acc[post.category].push(post.title)
    }
    else{
        acc[post.category] = [post.title];
    }
        return acc;
    }, {});
console.log(output4);


//----------Task 5: Deep Flatten (Hard)----------
// Goal: Write a function that takes an array which might contain nested arrays 
// (e.g., [1, [2, 3], [[4], 5]]) and returns a single flat array [1, 2, 3, 4, 5].
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];

// Goal: Return [1, 2, 3, 4, 5, 6, 7, 8]
// Use .reduce() and recursion.

function deepFlatten(arr) {
  return arr.reduce((flat, item) => {
    if (Array.isArray(item)){
    return flat.concat(deepFlatten(item));
  }
  return flat.concat(item);
}, []);
}

const output5 = deepFlatten(nestedArray);
console.log(output5);
