// Assignment 3
// Create a function updateField that takes:
// object
// key
// value
// Ensure the value type matches the key type.
// Try assigning wrong type and observe the error.


function update<T, K extends keyof T> (obj: T, key: K, value:T[K]){
    obj[key] = value;
    console.log(`Updated ${String(key)}: ${value}`)
}

const userProfile = {
    name:"Parva",
    age: 22,
    isMember: true,
    city: "Ahmedabad"
};

console.log("Before Update: ", userProfile);

update(userProfile, "name", "Yash")
update(userProfile, "age", 25)
update(userProfile, "isMember", false)
update(userProfile, "city", "Gandhinagar")

console.log("After Update: ", userProfile);


