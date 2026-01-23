//Task 1
// Goal: Create a function getType(value) that returns the true type of a value as a string. 
// Requirements:
// It must distinguish between null, array, and standard objects.
// Standard typeof returns 'object' for all three. Your function needs to be smarter.

function getType(value) {
    if (value === null) {
        return "null";
    }
    else if (Array.isArray(value)){
        return "array";
    }
    else {
        return "object";
    }
  }
  console.log(getType(null));      // Should return "null"
  console.log(getType([1, 2]));    // Should return "array"
  console.log(getType({a: 1}));    // Should return "object"
  

// Task -2
// Goal: Predict and fix a side-effect bug where a function modifies the original array passed to it. 
// Requirements:
// Write a function addToCart that takes a cart array and a newItem object.
// It should return a new array with the item added.
// Constraint: The original cart array passed in must remain unchanged.

const initialCart = [{ id: 1, name: "Book" }];
function addToCart(cart, newItem) {
   return cart.concat(newItem)
}

const newItem = {id: 2, name: "Pen"};
const newCart = addToCart(initialCart, newItem);
console.log(initialCart);
console.log(newCart);



// Task 3: Nested React State (Medium)
// Goal: Update a deeply nested property in an immutable way (common in Redux/React). 
// Requirements:
// Given the state object below, write a one-line function to update isDark to true inside theme.
// You must not mutate state directly. Return a new object.

const state = {
  user: { id: 1, name: "John" },
  settings: {
    theme: { color: "blue", isDark: false },
    notifications: true
  }
};
const updateTheme = (currentState) => {
    // Return new state with isDark: true
    const setting = {...state, settings: {...state.settings, theme: {...state.settings.theme, isDark: true}}};
    return setting
}
const updatedTheme = updateTheme(state)
console.log(updatedTheme);



// Task 4: Deep Comparison (Hard)
// Goal: Write a function isEqual(a, b) that compares two values. 
// Requirements:
// It should return true if they are structurally equal (same keys and values), even if they are different references.
// It must support nested objects.
// Assume inputs are JSON-compatible (no functions or circular refs for now).

const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
const objC = { a: 1, b: { c: 3 } };
console.log(objA === objB); // false (references differ)
console.log(isEqual(objA, objB)); // Should be true
console.log(isEqual(objA, objC)); // Should be false

function isEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a === null || b === null){
        return false;
    }
    if (typeof a != "object" || typeof b != "object") {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let key of keysA) {
        if(!keysB.includes(key)) {
            return false;
        }
        if(!isEqual(a[key], b[key])) {
            return false;
        }
    }
    return true
}



// Task 5: The Circular Reference Trap (Hard)
// Goal: Create a deep copy function that handles circular references without crashing. 
// Requirements:
// Standard recursion crashes if Object A references Object B, and Object B references Object A.
// Implement deepClone(obj) using a WeakMap or Map to track visited objects.

const a = { name: "Alice" };
const b = { name: "Bob" };
a.friend = b;
b.friend = a; // Circular reference created
const clone = deepClone(a);

console.log(clone.friend.friend.name === "Alice"); // true
console.log(clone !== a); // true
console.log(clone.friend !== b); // true


function deepClone(obj, map = new Map()) {
    if(obj === null || typeof(obj) !== "object") {
        return obj;
    }

    if (map.has(obj)) {
        return map.get(obj);
    }
    const clone = Array.isArray(obj) ? [] : {}

    map.set(obj, clone)

    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            clone[key] = deepClone(obj[key], map)
        }
    }
    return clone;
}