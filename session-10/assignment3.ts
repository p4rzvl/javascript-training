// Union types

// A union type allows a variable to be one of multiple types.
// i.e. if we are taking a union of multiple types then when creating a new type object
// we have to define all the keys of one specific type as per schema to create the object.



type Admin = {
  role: "admin";
  permissions: string[];
};
type Customer = {
  role: "customer";
  purchaseHistory: number[];
};
type User = Admin | Customer;

// type Guest = User | Admin | Customer;

const user1:User = {
    role : "admin",
    permissions: ["READ", "WRITE"]
}