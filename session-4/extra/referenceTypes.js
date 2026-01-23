// Task 1: Safe Object Access (Easy)
// Goal: Extract nested data safely without crashing if a property is missing. 
// Requirements:

// Given a user object that might be missing the address or zip property.
// Log the zip code. If missing, log "N/A".
// Use Optional Chaining (?.) and Nullish Coalescing (??).

const user1 = { name: "Alice", address: { zip: 90210 } };
const user2 = { name: "Bob" }; // address is undefined
function getZip(user) {
  return user?.address?.zip ?? "N/A";
}

console.log(getZip(user1));
console.log(getZip(user2));



// Task 2: Array Transformation (Medium)
// Goal: Use Functional Programming (Reference creation) over Mutation. 
// Requirements:
// Convert an array of raw prices [10, 20, 30].
// Return a new array of strings formatted as ["$10.00", "$20.00", "$30.00"].
// The original array must stay numbers.

const prices = [10, 20, 30];

function formatPrices(arr) {

    return arr.map(p => `$${p}`);
}

const fprices = formatPrices(prices);

console.log(prices);
console.log(fprices);



// Task 3: The Reference Remover (Medium)
// Goal: Remove a specific item from an array in a React-friendly way (Immutability). 
// Requirements:
// Write a function removeItem(items, idToRemove).
// It must return a new array excluding the item with that id.
// Do not use .splice() (which mutates). Use .filter().

const cart = [ { id: 1, item: "Book" }, { id: 2, item: "Pen" } ];

function removeItem(items, id) {
   // Return new array
   return cart.filter(item => item.id != id)
}
const newCart = removeItem(cart, 1)
console.log(cart);
console.log(newCart);



// Task 4: Data Grouping (Hard)
// Goal: Transform an array of objects into a grouped object (Dictionary/Map). 
// Requirements:
// Convert an array of orders into an object where keys are status and values are arrays of orders.
// Use .reduce().

const orders = [
    { id: 1, status: "pending" },
    { id: 2, status: "shipped" },
    { id: 3, status: "pending" }
  ];
  
  /* Expected Output:
  {
    pending: [{ id: 1... }, { id: 3... }],
    shipped: [{ id: 2... }]
  }
  */
  function groupOrders(orders) {
    
    return orders.reduce((acc, order) => {
        const status = order.status

        if (!acc[status]){
            acc[status] = []
        }
        acc[status].push(order)

        return acc
    }, {})
}

const formatOrder = groupOrders(orders)
console.log(formatOrder);



// Task 5: Function Memoization (Hard)
// Goal: Build a caching wrapper function. 
// Requirements:
// Write a function memoize(fn).
// It takes a function fn (which accepts one argument) and returns a new function.
// If the new function is called with an argument it has seen before, return the cached result.
// If new, run fn, cache the result, and return it.
// Function to be memoized

const heavyCalc = (x) => { console.log("Calculating..."); return x * 2; };
// Implement this
function memoize(fn) {

   const cache = {};
   return function(arg) {
      
    if (arg in cache) {
        return cache[arg];
    }

    const ans = fn(arg);
    cache[arg] = ans;
    // console.log(cache);
    return ans
   }
}
const fastCalc = memoize(heavyCalc);
console.log(fastCalc(5)); // Logs "Calculating...", returns 10
console.log(fastCalc(5)); // Does NOT log "Calculating...", returns 10 from cache



